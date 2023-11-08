import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const UserUpdatePage = () => {


  return (
    <div className='page_wrap'>
      <div className='userupdatepage_wrap'>
        <div className='userupdatepage_title'>
          <p>✏️ 개인정보 수정</p>
        </div>
        <div className='userupdatepage_contents'>
          <div className='userupdatepage_img'>
            <img src={"http://via.placeholder.com/250x250"} width="100" className='photo' />
          </div>
          <div className='userupdatepage_userid'>
            <p>USERID</p>
          </div>
          <div className='userupdatepage_updateform'>
            <div className='userupdatepage_col'>
              <form>
                <InputGroup className='inputgroup mb-2'>
                  <InputGroup.Text>아이디</InputGroup.Text>
                  <Form.Control />
                </InputGroup>
                <InputGroup className='inputgroup mb-2'>
                  <InputGroup.Text>비밀번호</InputGroup.Text>
                  <Form.Control />
                </InputGroup>
                <InputGroup className='inputgroup mb-2'>
                  <InputGroup.Text>비밀번호 확인</InputGroup.Text>
                  <Form.Control />
                </InputGroup>
                <InputGroup className='inputgroup mb-2'>
                  <InputGroup.Text>주소</InputGroup.Text>
                  <Form.Control />
                </InputGroup>
                <Form.Control placeholder='상세 주소' />
                <div className='updatebutton_group'>
                  <Button variant='dark' className='me-2 px-5' type='submit'>저장</Button>
                  <Button variant='outline-dark' className='px-5' type='reset'>취소</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserUpdatePage