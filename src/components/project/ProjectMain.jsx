import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap'

const ProjectMain = () => {
    const [tags, setTags] = useState([]);
    const [posts, setPosts] = useState([]);

    //const tag_type_id 
    const getTag = async () => {
        const res = await axios.get("/project/taglist.json?tag_type_id=3");
        setTags(res.data)
    }

    const getPost = async () => {
        const res = await axios.get("/project/projectlist.json?menu=1");
        setPosts(res.data)
    }

    useEffect(() => { getTag(); getPost(); }, [])

    return (
        <div className='page_wrap'>
            <div className='banner'>
                <img src="../images/banner.png" alt="" />
            </div>

            <div className='page_contents_wrap'>
                <div className='contents_title_box'>
                    <p className='contents_title'> 프로젝트 공유하기 </p>
                    <p className='contents_article'>...</p>
                </div>

                <div className='page_contents'>
                    <div className='box1'> a </div>
                    <div className='box2'> b </div>
                    <div className='box3'> c </div>
                </div>

                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Header>기술 스택</Card.Header>
                            <Card.Body>
                                {tags.map(tag =>
                                    <div key={tag.tag_id}>
                                        <input type='checkbox' /> {tag.tag_name}
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ display: "flex" }}>
                        {posts.map(post =>
                            <NavLink to={`/project/read/${post.post_id}`}>
                                <Card className='mx-2' key={post.post_id}>
                                    <Card.Header>{post.view_cnt}</Card.Header>
                                    <Card.Body>{post.title}</Card.Body>
                                </Card>
                            </NavLink>
                        )}
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default ProjectMain