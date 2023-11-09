import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table, NavLink } from 'react-bootstrap';

const AdminProblem = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(false);

  const size = 20;

  const getProblems = async () => {
    setLoading(true);
    const res = await axios(`/problem/list.json?page=1&size=${size}`);
    const list = res.data.list;
    setProblems(list);
    setLoading(false);
  }

  useEffect(() => {
    getProblems();
  }, []);

  return (
    <>
      <div className='admin_management_title'>문제 관리</div>

      <div className='admin_management_contents_wrap'>
        <div className='admin_management_contents'>
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
                  <td>{p.grade}</td>
                  <td className='text-start px-3'><NavLink to="">{p.title}</NavLink></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default AdminProblem