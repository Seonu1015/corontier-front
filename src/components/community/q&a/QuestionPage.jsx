import React from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import { Row, Col, Button } from 'react-bootstrap'

const QuestionPage = () => {
    return (
        <>
            <div className='page_contents'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div>
                <h2 className='text-center'> Q & A </h2>
                <hr />
                <h5>전체 답변완료 답변대기</h5>
                <input />
                <Button size="sm">검색</Button>
                <Row className='my-5'>
                    <Col>
                        <Row>
                            <div>
                                <h5>제목제목</h5>
                            </div>
                        </Row>
                        <Row>
                            <h5>내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</h5>
                            <h5>작성자 00분전 댓글조회</h5>
                            <hr />
                        </Row>
                        <Row>
                            <div>
                                <h5>답변대기 제목제목</h5>
                            </div>
                        </Row>
                        <Row>
                            <h5>내용ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</h5>
                            <h5>작성자 00분전 댓글조회</h5>
                            <hr />
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default QuestionPage