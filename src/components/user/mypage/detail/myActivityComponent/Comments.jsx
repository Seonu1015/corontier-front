import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from "react-js-pagination";
import '../../../../../css/Pagination.css';
import { Button, Table ,Dropdown} from 'react-bootstrap';
import { useLocation,useNavigate } from 'react-router-dom';

const Comments = ({getMenutype}) => {
  const [comments, setComments] = useState([]);
  const [menu,setMenu] = useState('-1');
  const size =10;
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const path = location.pathname; //navigate에서 쓸거임
  const page = parseInt(search.get('page')?search.get('page'):1);
  const navigator = useNavigate();
  const [total,setTotal] = useState(0); 


  const getComments = async () => {
    const res = await axios.get(`/mypage/comments.list?user_id=${sessionStorage.getItem("user_id")}&menu=${menu}&page=${page}&size=${size}`);
    console.log(res.data)
    setComments(res.data.list);
    setTotal(res.data.total);
  }

  useEffect(()=>{
    getComments();
  },[location]);
  useEffect(()=>{
    getComments();
  },[menu]);
  const onChangePage =(page)=>{
    navigator(`${path}?user_id=${sessionStorage.getItem('user_id')}&menu=${menu}&page=${page}&size=${size}`)
  }

  const handleSelect = (eventKey) => {
    // 선택된 아이템에 해당하는 값을 categ 상태로 설정
    setMenu(eventKey);
  };

  const onClickToggle=()=>{
    
  }
  return (
    <div className='commentspage_content'>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className='post-categ-dropdownbtn'>
          {getMenutype(menu)}
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
          <Dropdown.Item eventKey="0">전체</Dropdown.Item>        
          <Dropdown.Item eventKey="1">프로젝트</Dropdown.Item>        
          <Dropdown.Item eventKey="3">라운지</Dropdown.Item>
          <Dropdown.Item eventKey="4">스터디&프로젝트(모집)</Dropdown.Item>
          <Dropdown.Item eventKey="5">Q&A</Dropdown.Item>
          {/* <Dropdown.Item eventKey="6">교재&강의추천</Dropdown.Item> */}
          <Dropdown.Item eventKey="7">공모전(팁)</Dropdown.Item>
          <Dropdown.Item eventKey="8">공모전(후기)</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Table className='text-center'>
        <thead>
          <tr>
            <th>게시글 카테고리</th>
            <th>댓글 내용</th>
            <th></th>
            <th>작성일(수정일)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {comments.map(comment=>
            <tr>         
              <td>{getMenutype(String(comment.menu))}</td>            
              <td><div className='ellipsis1 d-flex justifiy-content-between'>{comment.content}</div> </td>
              <td><Button variant='outline-dark' size='sm'>더보기</Button></td>
              <td>{comment.created_at === comment.updated_at ?
              comment.date:comment.newdate}</td>
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

export default Comments