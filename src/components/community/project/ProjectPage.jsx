import React from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import { Row, Col } from 'react-bootstrap'


const ProjectPage = () => {
    return (
        <>
            <div className='page_contents'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div>
                <h2 className='text-center'>프로젝트 & 스터디</h2>
                <hr />
                <h5>전체 프로젝트 스터디</h5>
                <Row className='my-5'>
                    <Col>
                        <Row>
                            <div>
                                <h5>이미지 작성자</h5>
                            </div>
                        </Row>
                        <Row>
                            <h5>제목ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ 조회수 댓글</h5>
                            <hr />
                        </Row>
                        <Row>
                            <div>
                                <h5>이미지 작성자</h5>
                            </div>
                        </Row>
                        <Row>
                            <h5>제목ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ 조회수 댓글</h5>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ProjectPage