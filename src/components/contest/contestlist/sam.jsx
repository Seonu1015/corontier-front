import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Tab, Tabs, Spinner, Card, Row, Col } from 'react-bootstrap';

const ProjectComments = () => {
    const [loading, setLoading] = useState(false);
    const { post_id } = useParams();
    const [comments, setComments] = useState([]);

    const getProject = async () => {
        setLoading(true);
        const res = await axios.get("/project/commentslist.json?post_id=" + post_id);
        let comments = res.data;
        setComments(comments);
        setLoading(false);
    }

    useEffect(() => { getProject(); }, [])

    if (loading) return <div><Spinner /></div>
    return (
        <div>
            <Tabs
                defaultActiveKey="Comments"
                transition={false}
                id="noanim-tab-example"
                className="mb-3">

                <Tab eventKey="Comments" title="댓글 보기 👀">
                    {comments.map(comment =>
                        <Card className='p-2 mb-3'>
                            <Row key={comment.comment_id}>
                                <Col xs={2} lg={2} className="aling-self-center">
                                    <img src={comment.profile_image || "http://via.placeholder.com/100x100"} width="90%"/>
                                    <div className='text-center'>{comment.nickname}</div>
                                </Col>
                                <Col>
                                    <div className='small' style={{color:"gray"}}>{comment.fmtdate}</div>
                                    <div>{comment.content}</div>
                                </Col>
                            </Row>
                        </Card>
                    )}
                </Tab>


            </Tabs>
        </div>
    )
}

export default ProjectComments