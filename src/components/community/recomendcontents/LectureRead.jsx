import React from 'react'
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import CommunityMain from '../CommunityMain';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const ProjectRead = () => {
    const { vod_id } = useParams();
    const [post, setPost] = useState({});

    const getPosts = async () => {
        const res = await axios.get(`/crawler/javalist/${vod_id}`);
        setPost(res.data);
        console.log(post)
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
            <div className='noticepage_tablegroup'>
                <div style={{ width: "80%" }} className='mb-5'>

                        <div className='justify-content-center p-10'>
                            <Card className='p-5 text-center' >
                                <Row className='mb-3'>
                                    <Col>
                                        <div className='text-end mb-5'>
                                            <Button className='btn btn-secondary btn-sm mx-1'>수정</Button>
                                            <Button className='btn btn-dark btn-sm'>삭제</Button>
                                        </div>
                                        <div className='text-center mb-5'>
                                            <h3> 제목 {post.vod_title}</h3>
                                        </div>
                                        <div className='mb-3'>
                                            <h4>소개</h4>
                                            <p>　{post.vod_contents}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className='mb-3'>
                                            <iframe
                                            width="100%"
                                            height="500"
                                            src={post.vod_link}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </Row>
                            </Card>
                            <div className='text-end mt-3'>
                                <Link to={`/community/recomendcontents/textbookpage`}>
                                    <Button className='btn btn-secondary' size="lg">목록보기</Button>
                                </Link>
                            </div>
                        </div>
               
                </div>

            </div>


        </>
    )
}

export default ProjectRead