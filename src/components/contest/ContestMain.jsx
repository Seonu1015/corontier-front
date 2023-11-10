import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner, Table, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import Pagination from "react-js-pagination";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ContestL from './contestlist/ContestL';
import ContestTip from './contestlist/ContestTip';
import ContestReview from './contestlist/ContestReview';

const CompetitonList = () => {

    const [activeTab, setActiveTab] = useState('공모전목록'); // 기본적으로 공지사항을 표시

    const handleSelect = (selectedKey) => {
        setActiveTab(selectedKey);
    };



    return (
      





        <div className='my-5 p-5'>
        <div className='page_contents_wrap'>
            <Navbar className="justify-content-center">
                <Container>
                    <Nav className="me-auto" onSelect={handleSelect}>
                        <Nav.Link eventKey="공모전목록">공모전 목록</Nav.Link>
                        <Nav.Link eventKey="공모전TIP게시판">공모전 TIP 게시판</Nav.Link>
                        <Nav.Link eventKey="공모전리뷰">공모전 리뷰 게시판</Nav.Link>




                        {/* 다른 Nav.Link 요소들 */}
                    </Nav>
                </Container>
            </Navbar>

            <div className='page_contents'>
                <Container>
                    {activeTab === '공모전목록' && <ContestL/>}
                    {activeTab === '공모전TIP게시판' && <ContestTip/>}
                    {activeTab === '공모전리뷰' && <ContestReview/>}





                    {/* 조건에 따라 다른 컴포넌트 렌더링 */}
                </Container>
            </div>
        </div>
    </div>


    )
}

export default CompetitonList