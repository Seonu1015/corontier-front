import React from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Pagination from 'react-js-pagination';


const ProjectPage = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const url = '/community/applystudy&project.json';
        const res = await axios(url);
        let list = res.data;
        list = list.map(p => p && { ...p, show: false });
        console.log(list);
        setPosts(res.data);
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
                        <h2 className='text-center'>프로젝트 & 스터디</h2>
                        <hr />
                        <Row className='mb-3'>
                            <Col>
                                <span className='me-3'>
                                    <strong>전체</strong>
                                </span>
                                <span className='me-3'>
                                    <strong>프로젝트</strong>
                                </span>
                                <span>
                                    <strong>스터디</strong>
                                </span>
                            </Col>
                        </Row>
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

export default ProjectPage