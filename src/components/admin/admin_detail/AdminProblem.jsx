import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table, NavLink, Dropdown, InputGroup, Form, Button } from 'react-bootstrap';

const AdminProblem = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [grade_id, setGradeId] = useState(0);
  const [problemNumber, setProblemNumber] = useState('');
  const [problemTitle, setProblemTitle] = useState('');
  const [problemType, setProblemType] = useState('');

  const size = 20;

  const getProblems = async () => {
    try {
      setLoading(true);

      let url = `/problem/list.json?page=1&size=${size}`;
      if (grade_id !== 0) {
        url += `&grade_id=${grade_id}`;
      }

      const res = await axios(url);
      setProblems(res.data.list);
    } catch (error) {
      console.error('에러:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProblems();
  }, [grade_id]);

  const handleSelect = (eventKey) => {
    setGradeId(eventKey);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);

      let url = `/problem/list.json?page=1&size=${size}`;
      if (grade_id !== 0) {
        url += `&grade_id=${grade_id}`;
      }

      const res = await axios(url);
      setProblems(res.data.list);
    } catch (error) {
      console.error('에러:', error);
    } finally {
      setLoading(false);
    }
  };

  const getMenutype = (menu) => {
    switch (menu) {
      case '0':
        return 'Lv.0';
      case '1':
        return 'Lv.1';
      case '2':
        return 'Lv.2';
      case '3':
        return 'Lv.3';
      case '4':
        return 'Lv.4';
      case '5':
        return 'Lv.5';
      default:
        return 'Lv.0';
    }
  };

  return (
    <>
      <div className='admin_problem_title'>문제 관리</div>

      <div className='admin_problem_contents_wrap'>
        <div className='admin_problem_contents'>
          <div className='admin_p_searchbox'>
            <Dropdown onSelect={handleSelect} className='admin_Pdropdown'>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                {getMenutype(grade_id)}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">Lv.0</Dropdown.Item>
                <Dropdown.Item eventKey="2">Lv.1</Dropdown.Item>
                <Dropdown.Item eventKey="3">Lv.2</Dropdown.Item>
                <Dropdown.Item eventKey="4">Lv.3</Dropdown.Item>
                <Dropdown.Item eventKey="5">Lv.4</Dropdown.Item>
                <Dropdown.Item eventKey="6">Lv.5</Dropdown.Item>
                <Dropdown.Item eventKey="7">Lv.6</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <InputGroup className="admin_Pinput_width">
              <InputGroup.Text className='admin_inputtext_width'>문제번호</InputGroup.Text>
              <Form.Control onChange={(e) => setProblemNumber(e.target.value)} />
            </InputGroup>

            <InputGroup className="admin_Pinput_width">
              <InputGroup.Text className="admin_inputtext_width">문제제목</InputGroup.Text>
              <Form.Control onChange={(e) => setProblemTitle(e.target.value)} />
            </InputGroup>

            <InputGroup className="admin_Pinput_width">
              <InputGroup.Text className="admin_inputtext_width">문제유형</InputGroup.Text>
              <Form.Control onChange={(e) => setProblemType(e.target.value)} />
            </InputGroup>

            <Button variant='dark' onClick={handleSearch}>검색하기</Button>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <Table hover className='text-center justify-content-center'>
              <thead>
                <tr>
                  <th width="10%">난이도</th>
                  <th width="40%">제목</th>
                  <th width="10%">정답</th>
                  <th width="10%">제출</th>
                  <th width="10%">정답률</th>
                </tr>
              </thead>
              <tbody>
                {problems.map(p =>
                  <tr key={p.problem_id}>
                    <td>{getMenutype(p.grade_id)}</td>
                    <td className='text-center px-3'><NavLink to="">{p.title}</NavLink></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminProblem;
