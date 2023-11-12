import React from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';
import { NavLink } from 'react-router-dom';


const TextbookPage = () => {
    return (
        <>
            <div className='page_contents'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div>
                <h2 className="text-center"> 교재 & 강의 추천</h2>
                <div className='noticepage_tablegroup'>
                    <div style={{ width: "80%" }} className='mb-5' >
                        <hr />
                        <div className='mb-5'>
                            <NavLink to={`../community/recomendcontents/textbookpage`}>교재</NavLink>
                            <NavLink to={`../community/recomendcontents/lecturepage`}>강의</NavLink>
                        </div>
                        <NavLink to={`../community/recomendcontents/textbookread`}>
                            <img src={"http://via.placeholder.com/300x350"} />
                            <h5>제목</h5>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextbookPage