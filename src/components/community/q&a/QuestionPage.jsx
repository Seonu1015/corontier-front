import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import { Row, Col, Button, Card, InputGroup, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
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
                        <h5>전체 답변완료 답변대기</h5>
                        <Card>
                            <InputGroup>
                                <Form.Control />
                                <Button>검색</Button>
                            </InputGroup>
                        </Card>
                        {posts.map(post =>
                            <div className='my-5'>
                                <NavLink to={`../community/q&a/questionread/${post.post_id}`} style={{ color: 'black' }}>
                                    <h5>{post.title}</h5>
                                    <p>{post.content}</p>
                                </NavLink>
                                <div className='row'>
                                    <div className='col'>
                                        <p>{post.nickname} / {post.fmtdate}</p>
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