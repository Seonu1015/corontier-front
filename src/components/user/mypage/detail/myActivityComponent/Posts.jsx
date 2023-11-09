import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Table } from 'react-bootstrap';

const Posts = () => {
  const [posts,setPosts] = useState([]);

  const getPosts= async()=>{

    //내가쓴 post정보들을 가져오는 쿼리
    // const res = await axios.get()
    // setPosts(res.data);
  }
  useEffect(()=>{
    getPosts();
  },[])
  return (
    <div>
      {/* tab -> 게시글 카테고리 */}
      {/* 선택한카테고리 ===post.category && 내용출력 */}
      <Table>
        <thead>
          <tr>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post=>
            <tr>
              <td>게시글제목</td>
            </tr>
            )}
        </tbody>
      </Table>
    </div>
  )
}

export default Posts