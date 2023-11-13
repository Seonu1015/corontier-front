import React, { useState, useContext, useEffect } from 'react'
import { BoxContext } from '../BoxContext';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../../css/Pagination.css';

const ProblemList = () => {
    const { setBox } = useContext(BoxContext);
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    const navi = useNavigate();

    const size = 10;
    const location = useLocation();
    const path = location.pathname;
    const search = new URLSearchParams(location.search);
    const page = search.get("page") ? parseInt(search.get("page")) : 1;

    const getProblems = async () => {
        setLoading(true);
        const res = await axios(`/problem/list.json?page=${page}&size=${size}`);
        setProblems(res.data.list);
        setTotal(res.data.total);
        setLoading(false);
    }

    const onChangePage = (page) => {
        navi(`${path}?page=${page}&size=${size}`);
    }

    useEffect(() => {
        getProblems();
    }, [page]);

    return (
        <div>
            <Table hover className='problemList text-center'>
                <thead>
                    <tr>
                        <th width="8%">난이도</th>
                        <th>제목</th>
                        <th width="18%">등록일</th>
                        <th width="10%">수정</th>
                        <th width="10%">삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map(p =>
                        <React.Fragment key={p.problem_id}>{/* 키 오류 해결을 위해 코드 추가 */}
                            <tr>
                                <td style={{ verticalAlign: "middle" }}>{p.grade}</td>
                                <td className='text-start ps-5'>
                                    <div>{p.title}</div>
                                    <div style={{ fontSize: "70%" }}>{p.tag_names}</div>
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <div>{p.fmt_created}</div>
                                    <div style={{ fontSize: "70%" }}>수정 : {p.fmt_updated}</div>
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Button size='sm' onClick={() => navi(`/problem/update/${p.problem_id}`)}>수정</Button>
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <Button variant='danger' size='sm'>삭제</Button>
                                </td>
                            </tr>
                        </React.Fragment>
                    )}
                </tbody>
            </Table>
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
    )
}

export default ProblemList