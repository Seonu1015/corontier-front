import React, { useRef, useState } from 'react'
import axios from 'axios';
import {Row, Col, Form, InputGroup, Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import '../../css/LoginPG.css';



export const SigninPage = () => {




    const CLIENT_ID = "edb2e3648fa374acbe7be705a5474a8a";
    const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";
  // 프런트엔드 리다이랙트 URI 예시
  // const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";
  
  // 백엔드 리다이랙트 URI 예시
  // const REDIRECT_URI =  "http://localhost:5000/kakao/code";
  
  
   const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  
   const navi=useNavigate();
   const ref_uid = useRef(null);
   const [form, setForm] = useState({
       uid: 'blue',
       upass: 'pass'
   });
   const {uid, upass} = form;
   const onChange = (e) => {
       setForm({
           ...form,
           [e.target.name]:e.target.value
       })
   }
   const onSubmit = async(e) => {
            e.preventDefault();
                  if(uid==="") {
                        alert("아이디를 입력하세요!");
                        ref_uid.current.focus();
                   }else if(upass===""){
                         alert("비밀번호를 입력하세요!");
                   }else{
                        const res=await axios.post('/users/login', form);
                               if(res.data==0){
                                               alert("아이디가 존재하지 않습니다!");
                                                ref_uid.current.focus();
                                 }else if(res.data==2){
                                                alert("비빌번호가 일치하지 않습니다!");
                                 }else{
                                                sessionStorage.setItem("uid", uid);
                                                 if(sessionStorage.getItem("target")){
                                                               navi(sessionStorage.getItem("target"));
                                                }else{
                                                       navi('/');
                                                     }   
                            }
                        }
    }
  

  return (
    <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
               
                <div class="col-md-12 d-none d-md-flex bg-image">
                <div class="col-md-5 bg-light ml-auto">
                    <div class="login d-flex align-items-center py-5">
                       
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h3 class="display-4">코테하테</h3>
                                    <form onSubmit={onSubmit}>
                                             <InputGroup className='mb-2'>
                                                  <InputGroup.Text>Email</InputGroup.Text>
                                                  <Form.Control onChange={onChange} ref={ref_uid} value={uid} name='uid'/> 
                                            </InputGroup>
                                            <InputGroup className='mb-2'>
                                                  <InputGroup.Text>Password</InputGroup.Text>
                                                   <Form.Control onChange={onChange} type="password" value={upass} name='upass'/>
                                            </InputGroup>
                                            <Button className='w-100' type="submit">로그인</Button>
                                    </form>
                                    <a href={KAKAO_AUTH_URL}>
                                        <img src="../images/kakao_login_medium_narrow.png" alt="카카오 로그인" style={{ cursor: 'pointer' }}  />
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>

   







      </div>
  )
}
export default SigninPage