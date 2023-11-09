import React from 'react'
import { Link } from 'react-router-dom';

const AdminSideMenu = () => {
  
  return (
    <div className='admin_sidebar_wrap'>
      <div className='admin_sidebar_box'>
        <ol className='admin_sidebar_ol'>
          <li className='account_management'>
            <h3 className='my_account'> Problems </h3>
            <ol>
              <Link to="">계정관리</Link>
              <Link to="myactive">문제관리</Link> 
            </ol>
          </li>

          <li className='school_management'>
            <h3 className='my_account'> Projects </h3>
            <ol>
              <a href="#">프로젝트 관리</a>
              <a href="#">나의활동</a>
            </ol>
          </li>

          <li className='career_management'>
            <h3 className='my_account'> Contest </h3>
            <ol>
              <a href="#">공모전 관리</a>
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