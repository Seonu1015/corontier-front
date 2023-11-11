import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { vscodeDark } from '@uiw/codemirror-themes-all';
import SolutionComment from './SolutionComment';

const SolutionRead = () => {
    const location = useLocation();
    const { solution } = location.state;

    const languageComponents = {
        javascript: (
            <CodeMirror
                value={solution.content}
                height="500px"
                extensions={[javascript({ jsx: true })]}
                theme={vscodeDark}
                readOnly
            />
        ),
        python: (
            <CodeMirror
                value={solution.content}
                height="500px"
                extensions={[python()]}
                theme={vscodeDark}
                readOnly
            />
        ),
        java: (
            <CodeMirror
                value={solution.content}
                height="500px"
                extensions={[java()]}
                theme={vscodeDark}
                readOnly
            />
        ),
        cpp: (
            <CodeMirror
                value={solution.content}
                height="500px"
                extensions={[cpp()]}
                theme={vscodeDark}
                readOnly
            />
        ),
    };



    return (
        <Container>
            <Row className='m-5'>
                <Col>
                    <div>
                        <h1>{solution.p_title}</h1>
                        <div className="text-muted fst-italic mb-2">
                            작성자 : {solution.nickname}, 작성일 : {solution.s_fmt_created} {solution.s_fmt_created !== solution.s_fmt_updated && `(수정일 : ${solution.s_fmt_updated})`}
                        </div>
                        <hr />
                        <div>
                            {languageComponents[solution.sel_language]}
                        </div>
                    </div>
                    <div className='my-5'>
                        <SolutionComment />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SolutionRead;