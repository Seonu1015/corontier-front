import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CommunityMain from '../CommunityMain';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect} from 'react';
import QuestionComments from './QuestionComments';




const LoungeRead = () => {
    const { post_id } = useParams();
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await axios.get(`/community/q&a/${post_id}`);
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
                                    <h4>제목 </h4>
                                </Col>
                                <Col>
                                    <h5>{post.title}</h5>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <h4>등록자</h4>
                                </Col>
                                <Col>
                                    <h5>{post.nickname}</h5>
                                </Col>
                                <Col>
                                    <h4>등록일</h4>
                                </Col>
                                <Col>
                                    <h5>{post.fmtdate}</h5>
                                </Col>
                            </Row>
                            <hr />
                            <div>
                                <div>
                                    <h4>상세내용</h4>
                                    <p>{post.content}</p>
                                </div>
                            </div>
                            {sessionStorage.getItem('user_id') === 'admin' &&
                                <div className='mb-3 text-end'>
                                    <Button className='btn btn-secondary' size="sm">수정</Button>
                                    <Button className='btn btn-dark' size="sm">삭제</Button>
                                </div>
                            }
                        </>
                    )}
                    <div className='text-end mb-5'>
                        <Link to={`/community/q&a/QuestionPage`}>
                            <Button className='btn btn-secondary'>목록보기</Button>
                        </Link>
                    </div>
                    <hr />
                    <div className='page_contents_wrap_comm_comm mb-5'>
                        <QuestionComments />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoungeRead