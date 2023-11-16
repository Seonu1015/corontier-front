import React from 'react'
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import CommunityMain from '../CommunityMain';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const ProjectRead = () => {
    const { vod_id } = useParams();
    const [post, setPost] = useState({});

    const getPosts = async () => {
        const res = await axios.get(`/crawler/javalist/${vod_id}`);
        setPost(res.data);
        console.log(post)
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <>
            <div className='page_contents'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div className='noticepage_tablegroup'>
                <div style={{ width: "80%" }} className='mb-5'>

                    <div className='justify-content-center p-10'>
                        <Card className='p-5 mt-5' >
                            <Row className='mb-3'>
                                <Col>
                                    {sessionStorage.getItem('user_id') === 'admin' &&
                                        <div className='text-end mb-5'>
                                            <Button className='btn btn-secondary btn-sm mx-1'>수정</Button>
                                            <Button className='btn btn-dark btn-sm'>삭제</Button>
                                        </div>
                                    }
                                    <div className='text-center mb-5'>
                                        <h3> 제목 {post.vod_title}</h3>
                                    </div>
                                    <div className='mt-5'>
                                        <h4> 🔹 소개</h4>
                                        <p className='mb-5'>
                                            　{post.vod_contents}
                                            이 강의는 현직 개발자가 설명하는 자바 언어 기초 강의로, 이클립스 설치부터 변수와 데이터 형식, 조건문, 반복문, 배열, 예외처리, 접근 제한자, 메소드, 생성자 및 Getter Setter까지 자바 언어의 기초적인 내용을 쉽고 자세하게 다룹니다.
                                        </p>
                                    </div>
                                    <div className='text-center'>
                                        <h4 className='text-center mb-4'>➰수업을 들으면 이런걸 할 수 있어요!</h4>
                                        <Card className='mb-3 p-3'>
                                            <h5>👉 자바 언어의 기초적인 내용을 이해하고 쉽게 코딩할 수 있습니다. 👈</h5>
                                        </Card>
                                        <Card className='mb-4 p-3'>
                                            <h5>👉 자바를 학습하여 다양한 프로그램 및 앱을 개발할 수 있습니다. 👈</h5>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className='mb-3'>
                                    <iframe
                                        width="100%"
                                        height="500"
                                        src={post.vod_link}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                    <h4 className='mt-5'>🔸 유튜브 주소</h4>
                                    <p className='mb-5'>{post.vod_link}</p>
                                    <div>
                                        <h4 className='mb-4'>📕 수업에서는 이런 걸 배워요</h4>
                                        <Card className='mb-5 p-4'>
                                            <p>
                                                　◾ 강의 #1에서는 이클립스 설치와 프로젝트 생성 방법을 다룹니다.<br/>
                                                　◾ 강의 #2부터는 변수와 데이터 형식에 대한 내용을 다룹니다.<br/>
                                                　◾ 강의 #3에서는 조건문에 대한 내용을 다룹니다.<br/>
                                                　◾ 강의 #4에서는 반복문(for문)에 대한 내용을 다룹니다.<br/>
                                                　◾ 강의 #5에서는 반복문(while문)에 대한 내용을 다룹니다.<br/>
                                                　◾ 강의 #6에서는 배열(Array)에 대한 내용을 다룹니다.<br/>
                                                　◾ 강의 #7에서는 예외처리(try-catch)에 대한 내용을 다룹니다.<br/>
                                                　◾ 강의 #8에서는 접근 제한자에 대한 내용을 다룹니다.<br/>
                                                　◾ 강의 #9에서는 메소드(Method)에 대한 내용을 다룹니다.<br/>
                                                　◾ 강의 #10에서는 생성자와 Getter Setter에 대한 내용을 다룹니다.
                                            </p>
                                        </Card>
                                    </div>
                                    <div className='mb-5'>
                                        <h4 className='mb-4'>👍 이런분들이 수강하시면 좋아요!</h4>
                                        <Card className='p-3'>
                                            <p>
                                                　◾ 자바 언어를 처음 공부하려는 분들<br/>
                                                　◾ 자바 언어의 기초를 다지고자 하는 분들<br/>
                                                　◾ 쉽게 자바 언어를 습득하고 싶은 분들
                                            </p>
                                        </Card>
                                    </div>
                                    <div>
                                        <h4 className='mb-4'>✅ 필요한 선수 지식이에요</h4>
                                        <Card className='p-3'>
                                            <p>
                                                　◾ 본 강의는 이전 프로그래밍 경험이 없는 초보자를 대상으로 합니다.<br/>
                                                　◾ 컴퓨터와 프로그래밍에 대한 기본적인 이해가 필요합니다.
                                            </p>
                                        </Card>
                                        <Card className='text-center mt-4 p-5'>
                                            <h5>이 강의를 수강하면 자바 언어의 기초적인 내용을 학습하여 쉽고 효과적으로 자바 언어를 코드로 작성할 수 있습니다.</h5>
                                        </Card>
                                    </div>
                                </div>
                            </Row>
                        </Card>
                        <div className='text-end mt-3'>
                            <Link to={`/community/recomendcontents/textbookpage`}>
                                <Button className='btn btn-secondary'>목록보기</Button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}

export default ProjectRead