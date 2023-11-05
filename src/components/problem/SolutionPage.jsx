import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { vscodeDark } from '@uiw/codemirror-themes-all';


import { Row, Col, Container, Button } from 'react-bootstrap';

const SolutionPage = () => {
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

    const [value, setValue] = useState("");
    const { problem_id } = useParams();
    // console.log(problem_id);

    const onChange = useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);

    const languageComponents = {
        javascript: (
            <CodeMirror
                value={value}
                height="300px"
                extensions={[javascript({ jsx: true })]}
                theme={vscodeDark}
                onChange={onChange}
            />
        ),
        python: (
            <CodeMirror
                value={value}
                height="300px"
                extensions={[python()]}
                theme={vscodeDark}
                onChange={onChange}
            />
        ),
        java: (
            <CodeMirror
                value={value}
                height="300px"
                extensions={[java()]}
                theme={vscodeDark}
                onChange={onChange}
            />
        ),
        cpp: (
            <CodeMirror
                value={value}
                height="300px"
                extensions={[cpp()]}
                theme={vscodeDark}
                onChange={onChange}
            />
        ),
    };

    const getProblem = async () => {
        setLoading(true);
        const res = await axios('/problem/' + problem_id, { problem_id });
        // console.log(res.data);
        const data = res.data;

        const fieldsToDecode = ['content', 'input', 'output'];
        for (let field of fieldsToDecode) {
            const buffer = data[field].data;
            const uintArray = new Uint8Array(buffer);
            const decodedContent = new TextDecoder().decode(uintArray);
            data[field] = decodedContent;
        }
        console.log(data);
        setProblem(data);
        setLoading(false);
    }

    const onClickExecute = async () => {
        setLoading(true);
        try {
            const res = await axios.post('/problem/execute', { code: value });
            const { data: executionResult } = res;

            if (executionResult === output) {
                document.getElementById('result').innerText = '테스트 결과 : 성공';
            } else {
                document.getElementById('result').innerText = '테스트 결과 : 실패';
            }
        } catch (error) {
            document.getElementById('result').innerText = '코드 실행 중 오류가 발생했습니다.';
        }
        setLoading(false);
    }

    useEffect(() => {
        getProblem();
    }, []);

    return (
        <>
            <div className='m-5'>
                <Container>
                    <div className='py-2 px-4 border-bottom border-dark-subtle' style={{ backgroundColor: "#1e1e1e", color: "white", fontSize: "30px" }}>
                        {title}
                    </div>
                    <Row>
                        <Col className='border-end border-dark-subtle' style={{ backgroundColor: "#1e1e1e", color: "white", marginLeft: "12px" }}>
                            <div className='my-3 mx-3'>
                                <p>Description</p><br />
                                <p dangerouslySetInnerHTML={{ __html: content }} />
                                <br />
                                <p className='pt-3 border-top border-dark-subtle'>Input</p><br />
                                <p dangerouslySetInnerHTML={{ __html: input }} />
                                <br />
                                <p className='pt-3 border-top border-dark-subtle'>Output</p><br />
                                <p>{output}</p>
                            </div>
                        </Col>
                        <Col>
                            <Row>
                                <Col className='ps-0'>
                                    <div className='pt-2 px-3 border-dark-subtle text-end' style={{ backgroundColor: "#1e1e1e", color: "white" }}>
                                        <Row>
                                            <Col></Col>
                                            <Col md={2} className='pb-1'>
                                                <select class="form-select form-select-sm" aria-label="Small select example"
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
                                    <div id="result" className='p-3 border-top border-dark-subtle' style={{ backgroundColor: "#1e1e1e", color: "white", height: "300px" }}>
                                        ........
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className='pt-2 pb-3 px-4 border-top border-dark-subtle text-end justify-content-center align-content-middle' style={{ backgroundColor: "#1e1e1e", color: "white", fontSize: "30px" }}>
                        <Button className='me-2 px-4' variant="secondary" onClick={onClickExecute}>실행</Button>
                        <Button className='px-4' type='submit'>제출</Button>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default SolutionPage