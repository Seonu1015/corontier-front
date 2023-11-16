import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CommunityMain from '../CommunityMain';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ApplyProjectComments from './ApplyProjectComments';



const LoungeRead = () => {
    const { post_id } = useParams();
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await axios.get(`/community/applystudy&project/${post_id}`);
        console.log(res.data);
        setPosts(res.data);
    }

    useEffect(() => {
        getPosts();
    }, [])
    return (
        <>
            <div className='page_contents'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div className='my-5'>
                <h2 className='text-center'>상세보기</h2>
            </div>
            <div className='noticepage_tablegroup'>
                <div style={{ width: "70%" }} >
                    {posts.map(post =>
                        <>
                            <Row>
                                <Col md={2}>
                                    <h5> 제목</h5>
                                </Col>
                                <Col>
                                    <h5>{post.title}</h5>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col md={2}>
                                    <h5>모집정보</h5>
                                </Col>
                                <Col>
                                    <h5>{post.intro}</h5>
                                </Col>
                                <Col md={2}>
                                    <h5>모집인원</h5>
                                </Col>
                                <Col>
                                    <h5>{post.user_id} 명</h5>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col md={2}>
                                    <h5>진행방식</h5>
                                </Col>
                                <Col>
                                    <h5>{post.major}</h5>
                                </Col>
                                <Col md={2}>
                                    <h5>진행기간</h5>
                                </Col>
                                <Col>
                                    <h5>{post.view_cnt} 개월</h5>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col md={2}>
                                    <h5>기술스택</h5>
                                </Col>
                                <Col>
                                    <h5>{post.hard}</h5>
                                </Col>
                                <Col md={2}>
                                    <h5>모집포지션</h5>
                                </Col>
                                <Col>
                                    <h5>{post.disapoint}</h5>
                                </Col>
                            </Row>
                            <hr />
                            <div>
                                <div>
                                    <h5>상세내용</h5>
                                    <p>{post.content}</p>
                                </div>
                            </div>
                            {sessionStorage.getItem('user_id') === 'admin' &&
                                <div className='mb-3 text-end'>
                                    <Button className='btn btn-secondary mx-1' size="sm">수정</Button>
                                    <Button className='btn btn-dark' size="sm">삭제</Button>
                                </div>
                            }
                        </>
                    )}
                    <div className='text-end'>
                        <Link to={`/community/applystudy&project/ApplyProjectPage`}>
                            <Button className='btn btn-secondary'>목록보기</Button>
                        </Link>
                    </div>
                    <hr />
                    <div className='page_contents_wrap_comm_comm mb-5'>
                        <ApplyProjectComments />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoungeRead