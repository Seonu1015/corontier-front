import React from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';



const ProjectPage = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const url = '/community/applystudy&project.json';
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
                        <h2 className='text-center'>프로젝트 & 스터디</h2>
                        <hr />
                        <div className='mb-4'>
                            <h5>전체 프로젝트 스터디</h5>
                        </div>
                        {posts.map(post =>
                            <div>
                                <div>
                                    <img className='photo' src="http://via.placeholder.com/30x30" /> {post.nickname}
                                </div>
                                <Row className='mt-2'>
                                    <Col>
                                        <Link to={`/community/applystudy&project/ApplyProjectRead/${post.post_id}`}>
                                            <h4 className='px-5' style={{ color: 'black' }}>{post.title} </h4>
                                        </Link>
                                    </Col>
                                    <Col className='col text-end mx-3' md={2}>
                                        <p>👁‍🗨{post.view_cnt} 🗨 30</p>
                                    </Col>
                                </Row>
                                <hr />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage