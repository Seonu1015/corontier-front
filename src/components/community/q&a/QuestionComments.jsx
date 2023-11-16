import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const LoungeComments = () => {
    const { comment_id } = useParams();
    const [comment, setComment] = useState([]);

    const getComments = async () => {
        const res = await axios.get(`/community/comments/${comment_id}`);
        setComment(res.data);
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
                        <div class="d-flex mb-4 p-2">
                            <div class="flex-shrink-1">
                                <img class="photo" src="http://via.placeholder.com/60x60" />
                            </div>
                            <div class="ms-3">
                                <div class="fw-bold">buchu</div>
                                <div>1. Rename : libyoyo_interpreted.a  lyoyo_interpreted.a  (Supporting files 안에 있음).
                                    2.1 Delete[-] : libyoyo_interpreted.a  file in  Targets  Build Phases  Link Binary With Libraries pane.
                                    2.2  Add[+]    : lyoyo_interpreted.a
                                </div>
                                <div className='small' style={{ color: "gray" }}>2023.11.09</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoungeComments