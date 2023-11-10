import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner, Table, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import Pagination from "react-js-pagination";



const ContestTip = () => {

    const [ContestTips, setContestTips] = useState([]);

    const ContestTipcall = async () => {
        const url = `/contest/list.json`;
        const res = await axios(url);
        console.log(res.data);
        let list = res.data;
        list = list.map(p => p && { ...p, show: false });
        
        setContestTips(list);
    }


    useEffect(() => {
        ContestTipcall();
    }, []);

    const onClickTitle = (id) => {
        const newPosts = ContestTips.map(p => p.post_id === id ? { ...p, show: !p.show } : p);
        // console.log(newPosts)
        setContestTips(newPosts);
    }


    return (
        <div className='my-5 p-5'>
        <div className='text-center'>
         <h2>공모전 Tip 게시판 </h2>
        </div>
            <Table striped hover className='text-center my-3'>
        <thead>
            <tr>
            <th>No</th>     <th>제목</th><td>작성자</td><td>작성일</td><td>조회</td>
            </tr>
        </thead>
           <tbody>
            {ContestTips.map(ContestTip =>
                                <tr key={ContestTip.post_id}>
                                <td>{ContestTip.post_id}</td>   
                                <td>    
                                <div onClick={() => onClickTitle(ContestTip.post_id)} style={{ cursor: "pointer" }}>{ContestTip.title}</div>
                                <td colSpan={4}>
                                    {ContestTip.show && <div>{ContestTip.content}</div>}
                                </td>
                            </td>
                    <td width="20%"><div className='ellipsis'>{ContestTip.user_id}</div></td>
                    <td>{ContestTip.created_at}</td>
                    <td>{ContestTip.view_cnt}</td>
                </tr>
            )}
        </tbody>
    </Table>
</div>


    )
}

export default ContestTip