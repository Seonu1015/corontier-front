import React, { useState } from 'react'
import { Nav, Row, Col } from 'react-bootstrap';
import StarterDetail from './StarterDetail';

const StarterPlan = () => {
    const [selKey, setSelKey] = useState('1')

    return (
        <div className='page_wrap'>
            <div className='banner'>
                <img src="../images/banner.png" alt="" />
            </div>
            <div className='page_contents_wrap'>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Nav justify variant="underline" defaultActiveKey="1" activeKey={selKey} onSelect={(key) => setSelKey(key)}>
                            <Nav.Item>
                                <Nav.Link eventKey="1">출력</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2">입력과 계산</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3">조건</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="4">반복</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="5">배열</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="6">문자열</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="7">함수</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <div className='my-5'>
                    <StarterDetail selectedKey={selKey} />
                </div>
            </div>
        </div>
    )
}

export default StarterPlan