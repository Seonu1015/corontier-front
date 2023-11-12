import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
function Comment() {

  const [contestcoments, setContestcoment] = useState([]);
  const { post_id } = useParams();
  const [contents, setContents] =useState("");
  const ContestTipcomentsCall = async () => {

    const res = await axios.get("/contest/coments.json?post_id=" + post_id);
    let contestcoments = res.data;
    setContestcoment(contestcoments);
    console.log(res.data)

  
  }

  const onClickRegister = async() => {
    console.log(contents)
    if(contents==="") {
      alert("내용을 입력하세요!!")
    }else{
      const res=await axios.post('/contest/insert', {
        user_id: "8",     //sessionStorage.getItem("user_id"),
        post_id,
        contents     });
        if(res.data === 1) {
          ContestTipcomentsCall();
          setContents("");
        }     
     }
    }


    const onClickDelete = async(rid) => {
      alert("삭제할꺼임?")
      const res=await axios.post('/contest/delete', {comment_id:rid});
      if(res.data===1) {
        alert("삭제완료")
        ContestTipcomentsCall();
    }
  }

    /*
  const onClickHeart = async (cid) => {
    if (user_id=="8"){    //sessionStorage.getItem("uid")
        await axios.post('/books/insert/favorite',
            { user_id:   "8",                            //sessionStorage.getItem("uid"), 
            comment_id: cid });
            ContestTipcomentsCall();
    } else {
       // sessionStorage.setItem("target", location.pathname);
        navi('/users/login');
    }
}
*/

  useEffect(() => { ContestTipcomentsCall(); }, [])


  return (
    <section class="mb-5">

    <div class="card bg-light">
        <div class="card-body">
            <form class="mb-4">
             <Form.Control class="form-control" rows="3" placeholder="Join the discussion and leave a comment!" value={contents} onChange={(e)=>setContents(e.target.value)}
                        as="textarea" />
              
                <div class="d-flex justify-content-end mt-2"> 
                    <button type="button" class="btn btn-primary" onClick={onClickRegister} >댓글 추가</button> 
                </div>
             
            </form>

          
            {contestcoments.map(contestcoment =>
                <div class="d-flex mb-4" key={contestcoment.comment_id}>
                    <div class="flex-shrink-0">
                        <img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." />
                    </div>
                    <div class="ms-3">
                        <div class="fw-bold">{contestcoment.user_id}  조인해서 바꿔야함</div>
                        <div>{contestcoment.content}</div>
                    </div>
                    <Button onClick={()=>onClickDelete(contestcoment.comment_id)}   variant='danger' size='sm me-3'>삭제</Button>
                </div> 
                
            )}
     

        </div>
    </div>
</section>
             
          

                
            
         
  

  )
}

export default Comment