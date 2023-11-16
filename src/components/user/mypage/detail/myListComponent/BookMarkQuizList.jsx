import React,{ useEffect,useState} from 'react';
import { Table,Dropdown,Button,InputGroup,Form} from 'react-bootstrap';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination'

function BookMarkQuizList() {
  const [bookmarks,setBoxmarks] = useState([]);
  const [gradeid,setGradeid] = useState('');
  const [title,setTitle] = useState('');
  const [tagname,setTagname] = useState('');
  const [problemid,setProblemid] = useState('');
  const size =10;
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const path = location.pathname; //navigate에서 쓸거임
  const page = parseInt(search.get('page')?search.get('page'):1);
  const navigator = useNavigate();
  const [total,setTotal] = useState(0); 

  const getBookmarks=async()=>{
    let params = {
      user_id: sessionStorage.getItem('user_id'),
      grade_id: gradeid,
      title: title,
      tagname: tagname,
      problemid: problemid,
      page:page,
      size: size
    };
    const res = await axios.get(`/mypage/bookmarks.list`, { params: params });
    console.log(res.data)
    setBoxmarks(res.data.list)
    setTotal(res.data.total)

  }
  const handleSelectGrade = (eventKey) => {
    // 선택된 아이템에 해당하는 값을 categ 상태로 설정
    setGradeid(eventKey)
  };
  const onClickSearch=()=>{
    getBookmarks();
  }
  useEffect(()=>{
    getBookmarks();
  },[])
  const onChangePage =(page)=>{
    navigator(`${path}?user_id=${sessionStorage.getItem('user_id')}&grade_id=${gradeid}&title=${title}&tagname=${tagname}&problemid=${problemid}&page=${page}&size=${size}`);
  }
  useEffect(()=>{
    getBookmarks();
  },[location])
  const getGradeType=(gradeid)=>{
    switch (gradeid) {
      case '':
        return '전체Lv';
      case '1':
        return 'Lv.0';
      case '2':
        return 'Lv.1';
      case '3':
        return 'Lv.2';
      case '4':
        return 'Lv.3';
      case '5':
        return 'Lv.4';
      case '6':
        return 'Lv.5';
      default:
        return 'grade';
    }
  }
  return (
    <div>
    <div>  
    <div className='d-flex'>
    <Dropdown onSelect={handleSelectGrade} >
      <Dropdown.Toggle variant="success">
        {getGradeType(String(gradeid))}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="">전체Lv</Dropdown.Item>
        <Dropdown.Item eventKey="1">Lv.0</Dropdown.Item>
        <Dropdown.Item eventKey="2">Lv.1</Dropdown.Item>
        <Dropdown.Item eventKey="3">Lv.2</Dropdown.Item>
        <Dropdown.Item eventKey="4">Lv.3</Dropdown.Item>
        <Dropdown.Item eventKey="5">Lv.4</Dropdown.Item>
        <Dropdown.Item eventKey="6">Lv.5</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      <InputGroup className="admin_Pinput_width">
        <InputGroup.Text className='admin_inputtext_width' >문제번호</InputGroup.Text>
        <Form.Control type="number" min={1} value={problemid} onChange={(e)=>setProblemid(e.target.value)}/>
      </InputGroup>

      <InputGroup className="admin_Pinput_width">
        <InputGroup.Text className="admin_inputtext_width">문제제목</InputGroup.Text>
        <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} />
      </InputGroup>
      <InputGroup className="admin_Pinput_width">
        <InputGroup.Text className="admin_inputtext_width">문제유형</InputGroup.Text>
        <Form.Control value={tagname}  onChange={(e)=>setTagname(e.target.value)}/>
      </InputGroup >
      <div >
        <Button style={{width:'100px'}} onClick={onClickSearch}>검색하기</Button>
      </div>     
    </div>
    
    <Table className='text-center'>
      <thead>
        <tr>
          <th>문제난이도</th>
          <th>문제번호</th>
          <th>문제제목</th>
          <th>문제유형</th>
        </tr>
      </thead>
      <tbody>
        {bookmarks.map(bookmark=>
          <tr>
            <td>{bookmark.grade}</td>
            <td>{bookmark.problem_id}</td>
            <td>{bookmark.title}</td>
            <td>{bookmark.tag_names}</td>
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
</div>
  )
}

export default BookMarkQuizList