import React from 'react'
import { Link } from 'react-router-dom';

const CommunityMain = () => {
  return (
    <div className='page_wrap'>
      <div className='banner'>
        <img src="../../images/banner.png" alt="" />
      </div>

      <div className='commu_menu_wrap'>
        <div className='commu_menu_box'>
          <ul className='commu_menu'>
            <li><Link to="/community/notice/NoticePage">공지사항</Link></li>
            <li><Link to="/community/lounge/loungepage">개발자라운지</Link></li>
            <li><Link to="/community/applystudy&project/applyprojectpage">프로젝트&스터디</Link></li>
            <li><Link to="/community/q&a/questionpage">Q&A</Link></li>
            <li><Link to="/community/recomendcontents/textbookpage">교재&강의추천</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CommunityMain