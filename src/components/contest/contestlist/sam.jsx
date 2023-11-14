<div class="container-fluid">
<div class="row no-gutter">
   
<div className="col-md-3 d-none d-md-flex bg-video">
      <video autoPlay loop muted playsInline >
        <source src="../../vod/SpaceBG.mp4" type="video/mp4" />
      </video>

    <div class="col-md-12 bg-light ml-auto">
        <div class="login d-flex align-items-center py-5">
           
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-xl-7 mx-auto">
                        <h3 class="display-4">코테하테</h3>
                        <form onSubmit={onSubmit}>
                                 <InputGroup className='mb-2'>
                                      <InputGroup.Text>Email</InputGroup.Text>
                                      <Form.Control onChange={onChange} ref={ref_email} value={email} name='email'/> 
                                </InputGroup>
                                <InputGroup className='mb-2'>
                                      <InputGroup.Text>Password</InputGroup.Text>
                                       <Form.Control onChange={onChange} type="password" value={Upassword} name='Upassword'/>
                                </InputGroup>
                                <Button className='mb-2 w-100' type="submit">로그인</Button>

                                <Button className='mb-2 w-100' as={Link} to="/user/signup">회원가입 </Button>
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