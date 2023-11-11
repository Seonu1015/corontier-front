import React, { useState, useContext, useEffect } from 'react'
import { BoxContext } from '../../BoxContext';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Badge, Button, Col, Row, Table } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../../../css/Pagination.css';

const SolutionList = () => {
    const { setBox } = useContext(BoxContext);
    const [solutions, setSolutions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    const navi = useNavigate();

    const size = 10;
    const location = useLocation();
    const path = location.pathname;
    const search = new URLSearchParams(location.search);
    const page = search.get("page") ? parseInt(search.get("page")) : 1;

    const { user_id } = useParams();

    const getSolutions = async () => {
        setLoading(true);
        const res = await axios(`/problem/sol.json/${user_id}?page=${page}&size=${size}`);
        setSolutions(res.data.list);
        console.log(res.data.list);
        setTotal(res.data.total);
        setLoading(false);
    }

    const onChangePage = (page) => {
        navi(`${path}?page=${page}&size=${size}`);
    }

    const onTitleClick = (sol_id) => {
        const selectedSolution = solutions.find(s => s.sol_id === sol_id);
        navi(`/solution/read/${sol_id}`, { state: { solution: selectedSolution } });
    }

    useEffect(() => {
        getSolutions();
    }, [page]);

    return (
        <div >
            <Table striped hover className='problemList text-center'>
                <thead>
                    <tr>
                        <th>문제</th>
                        <th width="8%">상태</th>
                        <th width="8%">난이도</th>
                        <th width="18%">푼 날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {solutions.map(s =>
                        <React.Fragment key={s.sol_id}>{/* 키 오류 해결을 위해 코드 추가 */}
                            <tr>
                                <td className='text-start ps-5'>
                                    <div onClick={() => onTitleClick(s.sol_id)} style={{ cursor: "pointer" }}>{s.p_title}</div>
                                    <div style={{ fontSize: "70%" }}>{s.tag_names}</div>
                                </td>
                                <td style={{ verticalAlign: "middle", fontSize: "1.2rem" }}>
                                    {s.complete === 1 ? <Badge pill bg="success">성공</Badge> : <Badge pill bg="danger">실패</Badge>}
                                </td>
                                <td style={{ verticalAlign: "middle" }}><Badge bg="secondary">{s.grade}</Badge></td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <div>{s.s_fmt_created}</div>
                                    <div style={{ fontSize: "70%" }}>수정 : {s.s_fmt_updated}</div>
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
    );
}

export default SolutionList