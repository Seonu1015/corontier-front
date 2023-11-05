import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const ProjectMain = () => {
    const [tags, setTags] = useState([]);

    //const tag_type_id 
    const getTag = async () => {
        const res = await axios.get("/project/list.json?tag_type_id=2");
        setTags(res.data)
    }

    useEffect(() => { getTag(); }, [])

    return (
        <div className='page_wrap'>
            <div className='banner'>
                <img src="../images/banner.png" alt="" />
            </div>

            <div className='page_contents_wrap'>
                <div className='contents_title_box'>
                    <p className='contents_title'> 프로젝트 공유하기 </p>
                    <p className='contents_article'>...</p>
                </div>

                <div className='page_contents'>
                    <div className='box1'> a </div>
                    <div className='box2'> b </div>
                    <div className='box3'> c </div>
                </div>

                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Header>기술 스택</Card.Header>
                            <Card.Body>
                                {tags.map(tag =>
                                    <div>
                                        <input type='checkbox'/> {tag.tag_name}
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Header></Card.Header>
                            <Card.Body></Card.Body>
                            <Card.Footer></Card.Footer>
                        </Card>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default ProjectMain