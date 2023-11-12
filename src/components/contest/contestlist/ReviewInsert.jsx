
import axios from 'axios';
import React, { useState } from 'react'
import { Card, Row, Col, Form, Button, Container ,Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



const TipInsert = () => {

    const [content, setContents] = useState("");
    const [title, setTitles] = useState("");
    const navi = useNavigate();



    const onClickInsert = async () => {
        if (title === "") {
            alert("제목을 입력해주세요")
        } else if (content === "") {
            alert("내용을 입력해주세요")
        } else {
            const res = await axios.post('/contest/allpostinsert', {
                user_id: sessionStorage.getItem("user_id"),
                menu: "8",
                title: title,
                content: content
            });
            if (res.data === 1) {
                alert("게시 완료!")
                window.location.href = "/contest/ContestReview";

            }else{
                alert("네트워크 오류!")
            }
        }
    }





  return (
    <>
                  <Navbar className="justify-content-center">
                <Container>
                    <Nav className="me-auto" >
                    <NavLink href="/contest/contestList">공모전 목록</NavLink>
                    <NavLink href="/contest/contest-tip">공모전 TIP 게시판</NavLink>
                    <NavLink href="/contest/ContestReview">공모전 리뷰 게시판</NavLink>
                        {/* 다른 Nav.Link 요소들 */}
                    </Nav>
                </Container>
        </Navbar>
            <div>
                <h1 className='text-center'>글 등록하기</h1>
                <Row md={2} className='mx-5'>
                    <Col>
                        <Card className='p-5'>
                            <h6>제목</h6>
                            <Form.Control rows={5} placeholder='내용을 입력해주세요.'
                                onChange={(e) => setTitles(e.target.value)} value={title} />
                            <h6 className='my-3'>본문</h6>
                            <Form.Control as="textarea" rows={5} placeholder='내용을 입력해주세요.'
                                onChange={(e) => setContents(e.target.value)} value={content} />
                            <div className='text-center my-3'>
                                <Button variant='primary' size='me-3' onClick={() => onClickInsert()}>등록</Button>
                                <Button className='mx-1' variant='secondary' size='me-3' onClick={() => navi('/contest/contest-tip')}>취소</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
  )
}

export default TipInsert