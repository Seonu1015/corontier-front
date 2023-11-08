import React from 'react'
import { Card, Row, Col, InputGroup, Form, Button } from 'react-bootstrap'

const Insert = () => {

    // getPosts = () => {
    //    const url=
    // }
    return (
        <div>
            <h1 className='text-center'>글 등록하기</h1>
            <Row md={2} className='mx-5'>
                <Col>
                    <Card className='p-5'>
                        <h6>제목</h6>
                        <Form.Control className='mb-3' placeholder='내용을 입력해주세요' />
                        <h6>본문</h6>
                        <Form.Control className='mb-3' rows={2} as="textarea" placeholder='내용을 입력해주세요' />
                        <div className='text-center'>
                            <Button className='w-50'>등록</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Insert