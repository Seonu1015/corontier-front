import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
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
            <div className='page_contents'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div className='text-center p-5'>
                <h2>공지사항</h2>
            </div>
            <div className='text-end'>
                <Button onClick={() => navi('/community/notice/NoticeInsert')}>등록하기</Button>
            </div>
            <hr />
            <Table striped hover className='text-center my-3'>
                <thead>
                    <tr>
                        <th>분류</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post =>
                        <tr key={post.post_id}>
                            <td>{post.category}</td>
                            <td>
                                <div onClick={() => onClickTitle(post.post_id)} style={{ cursor: "pointer" }}>{post.title}</div>
                                <td colSpan={4}>
                                    {post.show &&
                                        <>
                                            {post.content}
                                            <div className='text-end'>
                                                <Button onClick={() => navi(`/community/notice/NoticeUpdate/${post.post_id}`)} variant='success' size='sm'>수정하기</Button>
                                            </div>
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