import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap'


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
            <div className='page_contents'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div>
                <h2 className="text-center"> 교재 & 강의 추천</h2>
                <div className='noticepage_tablegroup'>
                    <div style={{ width: "80%" }} className='mb-5'>
                        <hr />
                        <div className='mb-5'>
                            <Link to={`/community/recomendcontents/textbookpage`}>교재</Link>
                            <Link to={`/community/recomendcontents/lecturepage`}>강의</Link>
                        </div>

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