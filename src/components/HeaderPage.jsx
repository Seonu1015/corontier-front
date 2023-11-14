import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom'


const HeaderPage = () => {
    const navi = useNavigate();
    const onLogout = (e)=> {
        e.preventDefault();
      
        if(window.confirm("로그아웃하실래요?")) {
            sessionStorage.clear();
            navi("/");
        }
     
       
    }
    return (
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand href="/"><img src='../../images/logo.png' width="50" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink href="/problem/main">Problems</NavLink>
                        <NavLink href="/project/main">Projects</NavLink>
                        <NavDropdown title="Community" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/community/notice/NoticePage">공지사항</NavDropdown.Item>
                            <NavDropdown.Item href="/community/lounge/loungepage">라운지</NavDropdown.Item>
                            <NavDropdown.Item href="/community/applystudy&project/applyprojectpage">스터디&프로젝트</NavDropdown.Item>
                            <NavDropdown.Item href="/community/q&a/questionpage">Q&A</NavDropdown.Item>
                            <NavDropdown.Item href="/community/recomendcontents/textbookpage">교재&강의추천</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Contest" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/contest/contestList">공모전</NavDropdown.Item>
                            <NavDropdown.Item href="/contest/contest-tip">팁</NavDropdown.Item>
                            <NavDropdown.Item href="/contest/ContestReview">후기</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {/** 로그인 case별 분기 */}
                        {   /** admin일때 */
                            sessionStorage.getItem('user_id') === 'admin' && 
                            <NavLink href="#">adminpage</NavLink>
                        }
                        {   /** admin이외 user로그인 */
                            sessionStorage.getItem('user_id') && sessionStorage.getItem('user_id') !== 'admin' && 
                            <>
                            <NavLink href="/user/mypage">mypage(user)</NavLink>
                            <NavLink onClick={onLogout} href="/user/signin">logout (user)</NavLink>
                            </>
                        }
                        {
                            /** 비로그인 일때 */
                            !sessionStorage.getItem('user_id') &&
                            <>
                            <NavLink href="/user/signup">Sign up(not user)</NavLink>
                            <NavLink  href="/user/signin">Sign in(not user)</NavLink>
                            </>
                        }
                        
                        {/** mypage,회원가입,로그인완성 전까지 사용할 링크 & 작성완료이후 삭제예정 */}
                 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderPage