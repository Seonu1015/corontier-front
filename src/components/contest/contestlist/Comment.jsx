import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Comment() {
    alert(sessionStorage.getItem("user_id"));

    const [contestcoments, setContestcoment] = useState([]);
    const [likesMap, setLikesMap] = useState({}); // likesMap 상태 추가
    const { post_id } = useParams();
    const [contents, setContents] = useState("");

    const ContestTipcomentsCall = async () => {
        const res = await axios.get("/contest/coments.json?post_id=" + post_id);
        setContestcoment(res.data);
    };

    const getHeartCount = async () => {
        const res = await axios.get("/contest/getCommentLikeCount.json");
        const contestcomentlikes = res.data;
        const newLikesMap = {};
        contestcomentlikes.forEach(like => {
            newLikesMap[like.comment_id] = like.like_count;
        });
        setLikesMap(newLikesMap); // likesMap 업데이트
    };


    const onClickInsertHeart = async (rid) => {
   
          const res = await axios.post('/contest/likeinsert', {
              user_id: sessionStorage.getItem("user_id"), // user_id 수정
              comment_id : rid
    
          });
          if (res.data === 1) {
            getHeartCount();
       
          }
      }
  
      const onClickDeleteHeart = async (rid) => {
   
        const res = await axios.post('/contest/likedelete', {
            user_id: sessionStorage.getItem("user_id"), // user_id 수정
            comment_id : rid
  
        });
        if (res.data === 1) {
          getHeartCount();
     
        }
    }  /// 부트스트랩아이콘이안되서 버튼하나더추가 아이콘추가시 토글로 바꿀예정







    useEffect(() => {
        ContestTipcomentsCall();
        getHeartCount();
    }, []);

    const onClickRegister = async () => {
        if (contents === "") {
            alert("내용을 입력하세요!!");
        } else {
            const res = await axios.post('/contest/insert', {
                user_id: sessionStorage.getItem("user_id"), // user_id 수정
                post_id,
                contents
            });
            if (res.data === 1) {
                ContestTipcomentsCall();
                setContents("");
            }
        }
    };

    const onClickDelete = async (rid) => {
        const confirmation = alert("삭제할까요?");
        if (confirmation) {
            const res = await axios.post('/contest/delete', {comment_id: rid});
            if (res.data === 1) {
                alert("삭제되었습니다.");
                ContestTipcomentsCall();
            }
        }
    };






    return (
        <section className="mb-5">
            <div className="card bg-light">
                <div className="card-body">
                    <form className="mb-4">
                        <Form.Control
                            className="form-control"
                            rows="3"
                            placeholder="Join the discussion and leave a comment!"
                            value={contents}
                            onChange={(e) => setContents(e.target.value)}
                            as="textarea"
                        />
                        <div className="d-flex justify-content-end mt-2">
                            <button type="button" className="btn btn-primary" onClick={onClickRegister}>댓글 추가</button>
                        </div>
                    </form>

                    {contestcoments.map(contestcoment =>
                        <div className="d-flex mb-4" key={contestcoment.comment_id}>
                            <div className="flex-shrink-0">
                                <img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." />
                            </div>
                            <div className="ms-3">
                                <div className="fw-bold">{contestcoment.user_id} 조인해서 바꿔야함</div>
                                <div>{contestcoment.content}</div>
                                <Button variant="primary" size="sm" onClick={() => onClickInsertHeart(contestcoment.comment_id)} >좋아요 {likesMap[contestcoment.comment_id] || 0}</Button>
                                <Button variant="primary" size="sm" onClick={() => onClickDeleteHeart(contestcoment.comment_id)} >좋아요 취소 </Button>
                                {sessionStorage.getItem("user_id") == contestcoment.user_id &&
                                    <Button onClick={() => onClickDelete(contestcoment.comment_id)} variant='danger' size='sm me-3'>삭제</Button>
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Comment;
