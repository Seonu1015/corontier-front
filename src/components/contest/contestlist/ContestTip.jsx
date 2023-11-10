import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { Table} from 'react-bootstrap';
import Pagination from "react-js-pagination";
import { Container, Nav, Navbar,NavLink } from 'react-bootstrap';

const ContestTip = () => {

    const [ContestTips, setContestTips] = useState([]);
    const navigate = useNavigate();
    const ContestTipcall = async () => {
        const url = `/contest/list.json`;
        const res = await axios(url);
        let list = res.data;
        list = list.map(p => p && { ...p, show: false });
        console.log(list);
        
        setContestTips(list);
    }


    useEffect(() => { 
        ContestTipcall();
                            }, []);


    const onClickTitle = (post_Id) => {
        navigate(`/contest/contest-tip/${post_Id}`); // 상세 페이지로 이동합니다.
      };



    return (
        <div className='my-5 p-5'>

        <Navbar className="justify-content-center">
                <Container>
                    <Nav className="me-auto" >
                    <NavLink href="/contest/contestList">공모전 목록</NavLink>
                    <NavLink href="/contest/contest-tip">공모전 TIP 게시판</NavLink>
                    <NavLink href="/contest/ContestReview">공모전 리뷰 게시판</NavLink>
                        {/* 다른 Nav.Link 요소들 */}
                    </Nav>
                </Container>
        </Navbar>
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
                                <div onClick={() => onClickTitle(ContestTip.post_id)} style={{ cursor: 'pointer' }}>
                  {ContestTip.title}
                </div>
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