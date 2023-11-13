import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner, Table, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import Pagination from "react-js-pagination";
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';



const CompetitonList = () => {
    const [scrMap, setscrMap] = useState({}); // likesMap 상태 추가
    const [competions, setCompetions] = useState([]);

    const getCompes = async () => {
        const url = `/crawler/list.json`;
        const res = await axios(url);
        console.log(res.data);
        setCompetions(res.data.list);

    }

    const getSCRCount = async () => {
        const res = await axios.get("/contest/getPostLikeCount.json"); // 경로변경 
        const contestTipSCRs = res.data;
        console.log(res.data)
        const newLikesMap = {};
        contestTipSCRs.forEach(like => {
            newLikesMap[like.post_id] = like.scr_count;
        });
        setscrMap(newLikesMap); // likesMap 업데이트
    };


    const onClickInsertSCR = async (rid) => {
   
        const res = await axios.post('/contest/postlikeinsert', {
            user_id: sessionStorage.getItem("user_id"), // user_id 수정
            post_id : rid
  
        });
        if (res.data === 1) {
            getSCRCount();
     
        }
    }


    const onClickDeleteSCR  = async (rid) => {
 
        const res = await axios.post('/contest/postlikedelete', {
            user_id: sessionStorage.getItem("user_id"), // user_id 수정
            post_id : rid
  
        });
        if (res.data === 1) {
          getSCRCount();
     
        }
    }  /// 부트스트랩아이콘이안되서 버튼하나더추가 아이콘추가시 토글로 바꿀예정







    useEffect(() => {
        getCompes();
    }, []);

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

                <h2>공모전 목록</h2>
                </div>
              
       
        
        <Table striped hover className='text-center my-3'>
                <thead>
                    <tr>
                        <th>공모전ID</th><td>제목</td><td>모집기간</td><td>상태</td>
                
                    </tr>
                </thead>
                   <tbody>
                    {competions.map(competion =>
                        <tr key={competion.contest_id}>
                            <td>{competion.contest_id}</td>
                            <td width="30%"><div className='ellipsis'>{competion.title}</div></td>
                            <td width="20%"><div className='ellipsis'>{competion.period}</div></td>
                            <td>{competion.con_status}</td>
                            <td> <Button variant="primary" size="sm" onClick={() => onClickInsertSCR(competion.contest_id)} >좋아요 {scrMap[competion.contest_id] || 0}</Button></td>
                            <td> <Button variant="primary" size="sm" onClick={() => onClickDeleteSCR(competion.contest_id)} >좋아요 취소</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>



    )
}

export default CompetitonList