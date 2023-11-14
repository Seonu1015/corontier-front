import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { useParams, Link, NavLink } from 'react-router-dom';
import { Button, Spinner, InputGroup, Form } from 'react-bootstrap'
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

    useEffect(() => { getTag(); getProject(); }, [page])

  if (loading) return <div><Spinner /></div>
  return (

    <div className='page_wrap'>
      <div className='banner'>
        <img src="../images/banner.png" alt="" />
      </div>
      <div className='page_contents_wrap_prj'>
        <div className='text-center my-5'>
          <div className='Challengesstyle_SearchForm'>
            <form className='SearchForm'>
              <InputGroup className='clallenge_inputG'>
                <Form.Control className='keyword' type='search' autoComplete='off' placeholder='검색어를 입력하세용' value=''  />
                <Button className='SearchFormstyle_submit' type='submit' aria-label='검색'>검색</Button>
              </InputGroup>
            </form>
          </div>
        </div>

        <div className='page_contents'>
          <div className='study_plan_wrap justify-content-center'>
            <div className='proj_sidebar_wrap'>
              <div className='proj_sidebar_box'>
                <ol className='proj_sidebar_ol'>
                  <li className='proj_management'>
                    <ol>
                      <Link to={`/project/insert`}> 나의 프로젝트 자랑하기 </Link>
                      <Link> 프로젝트 모집 보러가기 </Link>
                    </ol>
                  </li>

                <li className='proj_management'>
                  <h3 className='proj_title'> 기술 스택 </h3>
                  <div className='proj_title_wrap'>
                    {tags.map(tag =>
                      <p key={tag.tag_id}>
                        <input type='checkbox' /> {tag.tag_name}
                      </p>
                    )}
                  </div>
                </li>   

                <li className='proj_management'>
                  <h3 className='proj_title'> 개발 인원 </h3>
                  <div className='proj_title_wrap'>
                    <p><input type='checkbox' /> 개인</p>
                    <p><input type='checkbox' /> 팀</p>
                  </div>
                </li>                               
                </ol>
              </div>
            </div>


            <div className='proj_contents_wrap ms-4'>
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