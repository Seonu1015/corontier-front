import React,{ useEffect,useState} from 'react';
import { Table,Dropdown,Button} from 'react-bootstrap';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination'

function QuizList() {


  const handleSelect = (eventKey) => {
    // 선택된 아이템에 해당하는 값을 categ 상태로 설정
    
  };
  return (
    <div>
      <Dropdown onSelect={handleSelect}>
    <Dropdown.Toggle variant="success" id="dropdown-basic" className='post-categ-dropdownbtn'>
      전체
    </Dropdown.Toggle>
    
    <Dropdown.Menu>
      <Dropdown.Item eventKey="-1">전체</Dropdown.Item>        
      <Dropdown.Item eventKey="0">틀린문제</Dropdown.Item>        
      <Dropdown.Item eventKey="1">맞은문제</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown></div>
  )
}

export default QuizList