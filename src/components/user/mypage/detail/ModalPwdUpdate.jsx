import React, { useState ,useContext,useRef} from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { BoxContext } from '../../../BoxContext';
import axios from 'axios';


const ModalPwdUpdate = ({user,setUser}) => {
  const { setBox } = useContext(BoxContext);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setFormData({
      password: '',
      newPassword1: '',
      newPassword2: '',
    })
    setShow(false);
    
  }
  const handleShow = () => setShow(true);
  
  const [formData, setFormData] = useState({
    password: '',
    newPassword1: '',
    newPassword2: '',
  });
  const passwordInputRef = useRef(null);
  const newPassword1InputRef = useRef(null);
  const newPassword2InputRef = useRef(null);

  const onClickPwdCheck=async()=>{
    const { password, newPassword1, newPassword2 } = formData;
    if (!password || !newPassword1 || !newPassword2) {
      setBox({
        show: true,
        message: '입력하지않은 칸이 있습니다.',
      });
    }else if (newPassword1 !== newPassword2) {
      setBox({
        show: true,
        message: '새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다',
      });
    }else {
      //현재 비밀번호확인과정       
      const res = await axios(`/users/read/${user.user_id}`);
      const regpassword = res.data.password
      if(password !== regpassword){
        setBox({
          show: true,
          message: '현재비밀번호를 잘못입력하셨습니다.',
        });
      }else {
        //비밀번호 수정 api
        const res = await axios.post('/users/update',{...user,password:newPassword1});
        if(res.data === 1){
          setBox({
            show: true,
            message: '비밀번호가 변경되었습니다.',
            action:()=>{
              setUser({...user,password:newPassword1});
              handleClose(); //수정완료시 비밀번호 변경 전체 모달창 close();
            }
          });
        }else {
          setBox({
            show: true,
            message: '비밀번호 변경에러, 다시 입력해주세요',
          });
        }
      }
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <Button variant='outline-danger'size='sm' onClick={handleShow}>
        비밀번호 수정
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>비밀번호 수정하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className='inputgroup mb-2'>
            <InputGroup.Text>현재비밀번호</InputGroup.Text>
            <Form.Control name="password"
              value={formData.password}
              onChange={handleChange}
              ref={passwordInputRef} type='password'/>
          </InputGroup>
          <InputGroup className='inputgroup mb-2'>
            <InputGroup.Text>새비밀번호</InputGroup.Text>
            <Form.Control name="newPassword1"
              value={formData.newPassword1}
              onChange={handleChange}
              ref={newPassword1InputRef} type='password'/>
          </InputGroup>
          <InputGroup className='inputgroup mb-2'>
            <InputGroup.Text>새비밀번호확인</InputGroup.Text>
            <Form.Control name="newPassword2"
              value={formData.newPassword2}
              onChange={handleChange}
              ref={newPassword2InputRef} type='password'/>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onClickPwdCheck}>
            수정하기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPwdUpdate