import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-js-pagination';
import '../../css/Pagination.css';
import { useLocation, Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProblemPage = () => {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(false);
    const navi = useNavigate();

    const size = 20;
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    const page = search.get("page") ? parseInt(search.get("page")) : 1;

    const getProblems = async () => {
        setLoading(true);
        const res = await axios(`/problem/list.json?page=${page}&size=${size}`);
        const list = res.data.list;
        for (let i = 0; i < list.length; i++) {
            const buffer = list[i].content.data;
            const uintArray = new Uint8Array(buffer);
            const content = new TextDecoder().decode(uintArray);
            list[i].content = content;
        }
        // console.log(list);
        setProblems(list);
        setLoading(false);
    }

    useEffect(() => {
        getProblems();
    }, [page]);

    const onClickLink = (problem_id) => {
        window.location.href="/problem/" + problem_id;
    }

    return (
        <div className='page_wrap'>
            <div className='banner'>
                <img src="../images/banner.png" alt="" />
            </div>

            <div className='page_contents_wrap'>
                <div className='contents_title_box'>
                    <p className='contents_title'>Test Page</p>
                </div>

                <div className='page_contents'>
                    <div className='study_plan_wrap'>
                        <div className='study_plan_wrap_l'>
                            <div className='planbox_wrap'>
                                <div className='study_plan_box'>1</div>
                                <div className='study_plan_box'>2</div>
                                <div className='study_plan_box'>3</div>
                            </div>

                            <div className='Challengesstyle_SearchForm'>
                                <form className='SearchForm'>
                                    <input className='keyword' type='search' autoComplete='off' placeholder='풀고 싶은 문제 제목, 기출문제 검색' value='' />
                                    <div className='SearchFormstyle_Buttons'>
                                        <button className='SearchFormstyle_submit' type='submit' aria-label='검색'>🔍</button>
                                        <button className='SearchFormstyle__Reset-sc-1p5mlk4-4 XNLJR reset' type='reset' aria-label='검색어 초기화'></button>
                                    </div>
                                </form>
                            </div>

                            <div className='DropdownGroupstyle_DropdownGroup'>
                                <Dropdown className='Dropdown'>
                                    <Dropdown.Toggle variant='outline-dark' className='title_l'>
                                        상태
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href='#/action-1'>푼 문제</Dropdown.Item>
                                        <Dropdown.Item href='#/action-2'>안 푼 문제</Dropdown.Item>
                                        <Dropdown.Item href='#/action-3'>다른 사람 풀이 확인 문제</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className='Dropdown'>
                                    <Dropdown.Toggle variant='outline-dark' className='title_l'>
                                        난이도
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href='#/action-0'>Lv.0</Dropdown.Item>
                                        <Dropdown.Item href='#/action-1'>Lv.1</Dropdown.Item>
                                        <Dropdown.Item href='#/action-2'>Lv.2</Dropdown.Item>
                                        <Dropdown.Item href='#/action-3'>Lv.3</Dropdown.Item>
                                        <Dropdown.Item href='#/action-4'>Lv.4</Dropdown.Item>
                                        <Dropdown.Item href='#/action-5'>Lv.5</Dropdown.Item>
                                        <Dropdown.Item href='#/action-6'>Lv.6</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className='Dropdown'>
                                    <Dropdown.Toggle variant='outline-dark' className='title_r'>
                                        언어
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href='#/action-1'>javascript</Dropdown.Item>
                                        <Dropdown.Item href='#/action-2'>python</Dropdown.Item>
                                        <Dropdown.Item href='#/action-3'>java</Dropdown.Item>
                                        <Dropdown.Item href='#/action-4'>C++</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className='Dropdown'>
                                    <Dropdown.Toggle variant='outline-dark' className='title_r'>
                                        등록한 문제
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href='#/action-1'>1</Dropdown.Item>
                                        <Dropdown.Item href='#/action-2'>2</Dropdown.Item>
                                        <Dropdown.Item href='#/action-3'>3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className='test_table_wrap'>
                                <table className='test_table'>
                                    <thead>
                                        <tr>
                                            {/* <th className='status'>상태</th> */}
                                            <th className='title'>제목</th>
                                            <th className='level'>난이도</th>
                                            <th className='finished_count'>완료한 사람</th>
                                            <th className='acceptance_rate'>정답률</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {problems.map(p =>
                                            <tr key={p.problem_id}>
                                                {/* <td></td> */}
                                                <td>
                                                    <NavLink onClick={()=>onClickLink(p.problem_id)}>{p.title}</NavLink>
                                                </td>
                                                <td>{p.grade}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='study_plan_wrap_r'>
                            <div className='study_plan_userdata'>
                                <div className='userdata_loggeding'>
                                    <h2 className='name'>홍길동</h2>
                                    <ul className='data'>
                                        <li>
                                            <div className='label'>순위</div>
                                            <div className='value'>12.345위</div>
                                        </li>
                                        <li>
                                            <div className='label'>점수</div>
                                            <div className='value'>100점</div>
                                        </li>
                                        <li>
                                            <div className='label'>해결한 문제</div>
                                            <div className='value'>12개</div>
                                        </li>
                                    </ul>
                                    <a href="#" className='clickbox'>###</a>
                                </div>
                            </div>

                            <div className='study_plan_recommendCourse'>
                                <h3 className='title'>
                                    <a href="">내 실력 향상을 위한 추천 코스 ▸</a>
                                </h3>
                                <ul className='content'>
                                    <li className='item'>
                                        <div className='thumbnail'>
                                            <div className='card'>d</div>
                                        </div>
                                        <h4 className='title'>실무 자바 개발을 위한 OOP와 핵심 디자인 패턴</h4>
                                        <div className='tags'>
                                            <span>중급</span>
                                            <span>JAVA</span>
                                        </div>
                                    </li>

                                    <li className='item'>
                                        <div className='thumbnail'>
                                            <div className='card'>d</div>
                                        </div>
                                        <h4 className='title'>실무 자바 개발을 위한 OOP와 핵심 디자인 패턴</h4>
                                        <div className='tags'>
                                            <span>중급</span>
                                            <span>JAVA</span>
                                        </div>
                                    </li>

                                    <li className='item'>
                                        <div className='thumbnail'>
                                            <div className='card'>d</div>
                                        </div>
                                        <h4 className='title'>실무 자바 개발을 위한 OOP와 핵심 디자인 패턴</h4>
                                        <div className='tags'>
                                            <span className='level'>중급</span>
                                            <span>JAVA</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className='study_plan_recommendJob'>
                                <h3 className='title'>
                                    <a href="">홍길동님께 추천하는 포지션 ▸</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <Pagination
                    activePage={1}
                    itemsCountPerPage={1}
                    totalItemsCount={10}
                    pageRangeDisplayed={10}
                    prevPageText={'‹'}
                    nextPageText={'›'}
                    onChange={() => { }} // 이벤트 핸들러 추가
                />
            </div>
        </div>
    );
};

export default ProblemPage;
