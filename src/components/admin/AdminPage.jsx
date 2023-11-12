import React from 'react'
import '../../css/AdminPage.css';
import { Outlet } from 'react-router-dom';
import AdminSideMenu from './AdminSideMenu';

const AdminPage = () => {
  return (
    <div className='page_wrap'>
      <div className='page_contents_wrap'>
        <div className='admin_wrap'>
          <AdminSideMenu/>

          <div className='admin_contents_wrap'>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage