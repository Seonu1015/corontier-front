
import React, { useEffect, useState } from 'react'
import { Button, NavLink, Table } from 'react-bootstrap'
import { Link, useLocation,useNavigate } from 'react-router-dom';
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
  const [expandedNotes, setExpandedNotes] = useState([]);
  const navi = useNavigate();

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

  //노트보기 버튼 클릭시 content 보기
  const onToggleNotes = (problem_id) => {
    //클릭된 노트의 확장여부를 토글
    setExpandedNotes(prevNotes => {
      if(prevNotes.includes(problem_id)){
        return prevNotes.filter(id => id !== problem_id);
      } else{
        return [...prevNotes, problem_id];
      }
    });
  }

  //난이도에 따른 배경 컬러 변경
  const getColor = (grade_id) => {
    switch(grade_id){
      case 1 :
        return "#A9E2F3";
      case 2 :
        return "#ABF2D3";
      case 3 :
        return "#FCE886";
      case 4 :
        return "#FCC986";
      default :
        return "#FCAB9E";
    }
  }

  return (
    <div className='page_wrap'>
      {/* 오답노트에 오답노트에 등록되어있는 문제리스트-> 해당문제 선택 -> 내가 푼 문제 리스트 ox여부+ 오답노트contents 랜더링 ,해당페이지에서 오답노트 contents 등록삭제수정 기능제공 */}
      {/* 
      오답노트 첫 페이지 오답노트 리스트 랜더링
      SELECT o.*,p.title,p.grade FROM oxnote o JOIN problems p ON o.problem_id = p.problem_id WHERE o.user_id = '8'; */}
      {/* 해당 post클릭시 이동한페이지 user_id,problem_id 를가지고 solution list랜더링 , 하단에 note insert 부분 랜더링 -> user_id랑 problem_id같은 note행 update*/}
      <div className='allmypage_wrap'>
        <div className='allmypage_title'>
          <p>오답노트</p>
        </div>
        <div className='allmypage_contents'>
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
              <React.Fragment key={note.problem_id}>
                <tr className='oxnotepage_list'>
                  <td>{note.problem_id}</td>
                  <td>
                    <div className='oxnotepage_detail_div' onClick={()=>navi(`/user/mypage/oxnote/detail/${note.problem_id}`)} style={{cursor:'pointer'}}>
                      {note.title}
                    </div>
                  </td>
                  <td>
                    {/* 난이도에 따른 배경컬러 변경 */}
                    <div className='oxnotepage_difficulty'
                    style={{backgroundColor:getColor(note.grade_id)}}>
                      <p className='oxnotepage_difficultytext'>{note.grade}</p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <Button size='sm px-4' variant='outline-dark' className='oxnotepage_btnnote'
                        onClick={()=>onToggleNotes(note.problem_id)}>오답노트보기</Button>
                    </div>
                  </td>
                </tr>
                {/* 노트가 확장된 경우, 추가 내용 표시 */}
                {expandedNotes.includes(note.problem_id) && (
                  <tr>
                    <td colSpan="6">
                      <div className='oxnote_buttonpage'>{note.content? note.content : "오답노트 없음"}</div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
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