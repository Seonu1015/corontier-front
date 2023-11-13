import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useLocation, NavLink } from 'react-router-dom'

const OXNotePage = () => {
  const [oxnotes, setOXNotePage] = useState([]);
  
  const location = useLocation();

  const getOXNotePage = async () => {
    const res = await axios.get(`/mypage/oxnote.list?user_id=${sessionStorage.getItem("user_id")}`);
    //console.log(res.data);
    setOXNotePage(res.data);
  }

  useEffect(()=>{
    getOXNotePage();
  },[]);

  // 문제페이지 이동
  const onClickLink = (problem_id) => {
    window.location.href=`/mypage/oxnote/detail/${problem_id}`;
  }

  return (
    <div className='page_wrap'>
      <div className='oxnotepage_wrap'>
        <div className='oxnotepage_title'>
          <p>오답노트</p>
        </div>
        <div className='oxnotepage_table'>
          <Table>
            <thead>
              <tr>
                <th width='5%'>번호</th>
                <th width='48%'>문제</th>
                <th width='11%'>문제풀이</th>
                <th width='10%'>난이도</th>
                <th width='12%'>날짜</th>
                <th width='14%'></th>
              </tr>
            </thead>
            <tbody>
              {oxnotes.map(oxnote =>
                <tr className='oxnotepage_list'>
                  <td>{oxnote.problem_id}</td>
                  <td><NavLink onClick={()=>onClickLink(oxnote.problem_id)}>{oxnote.title}</NavLink></td>
                  <td>O</td>
                  <td>
                    <div className='oxnotepage_difficulty'>
                      <p className='oxnotepage_difficultytext'>{oxnote.grade_id}</p>
                    </div>
                  </td>
                  <td>2023.11.10</td> {/* 시간의 현지화 {new Date(oxnote.updated_at).toLocaleString()} */}
                  <td>
                    <div>
                      <Button size='sm px-4' variant='outline-dark' className='oxnotepage_btnnote'>노트보기</Button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default OXNotePage