import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, InputGroup, Button, Form } from 'react-bootstrap'



const TextbookPage = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const url = '/community/textbookpage.json';
        const res = await axios(url);
        let list = res.data;
        list = list.map(p => p && { ...p, show: false });
        console.log(list);
        setPosts(list);
        console.log(posts[0])
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <>
            <div className='page_contents mb-5'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div>
                <h2 className="text-center"> 교재 & 강의 추천</h2>
                <div className='noticepage_tablegroup'>
                    <div style={{ width: "80%" }} className='mb-5'>
                        <hr />
                        <Row className='mb-5'>
                            <Col>
                                <span className='me-3'>
                                    <Link to={`/community/recomendcontents/textbookpage`} style={{ fontSize: "20px", color: 'black' }}><strong>교재</strong></Link>
                                </span>
                                <span>
                                    <Link to={`/community/recomendcontents/lecturepage`} style={{ fontSize: "20px", color: 'black' }}><strong>강의</strong></Link>
                                </span>
                            </Col>
                            <Col md={4}>
                                <InputGroup>
                                    <Form.Control />
                                    <Button>검색</Button>
                                </InputGroup>
                            </Col>
                        </Row>
                        <div>
                            <Row>
                                {posts.map(post =>
                                    <Col md={3} className='mb-5' key={post.post_id}>
                                        <Link to={`/community/recomendcontents/textbookread/${post.post_id}`}>
                                            <img src={post.atch_path} className='mb-4' />
                                            <h5 style={{ color: 'black' }}>{post.title}</h5>
                                        </Link>
                                    </Col>
                                )}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextbookPage