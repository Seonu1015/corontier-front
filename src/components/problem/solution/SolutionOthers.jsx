import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Card, CardBody, Row, Col, CardHeader } from 'react-bootstrap'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { vscodeDark } from '@uiw/codemirror-themes-all';
import Pagination from 'react-js-pagination';

const SolutionOthers = () => {
    const [loading, setLoading] = useState(false);
    const [solutions, setSolutions] = useState([]);
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [total, setTotal] = useState(0);

    const { problem_id } = useParams();
    const navi = useNavigate();

    const size = 6;
    const location = useLocation();
    const path = location.pathname;
    const search = new URLSearchParams(location.search);
    const page = search.get("page") ? parseInt(search.get("page")) : 1;

    const languageComponents = {
        javascript: (
            <CodeMirror
                value={value}
                height="250px"
                extensions={[javascript({ jsx: true })]}
                theme={vscodeDark}
                readOnly
            />
        ),
        python: (
            <CodeMirror
                value={value}
                height="250px"
                extensions={[python()]}
                theme={vscodeDark}
                readOnly
            />
        ),
        java: (
            <CodeMirror
                value={value}
                height="250px"
                extensions={[java()]}
                theme={vscodeDark}
                readOnly
            />
        ),
        cpp: (
            <CodeMirror
                value={value}
                height="250px"
                extensions={[cpp()]}
                theme={vscodeDark}
                readOnly
            />
        ),
    }

    const getSolutions = async () => {
        setLoading(true);
        const res = await axios(`/problem/others/list.json?problem_id=${problem_id}&page=${page}&size=${size}`);
        console.log(res.data.list);
        setSolutions(res.data.list);
        setTitle(res.data.list[0].title);
        setTotal(res.data.total);
        setLoading(false);
    }

    const onChangePage = (page) => {
        navi(`${path}?page=${page}&size=${size}`);
    }

    useEffect(() => {
        getSolutions();
    }, [page]);

    return (
        <div className='page_wrap'>
            <div className='banner'>
                <img src="../../images/banner.png" alt="" />
            </div>
            <div className='page_contents_wrap'>
                <h1 className='mb-5'>{title} <a href={"/problem/" + problem_id} style={{ fontSize: "0.9rem" }}><AiOutlineArrowRight /> 문제로 돌아가기</a></h1>
                <Row>
                    {solutions.map(s =>
                        <Col md={6} key={s.sol_id}>
                            <Card className='mb-5'>
                                <CardHeader>
                                    {s.nickname} ({s.fmtcreated})
                                </CardHeader>
                                <CardBody>
                                    <CodeMirror // 해결방법을 찾지 못해서 일단 급한대로 python으로만 표시되게 해둠
                                        value={s.content}
                                        height="250px"
                                        extensions={[
                                            python()]}
                                        theme={vscodeDark}
                                        readOnly
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    )}
                </Row>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={size}
                    totalItemsCount={total}
                    pageRangeDisplayed={10}
                    prevPageText={'‹'}
                    nextPageText={'›'}
                    onChange={onChangePage}
                />
            </div>
        </div>
    )
}

export default SolutionOthers