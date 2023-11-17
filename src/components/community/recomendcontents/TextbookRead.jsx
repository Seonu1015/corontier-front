import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import CommunityMain from '../CommunityMain';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectRead = () => {
    const { post_id } = useParams();
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await axios.get(`/community/textbookpage/${post_id}`);
        setPosts(res.data);
        let list = res.data;
        list = list.map(p => p && { ...p, ellipsis: true, text: p.contents });
        setPosts(list);
    }

    const onChangeEllipsis = (e, post_id) => {
        const list = posts.map(p => p.post_id === post_id ? { ...p, ellipsis: !p.ellipsis } : p);
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
            <div className='noticepage_tablegroup'>
                <div style={{ width: "80%" }} className='mb-5'>
                    <div className='justify-content-center p-10'>
                        <Card className='p-5 mt-5' >
                            {posts.map(post =>
                                <>
                                    <Row className='mb-3'>
                                        <Col className='me-3'>
                                            <div className='thumbnail' key={post.post_id}>
                                                <img src={post.atch_path} className='mb-3' />
                                            </div>
                                        </Col>
                                        <Col>
                                            {sessionStorage.getItem('user_id')==='admin' &&
                                            <div className='text-end mb-4'>
                                                <Button className='btn btn-secondary btn-sm mx-1'>수정</Button>
                                                <Button className='btn btn-dark btn-sm'>삭제</Button>
                                            </div>
                                            }
                                            <div className='mb-5'>
                                                <h3><span style={{ color: "red" }}>✔</span> {post.title}</h3>
                                            </div>
                                            <div className='mb-4'>
                                                <h5><span style={{ color: "red" }}>✔</span> 난이도 : {post.intro} </h5>
                                            </div>
                                            <div className='mb-5'>
                                                <h5><span style={{ color: "red" }}>✔</span> 소개 </h5>
                                                <p>　{post.content}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div style={{ whiteSpace: "pre-line" }}>
                                            <h4><span style={{ color: "red" }}>✔</span> 목차 </h4>
                                            <div className={post.ellipsis && 'ellipsis'} onClick={(e) => onChangeEllipsis(e, post.post_id)} style={{ cursor: "pointer" }}>
                                                <p>{post?.major}</p>
                                            </div>
                                            <div className='text-end'>
                                                <h5>v 펼쳐보기</h5>
                                            </div>
                                            <hr />
                                        </div>
                                    </Row>
                                </>
                            )}
                        </Card>
                        <div className='text-end mt-3'>
                            <Link to={`/community/recomendcontents/textbookpage`}>
                                <Button className='btn btn-secondary'>목록보기</Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default ProjectRead