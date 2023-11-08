import React from 'react'
import EditorComp from '../common/EditorComp'
import { Row, Col, Card, Button, Form } from 'react-bootstrap'

const ProjectInsert = () => {
    return (
        <div>

            <div className='page_wrap'>
                <div className='banner'>
                    <img src="../images/banner.png" alt="" />
                </div>

                <div className='page_contents_wrap_prj'>

                    <div className='page_contents'>
                        <div className='study_plan_wrap justify-content-center p-5'>

                            <Card className='p-5' style={{ width: '110rem' }}>
                                <div className='text-center mb-5'>
                                    <span className='contents_title'> 🎉 내 프로젝트 자랑하기 🎉 </span> * 은 필수 입력 
                                </div>
                                <Row className='mb-3'>
                                    <Col className='me-3'>
                                        <h6> 프로젝트 제목 </h6>
                                        <Form.Control rows={5} placeholder='내용을 입력해주세요.' />
                                        <h6 className='my-4'> 기술스택 </h6>
                                        <Form.Control rows={5} placeholder='내용을 입력해주세요.' />
                                        <h6 className='my-4'> 본문 </h6>
                                        <Form.Control rows={5} placeholder='내용을 입력해주세요.' />
                                    </Col>
                                    <Col>
                                        <h6> 썸네일 </h6>
                                        <Form.Control rows={5} placeholder='내용을 입력해주세요.' />
                                        <h6 className='my-4'> 프로젝트 깃허브 주소 </h6>
                                        <Form.Control rows={5} placeholder='내용을 입력해주세요.' />
                                        <h6 className='my-4'> 데모사이트 주소 </h6>
                                        <Form.Control rows={5} placeholder='내용을 입력해주세요.' />
                                    </Col>
                                </Row>
                                <Row>
                                    <h6 className='my-4'> 프로젝트 간단 소개 </h6>
                                    <Form.Control as="textarea" rows={3} placeholder='내용을 입력해주세요.' />
                                    <h6 className='my-4'> 핵심 기능 </h6>
                                    <Form.Control as="textarea" rows={3} placeholder='내용을 입력해주세요.' />
                                    <h6 className='my-4'> 어려웠던 부분 </h6>
                                    <Form.Control as="textarea" rows={3} placeholder='내용을 입력해주세요.' />
                                    <h6 className='my-4'> 아쉬운 점 </h6>
                                    <Form.Control as="textarea" rows={3} placeholder='내용을 입력해주세요.' />
                                </Row>
                            </Card>

                        </div>
                    </div>


                    <div className='text-center my-5'>
                        <Button className='p-3 me-3' variant="outline-primary"> 저장 </Button>
                        <Button className='p-3' variant="outline-secondary"> 취소 </Button>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default ProjectInsert