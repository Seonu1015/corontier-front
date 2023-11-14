import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { Button, Spinner, Badge, Card } from 'react-bootstrap'
import { FaUndoAlt } from 'react-icons/fa';
import { FaRegEye } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
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
    const [clicked, setClicked] = useState(false);

    const getTags = async () => { //왼쪽메뉴 프로그래밍언어
        setLoading(true);
        const res = await axios.get("/project/taglist.json");
        setTags(res.data);
        setLoading(false);
    }

    const getProject = async () => { //오른쪽 프로젝트게시판 글 가져오는거
        setLoading(true);
        const url = `/project/prcedures?page=${page}&size=${size}`;
        const res = await axios.get(url);
        setTotal(res.data.total);
        let listAll = res.data.listAll;

        console.log(listAll[0].tagGroup);
        listAll.map(l=> l.tagGroup)
        
        setProjects(listAll);
        setLoading(false);
    }

    const onClickTag = async (tag_name) => { //왼쪽메뉴 선택했을 때 선택결과만 나오는
        setLoading(true);
        const url = `/project/searchbytag.json?tag_name=${tag_name}&page=1&size=9`
        const res = await axios.get(url);
        navi(`${path}?query=${tag_name}&page=1&size=${size}`)
        let select = res.data;
        select = select.map(s => s && { ...select, active: true });
        setProjects(select);
        setLoading(false);
    }

    const onReset = () => { //왼쪽메뉴 검색 초기화
        getProject();
        navi('/project/main');
    }

    const onClickBtnActive = () => {
        
    }

    const onChangePage = (page) => {
        navi(`${path}?query=${query}&page=${page}&size=${size}`);
    }

    useEffect(() => {
        getTags();
        getProject();
    }, [page])


    if (loading) return <div><Spinner /></div>
    return (

        <div className='page_wrap'>
            <div className='banner'>
                <img src="../images/banner.png" alt="" />
            </div>
            <div className='page_contents_wrap_prj'>
                <div className='page_contents'>
                    <div className='study_plan_wrap justify-content-center'>
                        <div className='proj_sidebar_wrap'>
                            <div className='proj_sidebar_box'>
                                <ol className='proj_sidebar_ol'>
                                    <li className='proj_management'>
                                        <ol>
                                            <Link to={`/project/insert`}><Button> 나의 프로젝트 <br /> 자랑하기 🎉 </Button></Link>
                                            <Link to={'/community/applystudy&project/applyprojectpage'}><Button> 프로젝트 모집 <br /> 보러가기 👀 </Button></Link>
                                        </ol>
                                    </li>

                                    <li className='proj_management'>
                                        <h2 className='proj_title'>
                                            기술 스택
                                            <Badge className='ms-5' onClick={onReset} bg="secondary" style={{ cursor: "pointer" }}>초기화 <FaUndoAlt /></Badge>
                                        </h2>
                                        <div className='proj_title_wrap'>
                                            {tags.map(tag =>
                                                <p key={tag.tag_id}>
                                                    <Button variant='outline-success btn-sm' className='btn_prj' 
                                                        onClick={() => onClickTag(tag.tag_name)}>{tag.tag_name}</Button>
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>


                        <div className='proj_contents_wrap ms-4'>

                            <h5 className='mb-3 ms-3'>
                                <span style={{ color: "red" }}>✔</span> 총 {total}건
                            </h5>

                            <div className='planbox_wrap_prj'>
                                {projects.map(project =>
                                    <NavLink to={`/project/read/${project.post_id}`} style={{ color: "black" }} key={project.post_id}>
                                        <Card className='study_plan_box_prj h-100' >
                                            <Card.Header>
                                                <h4>{project.title}</h4>
                                            </Card.Header>
                                            <Card.Body>
                                                <p className='text-center'>
                                                    <img src={project.atch_path || "http://via.placeholder.com/500x200"} className='project_thumbnail' />
                                                </p>
                                                <p>{project.intro}</p>
                                                <div>{project.tagGroup}</div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className='text-end'>
                                                    <span className='me-2'> <FaRegEye /> {project.view_cnt}</span>
                                                    <span className='me-2'> <FaRegComment /> </span>
                                                    <span> <FaRegHeart /> </span>
                                                </div>
                                            </Card.Footer>
                                        </Card>
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