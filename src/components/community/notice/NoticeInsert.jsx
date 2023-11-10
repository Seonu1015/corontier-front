import axios from 'axios';
import React, { useState } from 'react'
import { Card, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const Insert = () => {
    const [content, setContents] = useState("");
    const [title, setTitles] = useState("");
    const navi = useNavigate();

    const onClickInsert = async () => {
        if (title === "") {
            alert("제목을 입력해주세요")
        } else if (content === "") {
            alert("내용을 입력해주세요")
        } else {
            const res = await axios.post('/community/insert', {
                user_id: "21",
                menu: "2",
                title: title,
                content: content
            });
            window.location.href = "/community/notice/NoticePage";
        }
    }
    return (
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
                            <Button className='mx-1' variant='secondary' size='me-3' onClick={() => navi('/community/notice/NoticePage')}>취소</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Insert