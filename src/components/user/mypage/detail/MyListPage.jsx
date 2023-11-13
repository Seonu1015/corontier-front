import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const MyListPage = () => {

  return (
    <div className='page_wrap'>
      <div className='mylistpage_wrap'>
        <div className='mylistpage_title'>
          <p>My List</p>
        </div>
        <div className='mylistpage_top'>
          <div className='mylistpage_dropdowngroup'>
            <Dropdown className='mylistpage_dropdown'>
              <Dropdown.Toggle variant='outline-dark'>
                난이도
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#'>Lv. 0</Dropdown.Item>
                <Dropdown.Item href='#'>Lv. 1</Dropdown.Item>
                <Dropdown.Item href='#'>Lv. 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mylistpage_dropdown'>
              <Dropdown.Toggle variant='outline-dark'>
                난이도
              </Dropdown.Toggle>
              <Dropdown.Menu>
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
                <th width='48%'>문제</th>
                <th width='11%'>문제풀이</th>
                <th width='10%'>난이도</th>
                <th width='12%'>날짜</th>
                <th width='14%'></th>
              </tr>
            </thead>
            <tbody>
              {mylists.map(mylist =>
                <tr className='mylistpage_list'>
                  <td>{mylist.problem_id}</td>
                  <td>{mylist.title}</td>
                  <td>O</td>
                  <td>
                    <div className='mylistpage_difficulty_hard'>
                      <p className='mylistpage_difficultytext'>{mylist.grade_id}</p>
                    </div>
                  </td>
                  <td>2023.11.01</td>
                  <td><Button size='sm px-4' variant='dark' className=''><NavLink onClick={()=>onClickLink(mylist.problem_id)}>문제보기</NavLink></Button></td>
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

export default MyListPage