import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Tab, Tabs, Spinner } from 'react-bootstrap';

const ProjectComments = () => {
    const [loading, setLoading] = useState(false);
    const { post_id } = useParams();
    const [comments, setComments] = useState([]);

    const getProject = async () => {
        setLoading(true);
        const res = await axios.get("/project/commentslist.json?post_id=" + post_id);
        console.log(res.data)
        let comments = res.data.comment;
        setComments(comments);
        setLoading(false);
    }

    useEffect(() => { getProject(); }, [])

    if (loading) return <div><Spinner /></div>
    return (
        <div>
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3">

                <Tab eventKey="Comments" title="댓글 보기👀">
                    {/* {comments.map(comment =>
                        <div key={comment.comment_id}>
                            {comment.content}
                        </div>
                    )} */}

                </Tab>


            </Tabs>
        </div>
    )
}

export default ProjectComments