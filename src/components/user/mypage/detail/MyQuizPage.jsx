import React from 'react'
import "../../../../css/Mypage.css"
import { Table } from 'react-bootstrap'

const MyQuizPage = () => {
  return (
    <div className='page_wrap'>
      <div className='myquizpage_wrap'>
        <div className='myquizpage_title'>
          <p>My Quiz</p>
        </div>
        <div className='myquizpage_recentquizgroup'>
          <div className='myquizpage_recentquiz'>
            <Table className='myquizpage_recenttable'>
              <thead>
                <tr>
                  <th width="10%">No</th>
                  <th width="60%">Title</th>
                  <th width="15%">OX</th>
                  <th width="15%">풀이 갯수</th>
                </tr>
              </thead>
              <tbody>
                {/* 반복되는 출력되는 값*/}
                <tr className='myquizpage_recentquiz_list'>
                  <td>01</td>
                  <td>누가 사과를 먹었을까?</td>
                  <td>O</td>
                  <td>2</td>
                </tr>
                <tr className='myquizpage_recentquiz_list'>
                  <td>01</td>
                  <td>누가 사과를 먹었을까?</td>
                  <td>O</td>
                  <td>2</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyQuizPage