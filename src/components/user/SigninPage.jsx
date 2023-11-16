import React, { useRef, useState } from 'react'
import axios from 'axios';
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom';
import '../../css/LoginPG.css';



export const SigninPage = () => {




  const CLIENT_ID = "edb2e3648fa374acbe7be705a5474a8a";
  const REDIRECT_URI = "http://localhost:5000/kakao/code";
  // 프런트엔드 리다이랙트 URI 예시
  // const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

  // 백엔드 리다이랙트 URI 예시
  // const REDIRECT_URI =  "http://localhost:5000/kakao/code";


  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;


  const navi = useNavigate();
  const ref_email = useRef(null);
  const [form, setForm] = useState({
    email: '',
    Upassword: '',
  });
  const { email, Upassword } = form;
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("아이디를 입력하세요!");
      ref_email.current.focus();
    } else if (Upassword === "") {
      alert("비밀번호를 입력하세요!");
    } else {
      const res = await axios.post('/users/login', form);
      console.log(res);
      console.log(res.data.result);
      if (res.data.result === '0') {

        alert("아이디가 존재하지 않습니다!");
        ref_email.current.focus();
      } else if (res.data.result === '2') {
        alert("비빌번호가 일치하지 않습니다!");
      } else {
        alert("로그인 성공!");
        // console.log(user_id)
        sessionStorage.setItem("user_id", res.data.user_id);
        console.log(sessionStorage.getItem("user_id"));
        if (sessionStorage.getItem("target")) {
          navi(sessionStorage.getItem("target"));
        } else {
          navi('/');
        }
      }
    }
  }


  return (
    <div className='signup_wrap'>
      <div className='signup_cover'>
        <video autoPlay muted loop className='video_background'>
          <source src='/video/bg_video.mp4' type='video/mp4' />
        </video>

        <div className='signup_form'>
          <form onSubmit={onSubmit}>
            <InputGroup className='mb-2'>
              <InputGroup.Text>Email</InputGroup.Text>
              <Form.Control onChange={onChange} ref={ref_email} value={email} name='email' />
            </InputGroup>
            <InputGroup className='mb-2'>
              <InputGroup.Text>Password</InputGroup.Text>
              <Form.Control onChange={onChange} type="password" value={Upassword} name='Upassword' />
            </InputGroup>
            <Button className='mb-2 w-100 signup_btn' type="submit">로그인</Button>

            <Button className='mb-3 w-100 signup_btn' as={Link} to="/user/signup">회원가입 </Button>
            <a href={KAKAO_AUTH_URL} className="d-flex justify-content-center">
              <img src="../images/kakao_login_medium_narrow.png" alt="카카오 로그인" style={{ cursor: 'pointer' }} />
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SigninPage