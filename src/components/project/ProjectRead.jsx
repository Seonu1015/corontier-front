import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Spinner, Row, Col, Card, Table } from 'react-bootstrap';

const ProjectRead = () => {
    const [loading, setLoading] = useState(false);
    const { post_id } = useParams();
    const [post, setPost] = useState({
        post_id: "", menu: "", title: "", content: "", created_at: "", updated_at: "", view_cnt: "",
        dev_bgn_date: "", dev_end_date: "", dev_mem_cnt: "", git_url: "", demo_url: "",
        intro: "", major: "", hard: "", disapoint: "", nickname: ""
    })

    // const { menu, title, content, created_at, updated_at, view_cnt,
    //     dev_bgn_date, dev_end_date, dev_mem_cnt, git_url, demo_url,
    //     intro, major, hard, disapoint } = post;

    const getProject = async () => {
        setLoading(true);
        const res = await axios.get("/project/projectpick.json?post_id=" + post_id);
        console.log(res.data)
        setPost(res.data);
        setLoading(false);
    }

    useEffect(() => { getProject(); }, [])

    if (loading) return <div><Spinner /></div>
    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>testPage</h1>
            <Row>
                <Col md={3} className='mx-3'>
                    <h3>{post.title}</h3>
                </Col>
                <Col className='mx-3'>
                    <span><h4>{post.nickname}</h4><h1>{post.title}</h1></span><br/>
                    <Table className='text-center'>
                        <thead>
                            <tr>
                                <td>개발인원</td>
                                <td>개발기간</td>
                                <td>기술스택</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{post.dev_mem_cnt}</td>
                                <td>{post.dev_bgn_date} ~ {post.dev_end_date}</td>
                                <td>{}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Card>
                        
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProjectRead