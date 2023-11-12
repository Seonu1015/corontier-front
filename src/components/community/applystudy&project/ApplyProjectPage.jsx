import React from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';



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
                        <h5>전체 프로젝트 스터디</h5>
                        {posts.map(post =>
                            <div className='mt-3'>
                                <div>
                                    <img className='photo' src="http://via.placeholder.com/30x30" /> {post.nickname}
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <NavLink to={`../community/applystudy&project/ApplyProjectRead/${post.post_id}`}>
                                            <h3 className='px-5' style={{ color: 'black' }}>{post.title} </h3>
                                        </NavLink>
                                    </div>
                                    <div className='col text-end mx-3'>
                                        <p>👁‍🗨{post.view_cnt} 🗨 30</p>
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

export default ProjectPage