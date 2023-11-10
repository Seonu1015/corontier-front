import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';

const HeaderPage = () => {
    
    return (
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink href="/problem/main">Problems</NavLink>
                        <NavLink href="/project/projectmain">Projects</NavLink>
                        <NavDropdown title="Community" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/community/notice/NoticePage">공지사항</NavDropdown.Item>
                            <NavDropdown.Item href="/community/lounge/loungepage">라운지</NavDropdown.Item>
                            <NavDropdown.Item href="/community/project/projectpage">스터디&프로젝트</NavDropdown.Item>
                            <NavDropdown.Item href="/community/q&a/questionpage">Q&A</NavDropdown.Item>
                            <NavDropdown.Item href="/community/study/textbookpage">교재&강의추천</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Contest" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/contest/contestmain">공모전</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">팁</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">후기</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {/** 로그인 case별 분기 */}
                        {   /** admin일때 */
                            sessionStorage.getItem('uid') === 'admin' && 
                            <NavLink href="#">adminpage</NavLink>
                        }
                        {   /** admin이외 user로그인 */
                            sessionStorage.getItem('uid') && sessionStorage.getItem('uid') !== 'admin' && 
                            <>
                            <NavLink href="/user/mypage">mypage(user)</NavLink>
                            <NavLink href="#">logout(user)</NavLink>
                            </>
                        }
                        {
                            /** 비로그인 일때 */
                            !sessionStorage.getItem('uid') &&
                            <>
                            <NavLink href="/user/signup">Sign up(not user)</NavLink>
                            <NavLink href="/user/signin">Sign in(not user)</NavLink>
                            </>
                        }
                        
                        {/** mypage,회원가입,로그인완성 전까지 사용할 링크 & 작성완료이후 삭제예정 */}
                        <NavLink href="/admin/adminpage">adminpage</NavLink>
                        <NavLink href="/user/mypage">mypage</NavLink>
                        <NavLink href="/user/signup">Sign up</NavLink>
                        <NavLink href="/user/signin">Sign in</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderPage