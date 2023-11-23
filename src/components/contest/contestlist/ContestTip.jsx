import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { Table} from 'react-bootstrap';
import Pagination from "react-js-pagination";
import { Container, Nav, Navbar,NavLink,Button } from 'react-bootstrap';

const ContestTip = () => {


    const [scrMap, setscrMap] = useState({}); // likesMap 상태 추가
    const [ContestTips, setContestTips] = useState([]);
    const navigate = useNavigate();
    const navi = useNavigate();
    const ContestTipcall = async () => {
        const url = `/contest/list.json`;
        const res = await axios(url);
        let list = res.data;
        list = list.map(p => p && { ...p, show: false });
        console.log(list);
        
        setContestTips(list);
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
        ContestTipcall();getSCRCount();
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
    <Button variant="primary" size="sm" onClick={() => navi('/contest/TipInsert')} >글작성</Button>
</div>


    )
}

export default ContestTip