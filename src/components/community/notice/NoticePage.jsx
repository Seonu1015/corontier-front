import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';


const NoticePage = () => {
  const [posts, setPosts] = useState([]);
  const navi = useNavigate();

  const getPosts = async () => {
    const url = '/community/noticelist.json';
    const res = await axios(url);
    let list = res.data;
    list = list.map(p => p && { ...p, show: false });
    console.log(list);
    setPosts(list);
  }

  useEffect(() => {
    getPosts();
  }, [])

  const onClickTitle = (id) => {
    const newPosts = posts.map(p => p.post_id === id ? { ...p, show: !p.show } : p);
    // console.log(newPosts)
    setPosts(newPosts);
  }

  return (
    <>
      <CommunityMain />
      <div className='text-center p-3'>
        <h2>공지사항</h2>
      </div>
      <div className='noticepage_tablegroup'>
        <div style={{ width: "80%" }} >
          <div className='text-end'>
            <Button onClick={() => navi('/community/notice/NoticeInsert')}>등록하기</Button>
          </div>
          <hr />
          <Table striped hover className='text-center my-3 mb-5'>
            <thead>
              <tr>
                <th width='5%'>분류</th>
                <th>제목</th>
                <th width='6%'>작성자</th>
                <th>작성일</th>
                <th width='5%'>조회</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post =>
                <tr key={post.post_id}>
                  <td>{post.category}</td>

                  <td>
                    <div onClick={() => onClickTitle(post.post_id)} style={{ cursor: "pointer" }}><strong>{post.title}</strong></div>
                    <td colSpan={4}>
                      {post.show &&
                        <>
                          {post.content}
                          {sessionStorage.getItem('user_id') === 'admin' && //admin 계정명 넣었을 때만 보이게
                            <div className='text-end'>
                              <Button onClick={() => navi(`/community/notice/NoticeUpdate/${post.post_id}`)} variant='success' size='sm'>수정하기</Button>
                            </div>
                          }

                        </>
                      }
                    </td>
                  </td>
                  <td>{post.nickname}</td>
                  <td>{post.fmtdate}</td>
                  <td>{post.view_cnt}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
      {/* {total > size && */}
      {/* <Pagination
                activePage={1}
                itemsCountPerPage={3}
                totalItemsCount={1}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
            /> */}
      {/*onChange={onChangePage} */}
      {/* } */}

    </>
  )
}

export default NoticePage