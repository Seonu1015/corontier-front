import React from 'react'
import Container from 'react-bootstrap/Container';
import CommunityMain from '../CommunityMain';

const TextbookPage = () => {
    return (
        <>
            <div className='page_contents'>
                <Container>
                    <CommunityMain />
                </Container>
            </div>
            <div>
                <h1 className="text-center"> 교재 & 강의 추천</h1>
                <hr />
                <h5>교재 강의</h5>
            </div>
        </>
    )
}

export default TextbookPage