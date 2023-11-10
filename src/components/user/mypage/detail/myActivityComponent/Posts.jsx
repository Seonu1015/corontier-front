import React,{ useEffect,useState} from 'react';
import { Table,Dropdown} from 'react-bootstrap';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination'

const Posts = () => {
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

  const getMenutype = (menu) => {
    
    switch (menu) {
      case '-1':
        return '카테고리선택';
      case '0':
        return '전체';
      case '1':
        return '프로젝트';
      case '2':
        return '공지사항';
      case '3':
        return '라운지';
      case '4':
        return '스터디&프로젝트';
      case '5':
        return 'Q&A';
      case '6':
        return '교재&강의추천';
      case '7':
        return '공모전(팁)';
      case '8':
        return '공모전(후기)';
      default:
        return typeof(menu);
    }
  };
  return (
    <div className='p-3'>
      
      <div>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className='post-categ-dropdownbtn'>
          {getMenutype(menu)}
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
          <Dropdown.Item eventKey="0">전체</Dropdown.Item>        
          <Dropdown.Item eventKey="1">프로젝트</Dropdown.Item>        
          <Dropdown.Item eventKey="3">라운지</Dropdown.Item>
          <Dropdown.Item eventKey="4">스터디&프로젝트</Dropdown.Item>
          <Dropdown.Item eventKey="5">Q&A</Dropdown.Item>
          <Dropdown.Item eventKey="6">교재&강의추천</Dropdown.Item>
          <Dropdown.Item eventKey="7">공모전(팁)</Dropdown.Item>
          <Dropdown.Item eventKey="8">공모전(후기)</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      
    </div>
      {/* 선택한카테고리 ===post.category && 내용출력 */}
      <Table className='text-center'>
        <thead>
          <tr>
            <th width="10%">카테고리</th>
            <th>title</th>
            <th>작성일(수정일)</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post=>
            <tr>
              <td>{getMenutype(String(post.menu))}</td>
              <td><div className='ellipsis1'>{post.title}</div> </td>
              <td>{post.created_at === post.updated_at ?
              post.date:post.newdate}</td>
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