import React, { useState, useContext, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { BoxContext } from '../BoxContext'
import EditorComp from '../common/EditorComp'
import axios from 'axios'

const ProblemInsert = () => {
    const { setBox } = useContext(BoxContext);
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);
    const [grades, setGrades] = useState([]);
    const [problem, setProblem] = useState({
        problem_id: "",
        title: "",
        content: "",
        input: "",
        output: "",
        grade_id: "",
    });

    const getTags = async () => {
        setLoading(true);
        const res = await axios('/problem/tag/list.json');
        // console.log(res.data);
        setTags(res.data);
        setLoading(false);
    }

    const getGrades = async () => {
        setLoading(true);
        const res = await axios('/problem/grade/list.json');
        // console.log(res.data);
        setGrades(res.data);
        setLoading(false);
    }

    const onEditorChange = (data) => {
        setContent(data);
    };

    const onSubmit = () => {
        setBox({
            show: true,
            message: "문제를 등록하시겠습니까?",
            action: async () => {
                const data = 
            }
        });
    }

    useEffect(() => {
        getTags();
        getGrades();
    }, []);

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>문제 등록</h1>
            <Row className='justify-content-center'>
                <Col md={8} className='mx-3'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Difficulty</Form.Label>
                        <div key={"inline-radio"} className="mt-2 mb-3">
                            {grades.map(g =>
                                <span key={g.grade_id}>
                                    <Form.Check
                                        inline
                                        value={g.grade_id}
                                        label={g.grade}
                                        name="group1"
                                        type={"radio"}
                                        id={"inline-radio-1"}
                                    />
                                </span>
                            )}
                        </div>
                    </Form.Group>
                    <Form>
                        <Form.Label>Tag</Form.Label>
                        <div key={"inline-checkbox"} className="mt-2 mb-3">
                            {tags.map(t =>
                                <span key={t.tag_id}>
                                    <Form.Check
                                        inline
                                        value={t.tag_id}
                                        label={t.tag_name}
                                        name="group1"
                                        type={"checkbox"}
                                        id={"inline-checkbox-1"}
                                    />
                                </span>
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