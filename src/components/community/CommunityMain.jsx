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
          <ol className='commu_sidebar_ol'>
            <li className='commu_menu'>
                <Link to="/community/notice/NoticePage">공지사항</Link>
                <Link to="/community/lounge/loungepage">개발자라운지</Link>
                <Link to="/community/applystudy&project/applyprojectpage">프로젝트&스터디</Link>
                <Link to="/community/q&a/questionpage">Q&A</Link>
                <Link to="/community/recomendcontents/textbookpage">교재&강의추천</Link> {/*페이지 수정 필여해 민지ya*/}
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default CommunityMain