import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CommunityMain = () => {
    return (
        <div className='page_wrap'>
            <div className='banner'>
                <img src="../images/banner.png" alt="" />
            </div>

            <div className='page_contents_wrap'>
                <Navbar className="justify-content-center">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="../notice/NoticePage">공지사항</Nav.Link>
                            <Nav.Link href="../lounge/loungepage">개발자라운지</Nav.Link>
                            <Nav.Link href="../project/projectpage">프로젝트&스터디</Nav.Link>
                            <Nav.Link href="../q&a/questionpage">Q&A</Nav.Link>
                            <Nav.Link href="../study/textbookpage">교재&강의추천</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default CommunityMain