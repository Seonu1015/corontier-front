import React from 'react'
import "../../../css/Mypage.css"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';


const SideMenu = () => {

  return (
  <div className='mypage_sidebar_wrap'>
    <div className='mypage_sidebar_box'>
      <ol className='mypage_sidebar_ol'>
        <li className='activities_menagement'>
          <h3 className='mypage_account'> 나의 활동 관리 </h3>
          <ol>
            <Link to="mylist">My List</Link>
            <Link to="oxnote">오답노트</Link>
            <Link to="myactivity">나의 활동</Link>
            <Link to="">My Quiz</Link>
          </ol>
        </li>

        <li className='account_menagement'>
          <h3 className='mypage_account'> 내 정보 관리</h3>
          <ol>
            <Link to="userupdate">개인정보수정</Link>
          </ol>
        </li>
      </ol>

    </div>
  </div>
  )
}

export default SideMenu