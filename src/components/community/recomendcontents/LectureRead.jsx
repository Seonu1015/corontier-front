import React from 'react'
import { Row, Col, Card, Button, Container, NavLink } from 'react-bootstrap';
import CommunityMain from '../CommunityMain';

const ProjectRead = () => {


    return (
        <>
            <div className='page_contents'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div className='noticepage_tablegroup'>
                <div style={{ width: "80%" }} className='mb-5'>
                    <div className='justify-content-center p-10'>
                        <Card className='p-5' >
                            <Row className='mb-3'>
                                <Col className='me-3'>
                                    <div className='thumbnail'>썸네일 들어갈 예정</div>
                                </Col>
                                <Col>
                                    <div className='text-end'>
                                        <Button className='btn btn-secondary'>수정</Button>
                                        <Button className='btn btn-dark'>삭제</Button>
                                    </div>
                                    <div className='mb-5'>
                                        <h5><span style={{ color: "red" }}>✔</span> 제목 </h5>
                                    </div>
                                    <div className='mb-5'>
                                        <h5><span style={{ color: "red" }}>✔</span> 난이도 : 상 </h5>
                                    </div>
                                    <div className='mb-5'>
                                        <h5><span style={{ color: "red" }}>✔</span> 소개 </h5>
                                        <h4>　어..</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className='mb-5'>
                                    <h4><span style={{ color: "red" }}>✔</span> 목차 </h4>
                                    <h5>..</h5>
                                </div>
                                <div className='mb-5'>
                                    <h4><span style={{ color: "red" }}>✔</span> 내용 </h4>
                                    <h5>..</h5>
                                </div>
                            </Row>
                        </Card>
                        <div className='text-end mt-3'>
                            <NavLink to={`../community/recomendcontents/textbookpage`}>
                                <Button className='btn btn-secondary' size="lg">목록보기</Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                
            </div>


        </>
    )
}

export default ProjectRead