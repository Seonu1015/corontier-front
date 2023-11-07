import React from 'react'
import "../../../css/Mypage.css"
import { Link } from 'react-router-dom'
import { Button} from 'react-bootstrap';


const SideMenu = () => {

  return (
  <div className='side-bar'>   
    <div>
      <img src={'http://via.placeholder.com/200x200'}  />
    </div>
    <div>
        단계별풀이현황 
    </div>      
    <div className='side-bar-menu'>
      <Link to=''><Button variant='outline-secondary'>myquize</Button></Link>
      <Link to='oxnote'><Button variant='outline-secondary'>오답노트</Button></Link>
      <Link to='myactivity'><Button variant='outline-secondary'>나의활동</Button></Link>
      <Link to='userupdate'><Button variant='outline-secondary'>개인정보수정</Button></Link>
    
      
      <Button variant='outline-danger'>로그아웃</Button>
    </div>
  </div>
)
}

export default SideMenu