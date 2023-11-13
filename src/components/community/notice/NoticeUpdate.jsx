import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Form, Button, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import CommunityMain from '../CommunityMain';


const NoticeUpdate = () => {
    const navi = useNavigate();
    const { post_id } = useParams(); // URL 파라미터에서 post_id 추출
    const [posts, setPosts] = useState({
        post_id: '',
        title: '',
        content: '',
        view_cnt: 0
    });

    const { title, content, view_cnt } = posts;

    const getPosts = async () => {
        const res = await axios.get(`/community/notice/${post_id}`);
        console.log(res.data)
        setPosts(res.data);
    }

    useEffect(() => {
        getPosts();
    }, [])

    const onChange = (e) => {
        setPosts({
            ...posts,
            [e.target.name]: e.target.value
        })
    }

    const onUpdate = async (e) => {
        e.preventDefault();
        if (window.confirm("정보를 수정하시겠습니까?")) {
            const res = await axios.post('/community/update', posts)
            if (res.data === 1) {
                alert("정보가 수정되었습니다.");
                navi('/community/CommunityMain');
            } else {
                alert("수정이 불가능합니다.");
            }
        }
    }

    return (
        <>
            <div className='page_contents'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div>
                <h1 className='text-center'>글 수정하기</h1>
                <Row md={2} className='mx-5'>
                    <Col>
                        <Card className='p-5'>
                            <form onSubmit={onUpdate}>
                                <h6>제목</h6>
                                <Form.Control name='title' rows={5} onChange={onChange} />
                                <h6 className='my-3'>본문</h6>
                                <Form.Control name='content' as="textarea" rows={5} onChange={onChange} value={content} />
                                <div className='text-center my-3'>
                                    <Button variant='success' size='me-3' type='submit'>저장</Button>
                                    <Button className='mx-1' variant='secondary' size='me-3' type='reset'>취소</Button>
                                </div>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default NoticeUpdate