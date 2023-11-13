import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pagination from "react-js-pagination";


const OXNotePage = () => {
  const [notes,setNotes] =useState([]);
  const size =10;
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const path = location.pathname; //navigate에서 쓸거임
  const page = parseInt(search.get('page')?search.get('page'):1);
  const navigator = useNavigate();
  const [total,setTotal] = useState(0); 

  const getNotes=async()=>{
    //오답노트에 해당되는 QUIZ가져오기
    //api임의작성
    const res = await axios.get(`/mypage/oxnote.list?user_id=${sessionStorage.getItem('user_id')}&page=${page}&size=${size}`);
    console.log(res.data.list)
    setNotes(res.data.list);
    setTotal(res.data.total);
  }

  useEffect(()=>{
    getNotes();
  },[])
  useEffect(()=>{
    getNotes();
  },[location]);

  const onChangePage =(page)=>{
    navigator(`${path}?user_id=${sessionStorage.getItem('user_id')}&page=${page}&size=${size}`)
  }

  return (
    <div className='page_wrap'>
      {/* 오답노트에 오답노트에 등록되어있는 문제리스트-> 해당문제 선택 -> 내가 푼 문제 리스트 ox여부+ 오답노트contents 랜더링 ,해당페이지에서 오답노트 contents 등록삭제수정 기능제공 */}
      {/* 
      오답노트 첫 페이지 오답노트 리스트 랜더링
      SELECT o.*,p.title,p.grade FROM oxnote o JOIN problems p ON o.problem_id = p.problem_id WHERE o.user_id = '8'; */}
      {/* 해당 post클릭시 이동한페이지 user_id,problem_id 를가지고 solution list랜더링 , 하단에 note insert 부분 랜더링 -> user_id랑 problem_id같은 note행 update*/}
      <div className='oxnotepage_wrap'>
        <div className='oxnotepage_title'>
          <p>📖 오답노트</p>
        </div>
        <div className='oxnotepage_table'>
          <Table>
            <thead>
              <tr>
                <th width='8%'>문제번호</th>
                <th width='50%'>문제제목</th>
                <th width='8%'>난이도</th>              
                <th width='14%'></th>
              </tr>
            </thead>
            <tbody>
              {notes.map(note=>
                <tr className='oxnotepage_list'>
                  <td>{note.problem_id}</td>
                  <td>{note.title}</td>
                  <td><div className='oxnotepage_difficulty_easy'>
                    <p className='oxnotepage_difficultytext'>{note.grade}</p>
                  </div></td>
                  <td><Button size='sm px-4' variant='dark' className=''>오답노트가기</Button></td>
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
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default OXNotePage