import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner, Table, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import Pagination from "react-js-pagination";
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';

const ContestReview = () => {

    const [scrMap, setscrMap] = useState({}); // likesMap 상태 추가

    const [ContestReviews, setContestReviews] = useState([]);
    const navigate = useNavigate();
    const navi = useNavigate();
    const ContestReviewcall = async () => {
        const url = `/contest/reviewlist.json`;
        const res = await axios(url);
        console.log(res.data);
        let list = res.data;
        list = list.map(p => p && { ...p, show: false });
        
        setContestReviews(list);
    }

    const getSCRCount = async () => {
        const res = await axios.get("/contest/getPostLikeCount.json"); // 경로변경 
        const contestReviewSCRs = res.data;
        console.log(res.data)
        const newLikesMap = {};
        contestReviewSCRs.forEach(like => {
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


  const onClickReviewInsertSCR = async (rid) => {
   
    const res = await axios.post('/contest/postlikeinsert', {
        user_id: sessionStorage.getItem("user_id"), // user_id 수정
        post_id : rid

    });
    if (res.data === 1) {
        getSCRCount();
 
    }
}

const onClickReviewDeleteSCR  = async (rid) => {

  const res = await axios.post('/contest/postlikedelete', {
      user_id: sessionStorage.getItem("user_id"), // user_id 수정
      post_id : rid

  });
  if (res.data === 1) {
    getSCRCount();

  }
}  /// 부트스트랩아이콘이안되서 버튼하나더추가 아이콘추가시 토글로 바꿀예정




    useEffect(() => {
        ContestReviewcall(); getSCRCount();
    }, []);

    const onClickTitle = (post_id) => {
        navigate(`/contest/contest-review/${post_id}`); // 상세 페이지로 이동합니다.
      };

      // 부트스트랩 아이콘이 설치가안됨 - 온클릭 +  sql 조인해서 조회 

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
         <h2>공모전 리뷰 게시판 </h2>
        </div>
            <Table striped hover className='text-center my-3'>
        <thead>
            <tr>
            <th>No</th><th>제목</th><td>작성자</td><td>작성일</td><td>조회</td>
            </tr>
        </thead>
           <tbody>
            {ContestReviews.map(ContestReview =>
                                <tr key={ContestReview.post_id}>
                                <td>{ContestReview.post_id}</td>   
                                <td>    
                                <div onClick={() => onClickTitle(ContestReview.post_id)} style={{ cursor: 'pointer' }}>
                                    {ContestReview.title}</div>
                            </td>
                    <td width="20%"><div className='ellipsis'>{ContestReview.user_id}</div></td>
                    <td>{ContestReview.created_at}</td>
                    <td>{ContestReview.view_cnt}</td>
                   <td> <Button variant="primary" size="sm" onClick={() => onClickInsertSCR(ContestReview.post_id)} >좋아요 {scrMap[ContestReview.post_id] || 0}</Button></td>
                   <td> <Button variant="primary" size="sm" onClick={() => onClickDeleteSCR(ContestReview.post_id)} >좋아요 취소</Button></td>
                </tr>
            )}
        </tbody>
        
    </Table>

    <Button variant="primary" size="sm" onClick={() => navi('/contest/ReviewInsert')} >글작성</Button>
</div>


    )
}

export default ContestReview