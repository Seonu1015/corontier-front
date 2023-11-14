import React,{ useEffect,useState} from 'react';
import { Table,Dropdown,Button} from 'react-bootstrap';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination'

const Posts = ({getMenutype}) => {
  const [posts,setPosts] = useState([]);
  const [menu,setMenu] = useState('-1');
  const size =10;
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const path = location.pathname; //navigate에서 쓸거임
  const page = parseInt(search.get('page')?search.get('page'):1);
  const navigator = useNavigate();
  const [total,setTotal] = useState(0); 
  
  

  const getPosts= async()=>{
    //내가쓴 post정보들을 가져오는 쿼리(기본값 전체 select)
    const res = await axios.get(`/mypage/posts.list?user_id=${sessionStorage.getItem('user_id')}&menu=${menu}&page=${page}&size=${size}`)
    console.log(res.data)
    
    setPosts(res.data.list);
    setTotal(res.data.total);
  }
  
  useEffect(()=>{
    getPosts();
  },[location]);

  useEffect(()=>{
    getPosts();
  },[menu]);


  const handleSelect = (eventKey) => {
    // 선택된 아이템에 해당하는 값을 categ 상태로 설정
    setMenu(eventKey);
  };

  const onChangePage =(page)=>{
    navigator(`${path}?user_id=${sessionStorage.getItem('user_id')}&menu=${menu}&page=${page}&size=${size}`)
  }

  
  return (
    <div>
      
      <div>
      <Dropdown className='scrapspage_dropdown' onSelect={handleSelect}>
        <Dropdown.Toggle variant="dark" id="dropdown-basic" className='post-categ-dropdownbtn'>
          {getMenutype(menu)}
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
          <Dropdown.Item eventKey="0">전체</Dropdown.Item>        
          <Dropdown.Item eventKey="1">프로젝트</Dropdown.Item>        
          <Dropdown.Item eventKey="3">라운지</Dropdown.Item>
          <Dropdown.Item eventKey="4">스터디&프로젝트(모집)</Dropdown.Item>
          <Dropdown.Item eventKey="5">Q&A</Dropdown.Item>
          <Dropdown.Item eventKey="6">교재&강의추천</Dropdown.Item>
          <Dropdown.Item eventKey="7">공모전(팁)</Dropdown.Item>
          <Dropdown.Item eventKey="8">공모전(후기)</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      
    </div>
      {/* 선택한카테고리 ===post.category && 내용출력 */}
      <Table className='MyActivityPageex_table text-center'>
        <thead>
          <tr>
            <th width="15%">카테고리</th>
            <th width="45%">title</th>
            <th width="22%">작성일(수정일)</th>
            <th width="18%"></th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post=>
            <tr>
              <td>{getMenutype(String(post.menu))}</td>
              <td><div className='ellipsis1'>{post.title}</div> </td>
              <td>{post.created_at === post.updated_at ?
              post.date:post.newdate}</td>
              <td><Button variant='outline-dark' size='sm'>해당 게시글로 이동</Button></td>
            </tr>
            )}
        </tbody>
      </Table>
      {total >size &&
        <Pagination
          activePage={page}
          itemsCountPerPage={size}
          totalItemsCount={total}
          pageRangeDisplayed={10}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={ onChangePage }/>
      }    
    </div>
  )
}

export default Posts