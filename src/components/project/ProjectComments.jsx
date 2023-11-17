import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Tab, Tabs, Spinner, Card, Row, Col, Table } from 'react-bootstrap';

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
            <section class="mb-5">
                <div class="card bg-light">
                    <div class="card-body">

                        <form class="mb-4">
                            <textarea class="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea>
                        </form>

                        {comments.map(comment =>
                            <div class="d-flex mb-4" key={comment.comment_id}>
                                <div class="flex-shrink-1">
                                    <img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." />
                                </div>
                                <div class="ms-3">
                                    <div class="fw-bold">{comment.nickname}</div>
                                    <div>{comment.content}</div>
                                    <div className='small' style={{ color: "gray" }}>{comment.fmtdate}</div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>


        </div>
    )
}

export default ProjectComments