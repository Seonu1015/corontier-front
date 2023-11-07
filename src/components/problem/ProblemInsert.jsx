import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Dropdown, Button } from 'react-bootstrap'
import { BoxContext } from '../BoxContext'

import EditorComp from '../common/EditorComp'
import { async } from 'q'
import axios from 'axios'

const ProblemInsert = () => {
    const { setBox } = useContext(BoxContext);
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);

    const getTags = async () => {
        setLoading(true);
        const res = await axios('/problem/tag/list.json');
        console.log(res.data);
        setTags(res.data);
        setLoading(false);
    }

    const onEditorChange = (data) => {
        setContent(data);
    };

    const onSubmit = () => {
        setBox({
            show: true,
            message: "등록하시겠습니까?",
            action: async () => {

            }
        });
    }

    useEffect(() => {
        getTags();
    }, []);

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>문제 등록</h1>
            <Row className='justify-content-center'>
                <Col md={8} className='mx-3'>
                    <Row>
                        <Col md={9}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Difficulty</Form.Label>
                                <Dropdown className='Dropdown'>
                                    <Dropdown.Toggle variant='outline-secondary' className='title_l'>
                                        난이도
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        
                                        <Dropdown.Item>Easy</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form>
                        <div key={"inline-checkbox"} className="mt-2 mb-3">
                            {tags.map(tag =>
                                <Form.Check
                                    inline
                                    label={tag.tag_name}
                                    name="group1"
                                    type={"checkbox"}
                                    id={"inline-checkbox-1"}
                                />
                            )}
                        </div>
                    </Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <EditorComp onChange={onEditorChange} />
                    </Form.Group>
                    <Row>
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Input</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Output</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className='text-end mt-3'>
                        <Button className='w-25' type='submit' onClick={onSubmit}>등록</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProblemInsert