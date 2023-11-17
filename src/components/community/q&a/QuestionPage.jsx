import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import { Button, Card, InputGroup, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'react-js-pagination';


const QuestionPage = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const url = '/community/q&a.json';
        const res = await axios(url);
        let list = res.data;
        list = list.map(p => p && { ...p, show: false });
        console.log(list);
        setPosts(list);
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
                <div className='noticepage_tablegroup'>
                    <div style={{ width: "80%" }} >
                        <h2 className='text-center'> Q & A </h2>
                        <hr />
                        <Row className='mb-3'>
                            <Col>
                                <span className='me-3'>
                                    <strong>전체</strong>
                                </span>
                                <span className='me-3'>
                                    <strong>답변완료</strong>
                                </span>
                                <span>
                                    <strong>답변대기</strong>
                                </span>
                            </Col>
                        </Row>
                        <Card>
                            <InputGroup>
                                <Form.Control />
                                <Button>검색</Button>
                            </InputGroup>
                        </Card>
                        {posts.map(post =>
                            <div className='my-5'>
                                <Link to={`/community/q&a/questionread/${post.post_id}`} style={{ color: 'black' }}>
                                    <div>
                                        {post.category == '답변완료' ?
                                        <Button className='btn-primary btn-sm'>{post.category}</Button>
                                        :
                                        <Button className='btn-secondary btn-sm'>{post.category}</Button>
                                        }
                                        <strong> {post.title}</strong>
                                    </div>
                                    <p>{post.content}</p>
                                </Link>
                                <div className='row'>
                                    <div className='col'>
                                        <p>
                                            <img className='photo mx-2' src="http://via.placeholder.com/20x20" />
                                            {post.nickname} / {post.user_id}일전
                                        </p>
                                    </div>
                                    <div className='col text-end'>
                                        <p>👁‍🗨{post.view_cnt} 🗨 45</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )}
                        <div className='page_contents_wrap_comm_read mb-5'>
                            <Pagination
                                activePage={1}
                                itemsCountPerPage={10}
                                totalItemsCount={40}
                                pageRangeDisplayed={10}
                                prevPageText={'‹'}
                                nextPageText={'›'}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default QuestionPage