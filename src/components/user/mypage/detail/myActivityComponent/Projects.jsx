import React,{ useEffect,useState} from 'react';
import { Table,Button} from 'react-bootstrap';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination'

const Projects = () => {
  const [projects,setProjects] = useState([]);
  const size =10;
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const path = location.pathname; //navigate에서 쓸거임
  const page = parseInt(search.get('page')?search.get('page'):1);
  const navigator = useNavigate();
  const [total,setTotal] = useState(0); 
  
  const getProjects= async()=>{
    //내가쓴 post정보들을 가져오는 쿼리(기본값 전체 select)
    const res = await axios.get(`/mypage/posts.list?user_id=${sessionStorage.getItem('user_id')}&menu=1&page=${page}&size=${size}`)
    console.log(res.data)
    
    setProjects(res.data.list);
    setTotal(res.data.total);
    
  }
  useEffect(()=>{
    getProjects();
  },[location]);

  const onChangePage =(page)=>{
    navigator(`${path}?user_id=${sessionStorage.getItem('user_id')}&menu=1&page=${page}&size=${size}`)
  }
  return (
    <div>
      <Table className='MyActivityPageex_table text-center'>
        <thead>
          <tr>

            <th>title</th>
            <th>작성일(수정일)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project=>
            <tr>
              <td><div className='ellipsis1'>{project.title}</div> </td>
              <td>{project.created_at === project.updated_at ?
              project.date:project.newdate}</td>
              <td><Button variant='outline-dark' size='sm'>해당 게시글로 이동</Button></td>
            </tr>
            )}
        </tbody>
      </Table>
      {total >size &&
        <Pagination
          activePage={page}
          itemsCountPerPage={size}
          totalItemsCount={total}
          pageRangeDisplayed={10}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={ onChangePage }/>
      }    

    </div>
  )
}

export default Projects