import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Spinner, Row, Col, Card, Table, Button, Badge } from 'react-bootstrap';
import ProjectComments from './ProjectComments';

const ProjectRead = () => {
    const [loading, setLoading] = useState(false);
    const { post_id } = useParams();
    const [post, setPost] = useState({
        post_id: "", menu: "", title: "", content: "", created_at: "", updated_at: "", view_cnt: "",
        dev_bgn_date: "", dev_end_date: "", dev_mem_cnt: "", git_url: "", demo_url: "",
        intro: "", major: "", hard: "", disapoint: "", nickname: ""
    })
    const [postTags, setPostTags] = useState([]);

    const { menu, title, content, created_at, updated_at, view_cnt,
        dev_bgn_date, dev_end_date, dev_mem_cnt, git_url, demo_url,
        intro, major, hard, disapoint } = post;

    const getProject = async () => {
        setLoading(true);
        const res = await axios.get("/project/prcedures?post_id=" + post_id);
        let listOne = res.data.listOne;
        setPost(listOne);
        setLoading(false); 
    }

    const getPostTags = async () => {
        const res = await axios.get("/project/projecttag.json?post_id=" + post_id);
        let postTags = res.data;
        setPostTags(postTags);
    }

    useEffect(() => { getProject(); getPostTags(); }, [])

    if (loading) return <div><Spinner /></div>
    return (
        <div className='top'>
            <div className='page_wrap_prj'>
                <div className='banner'>
                    <img src="../../images/banner.png" alt="" />
                </div>
                <div className='page_contents_wrap_prj_read'>
                    <div className='page_contents_prj'>
                        <div className='mt-5'>
                            <span className='contents_title'> {title} </span>
                        </div>
                        <div className='study_plan_wrap justify-content-center p-10'>
                            <Card className='p-5' style={{ width: '110rem' }}>
                                <Row className='mb-3'>
                                    <Col className='me-3'>
                                        <div className='thumbnail'>
                                            <img src={post.atch_path || "http://via.placeholder.com/620x620"}/>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='mb-5'>
                                            <h5><span style={{ color: "red" }}>✔</span> 개발자 </h5>
                                            <h4>　{post.nickname}</h4>
                                        </div>
                                        <div className='mb-5'>
                                            <h5><span style={{ color: "red" }}>✔</span> 개발 기간 </h5>
                                            <h4>　{post.dev_bgn_date} ~ {post.dev_end_date}</h4>
                                        </div>
                                        <div className='mb-5'>
                                            <h5><span style={{ color: "red" }}>✔</span> 개발 인원 </h5>
                                            <h4>　{post.dev_mem_cnt} 명 </h4>
                                        </div>
                                        <div className='mb-5'>
                                            <h5><span style={{ color: "red" }}>✔</span> 기술스택 </h5>
                                            {postTags.map(postTag =>
                                                <span key={postTag.post_tags_id} className='me-2'>
                                                    <Badge bg="success" style={{ fontSize: "1.2rem" }} className='mb-2'>{postTag.tag_name}</Badge>
                                                </span>
                                            )}
                                        </div>
                                        <div className='mb-5'>
                                            <h5><span style={{ color: "red" }}>✔</span> 프로젝트 깃허브 주소 </h5>
                                            <h4>　{post.git_url}</h4>
                                        </div>
                                        <div className='mb-5'>
                                            <h5><span style={{ color: "red" }}>✔</span> 데모사이트 주소 </h5>
                                            <h4>　{post.demo_url}</h4>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className='mb-5'>
                                        <h4><span style={{ color: "red" }}>✔</span> 내용 </h4>
                                        <h5>{post.content}</h5>
                                    </div>
                                    <div className='mb-5'>
                                        <h4><span style={{ color: "red" }}>✔</span> 핵심 기능 </h4>
                                        <h5>{post.major}</h5>
                                    </div>
                                    <div className='mb-5'>
                                        <h4><span style={{ color: "red" }}>✔</span> 어려웠던 부분 </h4>
                                        <h5>{post.hard}</h5>
                                    </div>
                                    <div className='mb-5'>
                                        <h4><span style={{ color: "red" }}>✔</span> 아쉬운 점 </h4>
                                        <h5>{post.disapoint}</h5>
                                    </div>
                                </Row>
                            </Card>
                        </div>
                    </div>
                    <div className='text-center my-5'>
                        <Button type="submit" className='p-3 me-3' variant="outline-success"> 뒤로가기 </Button>
                    </div>
                </div>

                <div className='page_contents_wrap_prj_comm'>
                    <ProjectComments />
                </div>

            </div>
        </div>
    )
}

export default ProjectRead