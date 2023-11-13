import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import axios from 'axios';
import { NavLink } from 'react-router-dom';




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
                <h2 className='text-center mb-5'>개발자 라운지</h2>
            </div>
            <div className='community_wrap'>
                <div className='community_wrap_l'>
                    <div className='study_plan_userdata'>
                        <div >
                            <h4 className='text-center'>TOP WRITER</h4>
                        </div>
                    </div>
                    <div className='study_plan_recommendJob'>
                        <h3 className='text-center'>
                            <h5>1. 아이디</h5>
                            <h5>2. 아이디</h5>
                            <h5>3. 아이디</h5>
                            <h5>4. 아이디</h5>
                            <h5>5. 아이디</h5>
                        </h3>
                    </div>
                </div>
                <div className='community_wrap_r'>
                    {posts.map(post =>
                    <>
                        <hr />
                        <div className='mb-2'>
                            <img className='photo' src={post.profile_image || "http://via.placeholder.com/30x30"}  /> {post.nickname} 
                        </div>                        
                        <Row>
                            <Col>                             
                                <NavLink to={`../community/lounge/loungeread/${post.post_id}`}>
                                    <h3 className='px-5' style={{color:'black'}}>{post.title}</h3>
                                </NavLink>                               
                            </Col>
                            <Col md={2} className='text-end mx-3'>                                                                 
                                <p>👁‍🗨{post.view_cnt} 🗨 </p>                                                                                                                
                            </Col>
                        </Row>                                                                      
                    </>
                    )}
                </div>
            </div>
        </>
    )
}

export default LoungePage