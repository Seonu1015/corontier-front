import React, { useState } from 'react'
import { Button, Dropdown, Table,Nav } from 'react-bootstrap'
import QuizList from './myListComponent/QuizList'
import BookMarkQuizList from './myListComponent/BookMarkQuizList'

const MyListPage = () => {
  let [tab, setTab] = useState(0)


  return (

    <div className='contents'>
      <Nav fill className="mt-5" variant="tabs" defaultActiveKey="0">
        <Nav.Item>
          <Nav.Link eventKey="0" onClick={() => setTab(0)}>
            내가푼문제
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="1" onClick={() => setTab(1)}>
            북마크한문제
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div>
        </div> 
      {tab === 0 && <QuizList />}
      {tab === 1 && <BookMarkQuizList/>}    
    </div>
  )
}

export default MyListPage