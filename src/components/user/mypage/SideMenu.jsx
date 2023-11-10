import React from 'react'
import "../../../css/Mypage.css"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';


const SideMenu = () => {

  return (
  //   <div className='side-bar'>
  //     <div className='side_userimg'>
  //       <img src={'http://via.placeholder.com/200x200'} />
  //     </div>
  //     <div className='side_userid'>
  //       <p>USERID</p>
  //     </div>
  //     <div className='side_bar_menu'>
  //       <ul>
  //         <Link to=''><Button variant='outline-secondary'>My Quize</Button></Link>
  //         <Link to='oxnote'><Button variant='outline-secondary'>오답노트</Button></Link>
  //         <Link to='mylist'><Button variant='outline-secondary'>My List</Button></Link>
  //         <Link to='myactivity'><Button variant='outline-secondary'>나의활동</Button></Link>
  //         <Link to='userupdate'><Button variant='outline-secondary'>개인정보수정</Button></Link>
  //         <Button variant='outline-danger'>로그아웃</Button>
  //     </ul>
  //   </div>
  // </div >
  <div className='mypage_sidebar_wrap'>
    <div className='mypage_sidebar_box'>
      <ol className='mypage_sidebar_ol'>
        <li className='activities_menagement'>
          <h3 className='mypage_account'> 나의 활동 관리 </h3>
          <ol>
            <Link to="">My Quiz</Link>
            <Link to="mylist">My List</Link>
            <Link to="oxnote">오답노트</Link>
            <Link to="myactivity">나의 활동</Link>
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