import React, { useState, useContext, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { BoxContext } from '../BoxContext';
import EditorComp from '../common/EditorComp';


const ProblemInsert = () => {
    const { setBox } = useContext(BoxContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]);
    const [grades, setGrades] = useState([]);

    const getTags = async () => {
        setLoading(true);
        const res = await axios('/problem/tag/list.json');
        setTags(res.data);
        setLoading(false);
    }

    const getGrades = async () => {
        setLoading(true);
        const res = await axios('/problem/grade/list.json');
        setGrades(res.data);
        setLoading(false);
    }

    const onEditorChange = (data) => {
        setContent(data);
    };

    const onSubmit = async (data) => {
        setBox({
            show: true,
            message: "문제를 등록하시겠습니까?",
            action: async () => {
                const res = await axios.post("/insert", data);
                console.log(res);
                const problem_id = res.data.last;

                const selTags = data.tags;
                const tagRequests = selTags.map(tag_id => axios.post("/insert/tags", { problem_id: problem_id, tag_ids: [tag_id] }));
                await Promise.all(tagRequests);

                setLoading(false);
                window.location.href = "/problem/list";
            }
        });
    };

    useEffect(() => {
        getTags();
        getGrades();
    }, []);

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>문제 등록</h1>
            <Row className='justify-content-center'>
                <Col md={8} className='mx-3'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" {...register('title', { required: true })} />
                            {errors.title && <span>제목을 입력해주세요.</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="difficulty">
                            <Form.Label>Difficulty</Form.Label>
                            <div>
                                {grades.map(g =>
                                    <span key={g.grade_id} className='mx-2'>
                                        <input className='align-middle me-2' type="radio" value={g.grade_id} {...register('difficulty', { required: true })} />
                                        <label>{g.grade}</label>
                                    </span>
                                )}
                                {errors.difficulty && <span>난이도를 선택해주세요.</span>}
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tags">
                            <Form.Label>Tag</Form.Label>
                            <div>
                                {tags.map(t =>
                                    <span key={t.tag_id} className='mx-2'>
                                        <input className='align-middle me-2' type="checkbox" value={t.tag_id} {...register('tags')} />
                                        <label>{t.tag_name}</label>
                                    </span>
                                )}
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <EditorComp onChange={onEditorChange} />
                        </Form.Group>
                        <Row>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="input">
                                    <Form.Label>Input</Form.Label>
                                    <Form.Control as="textarea" {...register('input')} />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="output">
                                    <Form.Label>Output</Form.Label>
                                    <Form.Control as="textarea" {...register('output')} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className='text-end mt-3'>
                            <Button className='w-25' type='submit'>등록</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ProblemInsert;
