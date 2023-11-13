import React, { useContext, useEffect, useState } from 'react'
import { Badge, Button, Card, CardBody, CardFooter, Col, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router';
import { BoxContext } from '../../BoxContext';
import axios from 'axios';
import { BiMessageSquareEdit } from 'react-icons/bi';
import Pagination from 'react-js-pagination';
import '../../../css/Pagination.css';
import { async } from 'q';

const SolutionComment = () => {
    const [loading, setLoading] = useState(false);
    const [solCmnt, setSolCmnt] = useState([]);
    const [comments, setComments] = useState("");
    const { sol_id } = useParams();
    const { setBox } = useContext(BoxContext);
    const [total, setTotal] = useState(0);

    const navi = useNavigate();

    const size = 5;
    const location = useLocation();
    const path = location.pathname;
    const search = new URLSearchParams(location.search);
    const page = search.get("page") ? parseInt(search.get("page")) : 1;

    const getComments = async () => {
        setLoading(true);
        const res = await axios(`/problem/sol_cmnt.json/${sol_id}?page=${page}&size=${size}`);
        // console.log(res);
        setSolCmnt(res.data.list);
        setTotal(res.data.total);
        setLoading(false);
    }

    const onChangePage = (page) => {
        navi(`${path}?page=${page}&size=${size}`);
    }

    const onClickRegister = () => {
        if (comments === "") {
            setBox({
                show: true,
                message: "내용을 입력하세요!",
            });
        } else {
            setBox({
                show: true,
                message: "댓글이 등록하시겠습니까?",
                action: async () => {
                    await axios.post('/problem/sol_cmnt/insert', { user_id: sessionStorage.getItem("user_id"), sol_id, content: comments });
                    getComments();
                    setComments("");
                }
            });
        }
    }

    const onDelete = (comment_id) => {
        setBox({
            show:true,
            message: "댓글을 삭제하시겠습니까?",
            action: async () => {
                await axios.post('/problem/sol_cmnt/delete', {comment_id});
                getComments();
            }
        });
    }

    useEffect(() => {
        getComments();
    }, [page]);

    return (
        <div>
            <div>
                <Row>
                    <Col>
                        <BiMessageSquareEdit /> 댓글 ({total})
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col md={11}>
                        <Form.Control as="textarea" rows={3} placeholder='내용을 입력해주세요.'
                            onChange={(e) => setComments(e.target.value)} value={comments} />
                    </Col>
                    <Col>
                        <Button variant='outline-secondary' style={{ height: "85px" }} onClick={onClickRegister}>등록</Button>
                    </Col>
                </Row>
                <hr />
                {solCmnt.map(c =>
                    <Card key={c.comment_id} className='mb-3'>
                        <CardBody>
                            {c.content}
                        </CardBody>
                        <CardFooter className=''>
                            <Row>
                                <Col>
                                    {c.nickname} ─ {c.fmtcreated}
                                </Col>
                                <Col md={1} className='text-end'>
                                    <Badge bg="secondary" size='sm' style={{cursor:"pointer"}} onClick={()=> onDelete(c.comment_id)}>삭제</Badge>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                )}
                <Pagination
                    activePage={page}
                    itemsCountPerPage={size}
                    totalItemsCount={total}
                    pageRangeDisplayed={10}
                    prevPageText={'‹'}
                    nextPageText={'›'}
                    onChange={onChangePage} // 이벤트 핸들러 추가
                />
            </div>
        </div>
    )
}

export default SolutionComment