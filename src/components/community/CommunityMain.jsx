import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const CommunityMain = () => {
    return (
        <div className='page_wrap'>
            <div className='banner'>
                <img src="../../../images/banner.png" alt="" />
            </div>

            <div className='communitypage_contents_wrap'>
                <div className='community_nav_group'>
                    <Navbar >
                        <Container>
                            <Nav className='community_nav'>
                                <Link to="/community/notice/NoticePage">공지사항</Link>
                                <Link to="/community/lounge/loungepage">개발자라운지</Link>
                                <Link to="/community/applystudy&project/applyprojectpage">프로젝트&스터디</Link>
                                <Link to="/community/q&a/questionpage">Q&A</Link>
                                <Link to="/community/recomendcontents/textbookpage">교재&강의추천</Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default CommunityMain