import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner, Table, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import Pagination from "react-js-pagination";
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';



const CompetitonList = () => {

    const [competions, setCompetions] = useState([]);

    const getCompes = async () => {
        const url = `/crawler/list.json`;
        const res = await axios(url);
        console.log(res.data);
        setCompetions(res.data.list);

    }

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
                        <tr key={competion.cid}>
                            <td>{competion.cid}</td>
                            <td width="30%"><div className='ellipsis'>{competion.title}</div></td>
                            <td width="20%"><div className='ellipsis'>{competion.date1}</div></td>
                            <td>{competion.status1}</td>
            
                        </tr>
                    )}
                </tbody>
            </Table>
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>



    )
}

export default CompetitonList