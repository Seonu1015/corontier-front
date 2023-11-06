import React from 'react'
import { Button, Dropdown, Table } from 'react-bootstrap'

const MyListPage = () => {
  return (
    <div className='page_wrap'>
      <div className='mylistpage_wrap'>
        <div className='mylistpage_title'>
          <p>📖 My List</p>
        </div>
        <div className='mylistpage_top'>
          <div className='mylistpage_dropdowngroup'>
            <Dropdown className='dropdown'>
              <Dropdown.Toggle variant='outline-dark'>
                난이도
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#'>Lv. 0</Dropdown.Item>
                <Dropdown.Item href='#'>Lv. 1</Dropdown.Item>
                <Dropdown.Item href='#'>Lv. 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant='outline-dark'>
                난이도
              </Dropdown.Toggle>
              <Dropdown.Menu className='dropdown'>
                <Dropdown.Item href='#'>Lv. 0</Dropdown.Item>
                <Dropdown.Item href='#'>Lv. 1</Dropdown.Item>
                <Dropdown.Item href='#'>Lv. 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='mylistpage_button'>
            <Button size='sm px-4' variant='danger'>삭제하기</Button>
          </div>
        </div>
        <div className='mylistpage_table'>
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
              <tr className='mylistpage_list'>
                <td>01</td>
                <td>누가 사과를 먹었을까?</td>
                <td>O</td>
                <td>
                  <div className='mylistpage_difficulty_hard'>
                    <p className='mylistpage_difficultytext'>Lv. 2</p>
                  </div>
                </td>
                <td>2023.11.01</td>
                <td><Button size='sm px-4' variant='dark' className=''>문제보기</Button></td>
              </tr>
              <tr className='mylistpage_list'>
                <td>02</td>
                <td>누가 사과를 먹었을까?</td>
                <td>O</td>
                <td>
                  <div className='mylistpage_difficulty_easy'>
                    <p className='mylistpage_difficultytext'>Lv. 0</p>
                  </div>
                </td>
                <td>2023.11.01</td>
                <td><Button size='sm px-4' variant='dark' className=''>문제보기</Button></td>
              </tr>
              <tr className='mylistpage_list'>
                <td>03</td>
                <td>누가 사과를 먹었을까?</td>
                <td>O</td>
                <td>
                  <div className='mylistpage_difficulty_normal'>
                    <p className='mylistpage_difficultytext'>Lv. 1</p>
                  </div>
                </td>
                <td>2023.11.01</td>
                <td><Button size='sm px-4' variant='dark' className=''>문제보기</Button></td>
              </tr>
              <tr className='mylistpage_list'>
                <td>04</td>
                <td>누가 사과를 먹었을까?</td>
                <td>O</td>
                <td>
                  <div className='mylistpage_difficulty_normal'>
                    <p className='mylistpage_difficultytext'>Lv. 1</p>
                  </div>
                </td>
                <td>2023.11.01</td>
                <td><Button size='sm px-4' variant='dark' className=''>문제보기</Button></td>
              </tr>
              <tr className='mylistpage_list'>
                <td>05</td>
                <td>누가 사과를 먹었을까?</td>
                <td>O</td>
                <td>
                  <div className='mylistpage_difficulty_hard'>
                    <p className='mylistpage_difficultytext'>Lv. 2</p>
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

export default MyListPage