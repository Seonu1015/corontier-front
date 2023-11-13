import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { useParams, NavLink } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap'
import Pagination from 'react-js-pagination';
import '../../css/Pagination.css';

const ProjectMain = () => {
    const [loading, setLoading] = useState(false);
    const [tags, setTags] = useState([]);
    const [projects, setProjects] = useState([]);
    const [total, setTotal] = useState(0);
    const size = 9;
    //const [page, setPage] = useState(1);
    const navi = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const search = new URLSearchParams(location.search);
    const page = search.get("page") ? parseInt(search.get("page")) : 1;
    const [query, setQuery] = useState(search.get("query") ? search.get("query") : "");

    const getTags = async () => { //왼쪽메뉴 프로그래밍언어
        const res = await axios.get("/project/taglist.json");
        let skills = res.data;
        skills = skills.map(skill => skill && { ...skill, checked: false })
        setTags(skills);
    }

    const getProject = async () => { //오른쪽 프로젝트게시판 글 가져오는거
        const url = `/project/prcedures?page=${page}&size=${size}`;
        const res = await axios.get(url);
        setTotal(res.data.total);
        let listAll = res.data.listAll;
        setProjects(listAll);
    }

    const onClickTag = async (tag_id) => { //왼쪽메뉴 선택했을 때 선택결과만 나오는
        const url = `/project/tagsearch.json?tag_id=${tag_id}`;
        const res = await axios.get(url);
        console.log(res);
        navi(`${path}?page=1&size=${size}`)
        
    }

    const onReset = () => {
        getProject();
    }

    const onChangePage = (page) => {
        navi(`${path}?query=${query}&page=${page}&size=${size}`);
    }

    useEffect(() => { getTags(); getProject(); }, [page])

    if (loading) return <div><Spinner /></div>
    return (

        <div className='page_wrap'>
            <div className='banner'>
                <img src="../images/banner.png" alt="" />
            </div>
            <div className='page_contents_wrap_prj'>
                <div className='text-center my-5'>

                    <NavLink to={`/project/insert`}>
                        <Button className='p-3 me-3' variant="outline-primary"> 나의 프로젝트 자랑하기 🎉 </Button>
                    </NavLink>

                    <NavLink>
                        <Button className='p-3' variant="outline-success"> 프로젝트 모집 보러가기 👀 </Button>
                    </NavLink>
                </div>

                <div className='page_contents'>
                    <div className='study_plan_wrap justify-content-center'>

                        <div className='study_plan_wrap_r_prj'>
                            <div className='study_plan_userdata'>
                                <div className='userdata_loggeding'>

                                    <div className='Challengesstyle_SearchForm'>
                                        <p className='name'>➰ 필터 초기화</p>
                                        <form className='SearchForm'>
                                            <input className='keyword' type='search' autoComplete='off' placeholder='검색어를 입력하세용' value='' />
                                            <div className='SearchFormstyle_Buttons'>
                                                <button className='SearchFormstyle_submit' type='submit' aria-label='검색'>🔍</button>
                                                <button className='SearchFormstyle__Reset-sc-1p5mlk4-4 XNLJR reset' type='reset' aria-label='검색어 초기화'></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <Button onClick={onReset}>검색 초기화!</Button>

                            <div className='study_plan_recommendCourse'>
                                <h3 className='title'> 기술 스택 </h3>
                                <div>
                                    {tags.map(tag =>
                                        <div key={tag.tag_id}>
                                            <input type='checkbox' onClick={() => onClickTag(tag.tag_id)} /> {tag.tag_name}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className='study_plan_recommendCourse'>
                                <h3 className='title'> 개발 인원 </h3>
                                <div>
                                    <input type='checkbox' /> 개인
                                    <br />
                                    <input type='checkbox' /> 팀
                                </div>
                            </div>
                        </div>

                        <div className='study_plan_wrap_l_prj ms-4'>
                            <h5 className='mb-3'><span style={{ color: "red" }}>✔</span> 총 {total}건 </h5>
                            <div className='planbox_wrap_prj'>
                                {projects.map(project =>
                                    <NavLink to={`/project/read/${project.post_id}`} style={{ color: "black" }}>
                                        <div className='study_plan_box_prj' key={project.post_id}>
                                            <div>
                                                <h3>{project.title}</h3>
                                                <p className='text-center'>
                                                    <img src={project.atch_path || "http://via.placeholder.com/500x200"} className='project_thumbnail' />
                                                </p>
                                                <p>{project.intro}</p>
                                                <div className='text-end'>
                                                    <span> 👁‍🗨 {project.view_cnt}</span>
                                                    <span> 🗨 </span>
                                                    <span> ❤ </span>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                )}
                            </div>

                        </div>


                    </div>
                </div>


            </div>
            <div className='page_contents_wrap_prj_read'>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={size}
                    totalItemsCount={total}
                    pageRangeDisplayed={9}
                    prevPageText={'‹'}
                    nextPageText={'›'}
                    onChange={onChangePage}
                />
            </div>
        </div>
    )
}

export default ProjectMain