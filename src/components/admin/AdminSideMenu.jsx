import React from 'react'
import { Link } from 'react-router-dom';

const AdminSideMenu = () => {
  return (
    <div className='admin_sidebar_wrap'>
      <div className='admin_sidebar_box'>
        <ol className='admin_sidebar_ol'>
          <li className='account_management'>
            <h3 className='my_account'> 내 정보 관리 </h3>
            <ol>
              <Link to="">계정관리</Link>
              <Link to="myactive">나의활동</Link>
            </ol>
          </li>

          <li className='school_management'>
            <h3 className='my_account'> 스쿨 관리 </h3>
            <ol>
              <a href="#">계정관리</a>
              <a href="#">나의활동</a>
            </ol>
          </li>

          <li className='career_management'>
            <h3 className='my_account'> 커리어 관리 </h3>
            <ol>
              <a href="#">계정관리</a>
              <a href="#">나의활동</a>
              <a href="#">나의활동</a>
              <a href="#">나의활동</a>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default AdminSideMenu