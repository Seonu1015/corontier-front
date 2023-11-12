import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../../css/Pagination.css';
import { Spinner, Row, Col, Card, Table, Container ,Nav, Navbar, NavDropdown, NavLink} from 'react-bootstrap';
import Comment from './Comment';
const ContestReviewDetail = () => {
  const { post_id } = useParams();
  const [contestTip, setContestTip] = useState({
    post_id: "", menu: "", title: "", content: "", created_at: "", updated_at: "", view_cnt: "",
    dev_bgn_date: "", dev_end_date: "", dev_mem_cnt: "", git_url: "", demo_url: "",
    intro: "", major: "", hard: "", disapoint: "", nickname: ""
  });

  const [contestcoments, setContestcoment] = useState([]);





  const ContestTipDetailCall = async () => {

    const res = await axios.get("/contest/tipinfo.json?post_id=" + post_id);
   
    setContestTip(res.data);

   
  }


  const ContestTipcomentsCall = async () => {

    const res = await axios.get("/contest/coments.json?post_id=" + post_id);

    setContestcoment(res.data);


  
  }




  useEffect(() => { ContestTipDetailCall(); ContestTipcomentsCall();}, [])

  return (
    <div className='my-5 ' style={{ backgroundColor: '#f8f9fa' }}>



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



      <div class="container mt-5">
        <div class="row" style={{width: "100%"}}>
          <div class="col-lg-8" style={{margin: "0 auto"}}>

            <div className='contest_contents'>

              <header class="mb-4 justify-content-center">

                <h1 class="fw-bolder mb-1"> {contestTip.title}</h1>

                <div class="text-muted fst-italic mb-2"> {contestTip.created_at}</div>
                  <hr></hr>
    
              </header>

              <figure class="mb-4"><img class="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>

              <section class="mb-5">
              {contestTip.content}
              </section>
            </div>
            <Container>
            <Comment/>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestReviewDetail;
