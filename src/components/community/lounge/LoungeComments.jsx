import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const LoungeComments = () => {
    const { comment_id } = useParams();
    const [comments, setComments] = useState([]);

    const getComments = async () => {
        const res = await axios.get(`/community/comments/${comment_id}`);
        let comments = res.data;
        setComments(comments);
    }

    useEffect(() => { 
        getComments();
    }, [])

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
                                    <img class="rounded-circle" src="http://via.placeholder.com/30x30" alt="..." />
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

export default LoungeComments