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
                        <NavLink href="/problem/testpage">Problems</NavLink>
                        <NavLink href="/project/projectmain">Projects</NavLink>
                        <NavDropdown title="Community" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/community/communitymain">라운지</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">공지사항</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">스터디&프로젝트</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Q&A</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">교재&강의추천</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Contest" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/contest/contestmain">공모전</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">팁</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">후기</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink href="#">Register</NavLink>
                        <NavLink href="/users/usermain">Sign in</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderPage