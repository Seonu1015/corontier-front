import React, { useState, useContext, useEffect } from 'react'
import { BoxContext } from '../BoxContext';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';

const ProblemList = () => {
    const { setBox } = useContext(BoxContext);
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(false);

    const navi = useNavigate();

    const size = 20;
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    const page = search.get("page") ? parseInt(search.get("page")) : 1;


    const getProblems = async () => {
        setLoading(true);
        const res = await axios(`/problem/list.json?page=${page}&size=${size}`);
        const list = res.data.list;
        console.log(list);
        setProblems(list);
        setLoading(false);
    }

    useEffect(() => {
        getProblems();
    }, [page]);

    return (
        <div className='m-5'>
            <h1 className='text-center mb-5'>문제 리스트</h1>
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
                        <>
                            <tr key={p.problem_id}>
                                <td style={{verticalAlign:"middle"}}>{p.grade}</td>
                                <td className='text-start ps-5'>
                                    <div>{p.title}</div>
                                    <div style={{ fontSize: "70%" }}>{p.tag_names}</div>
                                </td>
                                <td style={{verticalAlign:"middle"}}>
                                    <div>{p.fmt_created}</div>
                                    <div style={{ fontSize: "70%" }}>수정 : {p.fmt_updated}</div>
                                </td>
                                <td style={{verticalAlign:"middle"}}>
                                    <Button size='sm' onClick={()=> navi(`/problem/update/${p.problem_id}`)}>수정</Button>
                                </td>
                                <td style={{verticalAlign:"middle"}}>
                                    <Button variant='danger' size='sm'>삭제</Button>
                                </td>
                            </tr>
                        </>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default ProblemList