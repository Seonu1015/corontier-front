
import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { vscodeDark } from '@uiw/codemirror-themes-all';

import { Row, Col, Container, Button, Spinner } from 'react-bootstrap';
import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai';
import { RiBookmark3Line, RiBookmark3Fill } from 'react-icons/ri';
import { FaArrowLeft } from "react-icons/fa";

import Question from '../Question';
import { BoxContext } from '../../BoxContext';

const SolutionPage = () => {
    const { setBox } = useContext(BoxContext);
    const [prob_id, setProb_id] = useState(0);
    const [loading, setLoading] = useState(false);
    const [problem, setProblem] = useState({
        problem_id: '',
        title: '',
        content: '',
        input: '',
        output: ''
    });
    const [bookmark, setBookmark] = useState(0);
    const [executedValue, setExecutedValue] = useState("");
    const [submitcnt, setSubmitcnt] = useState(0);

    const { title, content, input, output } = problem;
    const [language, setLanguage] = useState("python");
    const [result, setResult] = useState('........');

    const [value, setValue] = useState("");
    const { problem_id } = useParams();
    const [complete, setComplete] = useState('0');

    const [executed, setExecuted] = useState(false);

    const navi = useNavigate();

    const onChange = useCallback((val, viewUpdate) => {
        // console.log('val:', val);
        setValue(val);
    }, []);

    const getProblem = async () => {
        setLoading(true);
        const res = await axios('/problem/' + problem_id);
        // console.log(res.data);
        setProblem(res.data);
        setValue(res.data.input);
        setLoading(false);
    }

    const getBookmark = async () => {
        setLoading(true);
        const res = await axios(`/problem/bookmarkox/list.json?user_id=${sessionStorage.getItem("user_id")}&problem_id=${problem_id}`);
        // console.log(res.data.bookmark);
        setBookmark(res.data.bookmark);
        // console.log(bookmark);
        setLoading(false);
    }

    const getSubmitcnt = async () => {
        setLoading(true);
        const res = await axios(`/problem/submit/list.json?user_id=${sessionStorage.getItem("user_id")}&problem_id=${problem_id}`);
        // console.log(res.data.submitcnt);
        setSubmitcnt(res.data.submitcnt);
        setLoading(false);
    }

    const languageComponents = {
        javascript: (
            <CodeMirror
                value={value}
                height="500px"
                extensions={[javascript({ jsx: true })]}
                theme={vscodeDark}
                onChange={onChange}
            />
        ),
        python: (
            <CodeMirror
                value={value}
                height="500px"
                extensions={[python()]}
                theme={vscodeDark}
                onChange={onChange}
            />
        ),
        java: (
            <CodeMirror
                value={value}
                height="500px"
                extensions={[java()]}
                theme={vscodeDark}
                onChange={onChange}
            />
        ),
        cpp: (
            <CodeMirror
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
                setExecutedValue('결과값 : ' + executionResult.toString());
                setExecuted(true);
                setComplete('1');
            } else {
                setResult('테스트 결과 : 실패');
                setExecutedValue('결과값 : ' + executionResult.toString());
                setExecuted(true);
                setComplete('0');
            }
        } catch (error) {
            setResult('코드 실행 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    }

    const onClickReset = () => {
        setBox({
            show: true,
            message: "정말로 초기화하시겠습니까?",
            action: () => {
                getProblem();
            }
        });
    }

    useEffect(() => {
        getBookmark();
        getProblem();
        getSubmitcnt();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (executed) {
            await axios.post("/problem/insert/solution", { problem_id, content: value, complete, language, user_id: sessionStorage.getItem("user_id") });
            setBox({
                show: true,
                message: "풀이가 등록되었습니다.\n풀이페이지로 이동하시겠습니까?",
                action: () => {
                    navi(`/solution/${sessionStorage.getItem("user_id")}`);
                }
            });
        } else {
            setBox({
                show: true,
                message: "코드를 실행한 후에 제출해주세요!"
            });
        }
    }

    const onClickQuestion = (problem_id) => {
        setProb_id(problem_id);
    }

    const onClickBookmark = async (problem_id) => {
        await axios.post('/problem/bookmark/insert', { user_id: sessionStorage.getItem("user_id"), problem_id });
        getBookmark();
        getProblem();
    }

    const onClickFillBookmark = async (problem_id) => {
        await axios.post('/problem/bookmark/delete', { user_id: sessionStorage.getItem("user_id"), problem_id });
        getBookmark();
        getProblem();
    }

    const onWarning = () => {
        setBox({
            show:true,
            message: "문제를 풀어야만 다른 사람의 풀이를 보실 수 있습니다."
        });
    }

    const onOthers = () => {
        navi(`/solution/other/${problem_id}`);
    }

    return (
        <div className='solution_wrap'>
            {prob_id === 0 && (
                <div className='my-5'>
                    <Container>
                        <div className='px-4 border-bottom border-dark-subtle' style={{ backgroundColor: "#1e1e1e", color: "white", fontSize: "20px" }}>
                            <Row>
                                <Col><Link to="/problem/main" style={{color:"grey"}}><FaArrowLeft className='pb-1' /> Problem Main</Link></Col>
                            </Row>
                        </div>
                        <div className='py-2 px-4 border-bottom border-dark-subtle' style={{ backgroundColor: "#1e1e1e", color: "white", fontSize: "30px" }}>
                            <Row>
                                <Col>
                                    {title}
                                </Col>
                                <Col className='text-end'>
                                    {sessionStorage.getItem("user_id") &&
                                        <div>
                                            {bookmark === 0 ?
                                                <RiBookmark3Line onClick={() => onClickBookmark(problem_id)} style={{ cursor: "pointer" }} />
                                                :
                                                <RiBookmark3Fill onClick={() => onClickFillBookmark(problem_id)} style={{ color: "#DBA901", cursor: "pointer" }} />
                                            }
                                        </div>
                                    }
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col className='border-end border-dark-subtle scrollbar' style={{ backgroundColor: "#1e1e1e", color: "white", marginLeft: "12px", overflow: "auto", height: "751px" }}>
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
                            <Col xs={6} sm={6} md={6}>
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
                                                    {executedValue}<br />
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
                                <Button className='me-2 px-4' variant="secondary" onClick={() => onClickQuestion(problem_id)}>Discussion</Button>
                            </div>
                            <div className='sol_btn'>
                                {submitcnt === 0 ?
                                    <Button className='me-2 px-4' variant="secondary" onClick={onWarning}>다른 사람의 풀이 <AiOutlineLock /></Button>
                                    :
                                    <Button className='me-2 px-4' variant="secondary" onClick={onOthers} problem={problem}>다른 사람의 풀이 <AiOutlineUnlock /></Button>
                                }
                                <Button className='me-2 px-4' variant="secondary" onClick={onClickReset}>초기화</Button>
                                <Button className='me-2 px-4' variant="secondary" onClick={onClickExecute}>실행</Button>
                                <Button className='px-4' type='submit' onClick={(e) => onSubmit(e)}>제출</Button>
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
        </div>
    )
}


export default SolutionPage