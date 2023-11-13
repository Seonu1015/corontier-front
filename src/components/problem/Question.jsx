import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const Question = ({ prob_id }) => {
  const [qs, setQs] = useState([]);

  const getQuestion_sollist = () => {
    const res = axios('prob_id')
    setQs(res.data);
  }

  useEffect(() => {
    getQuestion_sollist();
  }, [])

  return (
    <div className='page_wrap'>
      <div className='page_contents_wrap'>
        <div className='question_wrap'>
          <div className='question_contents'>
            <Button className="btn_back" variant='dark'>강의로 돌아가기</Button>

            <div className='question_new_wrap'>
              <div className='q_form_group'>
                <label className='q_required'><span>*</span> 제목 </label>
                <input placeholder="입력하세요." class="form-control" type="text"></input>
              </div>

              <div className='q_editor_body'>
                <div className='q_form_group'>
                  <label className='q_required'><span>*</span> 내용 </label>
                  <textarea rows="10" placeholder="문제와 관련된 질문을 구체적으로 작성해 주세요. 타인에 대한 비방이나 욕설, 광고, 정답 공개 등 게시판의 목적과 관련 없는 내용은 삭제될 수 있습니다." 
                  class="form-control"></textarea>
                </div>
              </div>

              <div className='q_btn_wrap'>
                <Button className='q_btn'> 미리보기 </Button>
                <Button className='q_btn'> 취소 </Button>
                <Button className='q_btn' variant='outline-dark'> 등록 </Button>
              </div>
            </div>
          </div>

          <div className='question_list_wrap'>
            {/* 등록된 문제 출력 */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question