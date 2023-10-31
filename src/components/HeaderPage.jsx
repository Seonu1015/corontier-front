import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';

const HeaderPage = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink href="#">Problems</NavLink>
                        <NavLink href="#">Projects</NavLink>
                        <NavDropdown title="Community" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">공지사항</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">라운지</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">스터디&프로젝트</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Q&A</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">교재&강의추천</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Contest" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">공모전</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">팁</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">후기</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink to="#">Register or Sign in</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderPage