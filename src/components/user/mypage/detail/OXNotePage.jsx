import React from 'react'
import { Button, Table } from 'react-bootstrap'

const OXNotePage = () => {
  return (
    <div className='page_wrap'>
      <div className='oxnotepage_wrap'>
        <div className='oxnotepage_title'>
          <p>📖 오답노트</p>
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
              <tr className='oxnotepage_list'>
                <td>01</td>
                <td>누가 사과를 먹었을까?</td>
                <td>O</td>
                <td>
                  <div className='oxnotepage_difficulty_hard'>
                    <p className='oxnotepage_difficultytext'>Lv. 2</p>
                  </div>
                </td>
                <td>2023.11.01</td>
                <td><Button size='sm px-4' variant='dark' className=''>문제보기</Button></td>
              </tr>
              <tr className='oxnotepage_list'>
                <td>02</td>
                <td>누가 사과를 먹었을까?</td>
                <td>O</td>
                <td>
                  <div className='oxnotepage_difficulty_easy'>
                    <p className='oxnotepage_difficultytext'>Lv. 0</p>
                  </div>
                </td>
                <td>2023.11.01</td>
                <td><Button size='sm px-4' variant='dark' className=''>문제보기</Button></td>
              </tr>
              <tr className='oxnotepage_list'>
                <td>03</td>
                <td>누가 사과를 먹었을까?</td>
                <td>O</td>
                <td>
                  <div className='oxnotepage_difficulty_normal'>
                    <p className='oxnotepage_difficultytext'>Lv. 1</p>
                  </div>
                </td>
                <td>2023.11.01</td>
                <td><Button size='sm px-4' variant='dark' className=''>문제보기</Button></td>
              </tr>
              <tr className='oxnotepage_list'>
                <td>04</td>
                <td>누가 사과를 먹었을까?</td>
                <td>O</td>
                <td>
                  <div className='oxnotepage_difficulty_normal'>
                    <p className='oxnotepage_difficultytext'>Lv. 1</p>
                  </div>
                </td>
                <td>2023.11.01</td>
                <td><Button size='sm px-4' variant='dark' className=''>문제보기</Button></td>
              </tr>
              <tr className='oxnotepage_list'>
                <td>05</td>
                <td>누가 사과를 먹었을까?</td>
                <td>O</td>
                <td>
                  <div className='oxnotepage_difficulty_hard'>
                    <p className='oxnotepage_difficultytext'>Lv. 2</p>
                  </div>
                </td>
                <td>2023.11.01</td>
                <td><Button size='sm px-4' variant='dark' className=''>문제보기</Button></td>
              </tr>
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