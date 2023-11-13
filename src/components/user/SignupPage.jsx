import React, { useRef, useState ,useEffect  } from 'react'
import axios from 'axios';
import {Row, Col, Form, InputGroup, Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import '../../css/LoginPG.css';

const SignupPage = () => {
    
    const [checked,setChecked]= useState(false);
    const navi=useNavigate();
    const ref_email = useRef(null);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [form, setForm] = useState({
        email: '',
        Upassword: '',
        UpasswordCheck: '',
        nickname:''

    });
    const {email, Upassword,nickname,UpasswordCheck} = form;
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    useEffect(() => {
        setPasswordsMatch(Upassword === UpasswordCheck);
      }, [Upassword, UpasswordCheck]);









    const onSubmitPassCheck = async(e) => {
        console.log("돔2?")
        e.preventDefault();

        if(email==""){
        ref_email.current.focus();
        alert("아이디를 입력하세요!");
        }else{
            console.log("돔?")
            const res=await axios.post('/users/login', form);
            if(res.data.result=='0'){
                alert("사용가능한 아이디입니다.");
                setChecked(true);
            }else{
                alert("이미 사용중인 아이디입니다.");
            }

        }
    
    
    
    }
    
    const onSubmit = async(e) => {
        e.preventDefault();
              if(email==="") {
                    alert("아이디를 입력하세요!");
                    ref_email.current.focus();
               }else if(!checked){
                alert("아이디 중복체크를 하세요!");
               }else if(Upassword===""){
                     alert("비밀번호를 입력하세요!");
               }else if(nickname===""){
                     alert("닉네임을 입력하세요!");
               }else{
                    const res=await axios.post('/users/insert', form);
                           if(res.data.result=='1'){
                                           alert("회원가입을 환영합니다 로그인 해주세요"); 
                                           navi('/user/signin');
                             }else{alert("오류?");}   
                    }
    }



  return (
      <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
               
                <div class="col-md-12 d-none d-md-flex bg-image">
                <div class="col-md-8 bg-light ml-auto">
                    <div class="login d-flex align-items-center py-5">
                       
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h3 class="display-4">회원 가입</h3>
                                    <form onSubmit={onSubmit}>
                                             <InputGroup className='mb-2'>
                                                  <InputGroup.Text>Email</InputGroup.Text>
                                                  <Form.Control onChange={onChange} ref={ref_email} value={email} name='email'/> 
                                            </InputGroup>
                                            <Button className='w-100' onClick={onSubmitPassCheck} type="button">중복체크</Button>
                                            <InputGroup className='mb-2'>
                                                  <InputGroup.Text>Password</InputGroup.Text>
                                                   <Form.Control onChange={onChange} type="password" value={Upassword} name='Upassword'/>
                                            </InputGroup>
                                            <InputGroup className='mb-2'>
                                                    <InputGroup.Text>Password Check</InputGroup.Text>
                                                    <Form.Control onChange={onChange} type="password" value={UpasswordCheck} name='UpasswordCheck'/>
                                                    {/* 비밀번호 불일치 시 경고 메시지 */}
                                                    {!passwordsMatch && (
                                                    <Form.Text className="text-danger"> Passwords do not match! </Form.Text>
                                                    )}
                                             </InputGroup>


                                            <InputGroup className='mb-2'>
                                                  <InputGroup.Text>nickname</InputGroup.Text>
                                                   <Form.Control onChange={onChange} value={nickname} name='nickname'/>
                                            </InputGroup>




                                            <Button className='w-100' type="submit">회원가입</Button>
                                    </form>
                                   
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

export default SignupPage