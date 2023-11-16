import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';




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
            <div className='page_contents mb-5'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div>
                <h2 className='text-center mb-5'>개발자 라운지</h2>
            </div>
            <div className='community_wrap mb-5'>
                <div className='community_wrap_ll'>
                    <div className='community_plan_userdata'>
                        <div>
                            <h5 className='text-center'>TOP WRITER</h5>
                        </div>
                    </div>
                    <div className='study_plan_recommendJob'>
                        <div className='text-center'>
                            <h5><img className='photo' src="http://via.placeholder.com/20x20" /> Betty</h5>
                            <h5><img className='photo' src="http://via.placeholder.com/20x20" /> Aaron</h5>
                            <h5><img className='photo' src="http://via.placeholder.com/20x20" /> Daisy</h5>
                        </div>
                    </div>
                </div>
                <div className='community_wrap_rr'>
                    {posts.map(post =>
                        <>
                            <hr />
                            <div className='mb-2' ket={post.post_id}>
                                <img className='photo2' src={post.profile_image || "http://via.placeholder.com/30x30"} /> {post.nickname}
                            </div>
                            <Row>
                                <Col>
                                    <Link to={`/community/lounge/loungeread/${post.post_id}`}>
                                        <h4 className='px-5' style={{ color: 'black' }}>{post.title}</h4>
                                    </Link>
                                </Col>
                                <Col md={2} className='text-end mx-3'>
                                    <p>👁‍🗨{post.view_cnt} 🗨 25</p>
                                </Col>
                            </Row>
                        </>
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
        </>
    )
}

export default LoungePage