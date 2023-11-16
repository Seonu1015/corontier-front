import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import { Button, Card, InputGroup, Form, Row, Col, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';


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
            <div className='page_contents'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div>
                <div className='noticepage_tablegroup'>
                    <div style={{ width: "80%" }} >
                        <h2 className='text-center'> Q & A </h2>
                        <hr />
                        <div className='mb-3'>
                            <h5>전체 답변완료 답변대기</h5>
                        </div>
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
                                        <Button className='btn-secondary btn-sm'>답변완료</Button>
                                            <strong> {post.title}</strong>
                                    </div>
                                    <p>{post.content}</p>
                                </Link>
                                <div className='row'>
                                    <div className='col'>
                                        <p>
                                            <img className='photo mx-2' src="http://via.placeholder.com/20x20" />
                                            {post.nickname} / {post.fmtdate}
                                        </p>
                                    </div>
                                    <div className='col text-end'>
                                        <p>👁‍🗨{post.view_cnt} 🗨 45</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )}
                    
                </div>
                </div>
            </div>
        </>
    )
}

export default QuestionPage