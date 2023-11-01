import React from 'react'

const TestPage = () => {
    return (
        <div className='page_wrap'>
            <div className='banner'>
                <img src="../images/banner.png" alt="" />
            </div>

            <div className='page_contents_wrap'>
                <div className='contents_title_box'>
                    <p className='contents_title'>Study Plan</p>
                    <p className='contents_article'>...</p>
                </div>

                <div className='page_contents'>
                    <div className='study_plan_wrap'>
                        <div className='study_plan_box1'> 1 </div>
                        <div className='study_plan_box2'> 2 </div>
                        <div className='study_plan_box3'> 3 </div>
                    </div>

                    <div className='box2'> 2 </div>

                    <div className='box3'> 3 </div>
                </div>
            </div>
        </div>
    )
}

export default TestPage