import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap'

const TextbookPage = () => {
    const [javavideos, setJavavideos] = useState([]);

    const getjavavideos = async () => {
        const url = `/crawler/javalist.json`;
        const res = await axios(url);
        console.log(res.data);
        setJavavideos(res.data.list);

    }
    useEffect(() => {
        getjavavideos();
    }, []);

    
    return (
        <>
            <div className='page_contents'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div>
                <h2 className="text-center"> 교재 & 강의 추천</h2>
                <div className='noticepage_tablegroup'>
                    <div style={{ width: "80%" }} className='mb-5' >
                        <hr />
                        <div className='mb-5'>
                            <Link to={`/community/recomendcontents/textbookpage`}>교재</Link>
                            <Link to={`/community/recomendcontents/lecturepage`}>강의</Link>
                        </div>
                        <Row>
                            {javavideos
                                .filter(javavideo => javavideo.vod_id <= 8)
                                .map(javavideo => (
                                    <div className="col-md-4" key={javavideo.vod_id}>
                                        <iframe
                                            width="100%"
                                            height="250"
                                            src={javavideo.vod_link}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                        <div className='mt-3'>
                                            <Link to={`/community/recomendcontents/lectureread/${javavideo.vod_id}`}>
                                                <h5 style={{color:'black'}}>{javavideo.vod_title}</h5>
                                                <p style={{color:'black'}}>{javavideo.vod_contents}</p>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }

                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextbookPage