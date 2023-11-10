import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'

const OXNotePage = () => {
  const [oxnotes, setOXNotePage] = useState([]);

  const getOXNotePage = async () => {
    const res = await axios.get(`/mypage/oxnote.list?user_id=${sessionStorage.getItem("user_id")}`);
    console.log(res.data);
    setOXNotePage(res.data);
  }

  useEffect(()=>{
    getOXNotePage();
  },[]);

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
                <th width='50%'>문제</th>
                <th width='8%'>문제풀이</th>
                <th width='8%'>난이도</th>
                <th width='15%'>날짜</th>
                <th width='14%'></th>
              </tr>
            </thead>
            <tbody>
              {oxnotes.map(o =>
                <tr className='oxnotepage_list'>
                  <td>{o.note_id}</td>
                  <td>{o.title}</td>
                  <td>O</td>
                  <td>
                    <div className='oxnotepage_difficulty_hard'>
                      <p className='oxnotepage_difficultytext'>{o.grade_id}</p>
                    </div>
                  </td>
                  <td>2023.11.01</td>
                  <td><Button size='sm px-4' variant='dark' className=''>문제보기</Button> <Button>노트보기</Button></td>
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