import React from 'react'
import { Button } from 'react-bootstrap'

const AdminManagement = () => {
  return (
    <>
      <div className='admin_management_title'>계정 관리</div>

      <div className='admin_management_contents_wrap'>
        <div className='admin_management_contents'>
          <div className='admin_management_subtitle'>관리자</div>

          <div className='basic_info_box'>
            <img className='info_img' src="https://via.placeholder.com/124x124" alt="" />
            <div className='info_name'>홍길동</div>
            <div className='info_email'>admin@admin.com</div>
            <Button className='info_btn' variant='dark'> 수정 </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminManagement