import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSideMenu = () => {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState('');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className='admin_sidebar_wrap'>
      <div className='admin_sidebar_box'>
        <ol className='admin_sidebar_ol'>
          <li className='account_management'>
            <h3 className='my_account'> 관리자 </h3>
            <ol>
              <Link to="" onClick={() => handleMenuClick('admin_account')} className={selectedMenu === 'admin_account' ? 'selected' : ''}> 관리자 계정 </Link>
              <Link to="#" onClick={() => handleMenuClick('problem_management')} className={selectedMenu === 'problem_management' ? 'selected' : ''}> 문제등록 </Link>
              <Link to="adminproblem" onClick={() => handleMenuClick('problem_management')} className={selectedMenu === 'problem_management' ? 'selected' : ''}> 문제관리 </Link>
              {/* <Link to="admincontest" onClick={() => handleMenuClick('competition_management')} className={selectedMenu === 'competition_management' ? 'selected' : ''}> 공모전 관리 </Link> */}
              <Link to="admincommunity" onClick={() => handleMenuClick('community_management')} className={selectedMenu === 'community_management' ? 'selected' : ''}> 커뮤니티 관리 </Link>
              <Link to="#" onClick={() => handleMenuClick('feature_management')} className={selectedMenu === 'feature_management' ? 'selected' : ''}> 기능관리 </Link>
            </ol>
          </li>

          <li className='school_management'>
            <h3 className='my_account'> 회원 </h3>
            <ol>
              <Link to="#" onClick={() => handleMenuClick('member_info_management')} className={selectedMenu === 'member_info_management' ? 'selected' : ''}> 회원정보 관리 </Link>
              <Link to="#" onClick={() => handleMenuClick('view_delete')} className={selectedMenu === 'view_delete' ? 'selected' : ''}> 조회 / 삭제 </Link>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AdminSideMenu;
