import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, CardBody, CardHeader, Col, Container, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap'
import Pagination from 'react-js-pagination';
import '../../css/Pagination.css';
import { useLocation, useNavigate } from 'react-router';
import { FaUndoAlt } from 'react-icons/fa';
import { BsCalendar2CheckFill, BsCalendar2XFill } from 'react-icons/bs';
import { async } from 'q';
import { NavLink } from 'react-router-dom';

const ProblemMain = () => {
    const [loading, setLoading] = useState(false);
    const [tags, setTags] = useState([]);
    const [grades, setGrades] = useState([]);
    const [problems, setProblems] = useState([]);
    const [total, setTotal] = useState(0);
    const [clearData, setClearData] = useState([]);
    const [user, setUser] = useState({});

    const navi = useNavigate();

    const size = 10;
    const location = useLocation();
    const path = location.pathname;
    const search = new URLSearchParams(location.search);
    const page = search.get("page") ? parseInt(search.get("page")) : 1;

    const [selTags, setSelTags] = useState([]);
    const [selGrade, setSelGrade] = useState("");

    const getTags = async () => {
        setLoading(true);
        const res = await axios('/problem/tag/list.json');
        setTags(res.data);
        setLoading(false);
    }

    const getGrades = async () => {
        setLoading(true);
        const res = await axios('/problem/grade/list.json');
        setGrades(res.data);
        setLoading(false);
    }

    const getProblems = async () => {
        setLoading(true);
        const res = await axios(`/problem/list.json?page=${page}&size=${size}`);
        setProblems(res.data.list);
        setTotal(res.data.total);
        setLoading(false);
    }

    const getClearData = async () => {
        const user_id = sessionStorage.getItem("user_id");
        setLoading(true);
        const res = await axios(`/problem/clear/${user_id}`);
        setClearData(res.data.list);
        setUser(res.data.user);
        setLoading(false);
    }

    const onChangePage = (page) => {
        navi(`${path}?page=${page}&size=${size}`);
    }

    const onClickTag = async (tag_id) => {
        setLoading(true);
        const res = await axios(`/problem/by_tag/${tag_id}`);
        // console.log(res.data);
        setProblems(res.data.list);
        setTotal(res.data.total);
        setLoading(false);
    }

    const onSelectGrade = async (grade_id) => {
        setLoading(true);
        const res = await axios(`/problem/by_grade/${grade_id}`);
        // console.log(res.data);
        setProblems(res.data.list);
        setTotal(res.data.total);
        setLoading(false);
    }

    const onReset = () => {
        getProblems();
    }

    useEffect(() => {
        getTags();
        getGrades();
        getProblems();
        getClearData();
    }, [page]);

    return (
        <div className='page_contents_wrap'>
            <Container>
                <Row>
                    <Col md={9}>
                        <Row className='mb-3'>
                            <Col>
                                <img src='/images/studyplan/starterplan.png' style={{ width: "100%", borderRadius: "10px" }} />
                            </Col>
                            <Col>
                                <img src='/images/studyplan/middleplan.png' style={{ width: "100%", borderRadius: "10px" }} />
                            </Col>
                            <Col>
                                <img src='/images/studyplan/hardplan.png' style={{ width: "100%", borderRadius: "10px" }} />
                            </Col>
                        </Row>
                        <form>
                            <Row className='mb-3'>
                                <Col md={2}>
                                    <Dropdown>
                                        <Dropdown.Toggle className='w-100' variant="outline-primary" id="dropdown-basic">
                                            난이도
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {grades.map(g =>
                                                <Dropdown.Item key={g.grade_id} onClick={() => onSelectGrade(g.grade_id)}>{g.grade}</Dropdown.Item>
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col>
                                    <InputGroup>
                                        <Form.Control placeholder='Search' />
                                        <Button className='px-4' variant='secondary'>검색</Button>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col md={10} style={{ fontSize: "1.2rem" }}>
                                    {tags.map(t =>
                                        <React.Fragment key={t.tag_id}>
                                            <Badge className='me-2' onClick={() => onClickTag(t.tag_id)}
                                                style={{ cursor: "pointer" }}>
                                                {t.tag_name}
                                            </Badge>
                                        </React.Fragment>
                                    )}
                                </Col>
                                <Col className='text-end' style={{ fontSize: "1.2rem" }}>
                                    <Badge className='px-3' size='sm' onClick={onReset} bg="secondary" style={{ cursor: "pointer" }}>초기화 <FaUndoAlt /></Badge>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Table hover className='text-center'>
                                        <thead>
                                            <tr>
                                                <th width="10%">상태</th>
                                                <th>제목</th>
                                                <th width="10%">난이도</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {problems.map(p =>
                                                <tr key={p.problem_id}>
                                                    <td style={{ verticalAlign: "middle", fontSize:"120%"}}>
                                                        {clearData.map(cd => {
                                                            if ((cd.complete === 0) && (p.problem_id === cd.problem_id)) {
                                                                return <BsCalendar2XFill style={{color:"#FA5858"}}/>;
                                                            } else if ((cd.complete === 1) && (p.problem_id === cd.problem_id)) {
                                                                return <BsCalendar2CheckFill style={{color:"#045FB4"}} />;
                                                            }
                                                            return null;
                                                        })}
                                                    </td>
                                                    <td style={{ verticalAlign: "middle" }} className='text-start ps-5'>
                                                        <div><NavLink to={`/problem/${p.problem_id}`} style={{color:"black"}}>{p.title}</NavLink></div>
                                                        <div style={{ fontSize: "70%" }}>{p.tag_names}</div>
                                                    </td>
                                                    <td style={{ verticalAlign: "middle" }}>{p.grade}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={size}
                                totalItemsCount={total}
                                pageRangeDisplayed={10}
                                prevPageText={'‹'}
                                nextPageText={'›'}
                                onChange={onChangePage} // 이벤트 핸들러 추가
                            />
                        </form>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader className='p-4'>
                                <h1>{user.nickname}</h1>
                            </CardHeader>
                            <CardBody>
                                Difficulty


                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default ProblemMain