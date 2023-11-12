import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CommunityMain = () => {
    return (
        <div className='page_wrap'>
            <div className='banner'>
                <img src="../../images/banner.png" alt="" />
            </div>

            <div className='communitypage_contents_wrap'>
                <div className='community_nav_group'>
                    <Navbar >
                        <Container>
                            <Nav className='community_nav'>
                                <Nav.Link href="../notice/NoticePage">공지사항</Nav.Link>
                                <Nav.Link href="../lounge/loungepage">개발자라운지</Nav.Link>
                                <Nav.Link href="../applystudy&project/applyprojectpage">프로젝트&스터디</Nav.Link>
                                <Nav.Link href="../q&a/questionpage">Q&A</Nav.Link>
                                <Nav.Link href="../recomendcontents/textbookpage">교재&강의추천</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default CommunityMain