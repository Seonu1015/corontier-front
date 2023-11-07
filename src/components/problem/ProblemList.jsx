import React, { useState, useContext, useEffect } from 'react'
import { BoxContext } from '../BoxContext';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const ProblemList = () => {
    const { setBox } = useContext(BoxContext);
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(false);

    const size = 20;
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    const page = search.get("page") ? parseInt(search.get("page")) : 1;


    const getProblems = async () => {
        setLoading(true);
        const res = await axios(`/problem/list.json?page=${page}&size=${size}`);
        const list = res.data.list;
        for (let i = 0; i < list.length; i++) {
            const buffer = list[i].content.data;
            const uintArray = new Uint8Array(buffer);
            const content = new TextDecoder().decode(uintArray);
            list[i].content = content;
        }
        // console.log(list);
        setProblems(list);
        setLoading(false);
    }

    useEffect(() => {
        getProblems();
    }, [page]);

    return (
        <div className='m-5'>
            <h1 className='text-center mb-5'>문제 리스트</h1>
            <Table hover className='text-center justify-content-center'>
                <thead>
                    <tr>
                        <th width="10%">난이도</th>
                        <th width="40%">제목</th>
                        <th width="10%">정답</th>
                        <th width="10%">제출</th>
                        <th width="10%">정답률</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map(p => 
                        <tr key={p.problem_id}>
                            <td>{p.grade}</td>
                            <td className='text-start px-3'><NavLink to="">{p.title}</NavLink></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>    
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default ProblemList