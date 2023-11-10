import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import axios from 'axios';


const LoungePage = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const url = '/community/loungelist.json';
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
                <h2 className='text-center'>개발자 라운지</h2>
                {posts.map(post =>
                    <Row className='my-5'>
                        <Col>
                            <Row>
                                <hr />
                                <Col><h5>{post.profile_image}</h5></Col>
                                <Col><h5>{post.nickname}</h5></Col>
                            </Row>
                            <Row>
                                <Col><h5>{post.title}</h5></Col>
                                <Col><h5>{post.view_cnt}</h5></Col>
                                <Col><h5>댓글</h5></Col>
                            </Row>
                        </Col>
                    </Row>
                )}
            </div>
        </>
    )
}

export default LoungePage