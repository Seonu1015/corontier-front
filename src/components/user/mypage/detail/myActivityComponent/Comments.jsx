import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from "react-js-pagination";
import '../../../../../css/Pagination.css';
import { Table } from 'react-bootstrap';

const Comments = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const res = await axios.get(`/mypage/comments.list?user_id=${sessionStorage.getItem("user_id")}`);
    setComments(res.data);
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className='commentspage_content'>
      comments
    </div>
  )
}

export default Comments