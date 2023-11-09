import React, { useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { vscodeDark } from '@uiw/codemirror-themes-all';

import { Row, Col, Container, Button, Spinner } from 'react-bootstrap';
import Question from './Question';

const SolutionPage = () => {

    const [prob_id, setProb_id] = useState(0);
    const [loading, setLoading] = useState(false);
    const [problem, setProblem] = useState({
        problem_id: '',
        title: '',
        content: '',
        input: '',
        output: ''
    });
    const { title, content, input, output } = problem;
    const [language, setLanguage] = useState("python");
    const [result, setResult] = useState('........');

    const [value, setValue] = useState("");
    const { problem_id } = useParams();
    // console.log(problem_id);

    const onChange = useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);

    const getProblem = async () => {
        setLoading(true);
        const res = await axios('/problem/' + problem_id, { problem_id });
        // console.log(res.data);
        const data = res.data;
        // console.log(data);
        setProblem(data);
        setValue(data.input);
        setLoading(false);
    }

    const languageComponents = {
        javascript: (
            <CodeMirror
                // value={"function solution(a, b) \{\n    var answer = 0\;\n    return answer\;\n\}\n\nsolution(a, b)"}
                value={value}
                height="500px"
                extensions={[javascript({ jsx: true })]}
                theme={vscodeDark}
                onChange={onChange}
            />
        ),
        python: (
            <CodeMirror
                // value={"def solution(a, b):\n    answer = \'\'\n    return answer\n\nprint(answer)"}
                value={value}
                height="500px"
                extensions={[python()]}
                theme={vscodeDark}
                onChange={onChange}
            />
        ),
        java: (
            <CodeMirror
                // value={"class Solution \{\n    public int solution(int a, int b) \{\n        int answer = 0\;\n        return answer\;\n    \}\n\}\n\nsolution(int a, int b)"}
                value={value}
                height="500px"
                extensions={[java()]}
                theme={vscodeDark}
                onChange={onChange}
            />
        ),
        cpp: (
            <CodeMirror
                // value={"using namespace std\;\n\nint solution(int a, int b) \{\n    int answer = 0\;\n    return answer\;\n}"}
                value={value}
                height="500px"
                extensions={[cpp()]}
                theme={vscodeDark}
                onChange={onChange}
            />
        ),
    };

    const onClickExecute = async () => {
        setLoading(true);
        try {
            const res = await axios.post('/problem/execute', { code: value, language });
            const { data: executionResult } = res;

            if (executionResult.toString() === output) {
                setResult('테스트 결과 : 성공');
            } else {
                setResult('테스트 결과 : 실패');
            }
        } catch (error) {
            setResult('코드 실행 중 오류가 발생했습니다.');
        }
        setLoading(false);
    }

    useEffect(() => {
        getProblem();
    }, []);

    const onClickQuestion = (problem_id) => {
        setProb_id(problem_id);
    }

    return (
        <>
            {prob_id === 0 && (
                <div className='m-5'>
                    <Container>
                        <div className='py-2 px-4 border-bottom border-dark-subtle' style={{ backgroundColor: "#1e1e1e", color: "white", fontSize: "30px" }}>
                            {title}
                        </div>
                        <Row>
                            <Col className='border-end border-dark-subtle' style={{ backgroundColor: "#1e1e1e", color: "white", marginLeft: "12px", overflow: "auto", height: "750px" }}>
                                <div className='my-3 mx-3'>
                                    <p>Description</p><br />
                                    <p style={{ fontSize: "16px" }} dangerouslySetInnerHTML={{ __html: content }} />
                                    <br />
                                    <p className='pt-3 border-top border-dark-subtle'>Input</p><br />
                                    <pre style={{ fontSize: "16px" }} dangerouslySetInnerHTML={{ __html: input }} />
                                    <br />
                                    <p className='pt-3 border-top border-dark-subtle'>Output</p>
                                    <pre style={{ fontSize: "16px" }} dangerouslySetInnerHTML={{ __html: output }} />
                                    <br />
                                </div>
                            </Col>
                            <Col>
                                <Row>
                                    <Col className='ps-0'>
                                        <div className='pt-2 px-3 border-dark-subtle text-end' style={{ backgroundColor: "#1e1e1e", color: "white" }}>
                                            <Row>
                                                <Col></Col>
                                                <Col md={3} className='pb-1'>
                                                    <select className="form-select form-select-sm" aria-label="Small select example"
                                                        value={language}
                                                        onChange={(e) => setLanguage(e.target.value)}
                                                    >
                                                        <option value="cpp">C++</option>
                                                        <option value="java">Java</option>
                                                        <option value="javascript">Javascript</option>
                                                        <option value="python">Python</option>
                                                    </select>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div>
                                            {languageComponents[language]}
                                        </div>
                                        <div className='p-3 border-top border-dark-subtle' style={{ backgroundColor: "#1e1e1e", color: "white" }}>
                                            실행결과
                                        </div>
                                        <div className='p-3 border-top border-dark-subtle' style={{ backgroundColor: "#1e1e1e", color: "white", height: "150px" }}>
                                            {loading ? (
                                                <div className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
                                                    <Spinner animation='border' variant='light' />
                                                </div>
                                            ) : (
                                                <div style={{ height: '100%', overflow: 'auto' }}>
                                                    {result}
                                                </div>
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className='sol_btn_wrap' >
                            <div className='sol_btn'>
                                <Button className='me-2 px-4' variant="secondary" onClick={() => onClickQuestion(problem_id)}>질문하기</Button>
                                <Button className='px-4'>테스트 만들기</Button>
                            </div>
                            <div className='sol_btn'>
                                <Button className='me-2 px-4' variant="secondary" onClick={onClickExecute}>실행</Button>
                                <Button className='px-4' type='submit'>제출</Button>
                            </div>
                        </div>
                    </Container>
                </div>
            )}
            {prob_id > 0 && (
                <>
                    <Question prob_id={prob_id} />
                </>
            )}
        </>
    )
}


export default SolutionPage