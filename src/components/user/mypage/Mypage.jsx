import React from 'react'
import SideMenu from './SideMenu'
import { Outlet } from 'react-router-dom'


const Mypage = () => {
  return (
    // <div className='page_wrap'>
    //   <div className='page_contents_wrap '>               
    //     <div className='contents_title_box'>
    //       <p className='contents_title'>MyPage</p>
    //       <p className='contents_article'>...</p>
    //     </div>
    //     <div className='d-flex'>
    //     <SideMenu/>   
    //     <Outlet/>
    //     </div>
    //   </div>
    // </div>
  <div className='page_wrap'>
    <div className='mypage_contents_wrap'>
      <div className='mypage_wrap'>
        <SideMenu/>
        <div className='mypage_contents_wrap'>
          <Outlet/>
        </div>
      </div>
    </div>
  </div>
)
}

export default Mypage