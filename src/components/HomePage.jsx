import React from 'react'
import { useEffect } from 'react'

const HomePage = () => {
    return (
        <div className='wrap'>
            <div className="main_img">
                <div className="main_text_box">
                    <p className="main_article_t" data-aos="fade-up" data-aos-duration="800">LIVE YOUR NEW BEAUTY</p>

                    <p className="main_title" data-aos="fade-up" data-aos-duration="900">
                        WE MAKE <br />
                        <span>A MORE</span><br />
                        BEAUTIFUL <br />
                        WORLD
                    </p>

                    <p className="main_article_b" data-aos="fade-up" data-aos-duration="900">사람을 아름답게, 세상을 아름답게</p>

                    <p className="btn" data-aos="fade-up" data-aos-duration="1000">
                        <a href="#">VIEW MORE +</a>
                    </p>
                </div>
            </div>

            {/* ----------------------------------------section2--------------------------------------------------- */}

            <section className="news">
                <div className="contents_title_box">
                    <p className="contents_title" data-aos="fade-right" data-aos-duration="600">News</p>

                    <p className="contents_article" data-aos="fade-right" data-aos-duration="700">
                        아모레퍼시픽은 늘 새로운 소식과 즐거운 이야기로 여러분들을 찾아갑니다.
                    </p>

                    <a href="" data-aos="fade-left" data-aos-duration="600">VIEW MORE +</a>
                </div>

                <div className="news_contents">
                    <div className="news_img_box" data-aos="fade-up" data-aos-duration="700">

                        <div className="news_img">
                            <img src="" alt="" />
                        </div>

                        <p className="news_title">
                            아모레퍼시픽, 라네즈로 일본 진출
                            가속화
                        </p>
                    </div>

                    <div className="news_img_box" data-aos="fade-up" data-aos-duration="900">

                        <div className="news_img">
                            <img src="" alt="" />
                        </div>
                        <p className="news_title">
                            구딸, 새로운 시작 알리는 ‘Scents Of
                            Your Life’ 캠페인 전개
                        </p>
                    </div>

                    <div className="news_img_box" data-aos="fade-up" data-aos-duration="1000">

                        <div className="news_img">
                            <img src="" alt="" />
                        </div>
                        <p className="news_title">
                            한율, 아모레퍼시픽과 함께하는
                            ‘한율시장’ 팝업스토어 운영
                        </p>
                    </div>

                    <div className="news_img_box" data-aos="fade-up" data-aos-duration="1200">


                        <div className="news_img">
                            <img src="" alt="" />
                        </div>
                        <p className="news_title">
                            이니스프리, 지구의 달 맞이 ‘Happy
                            earth Day’ 캠페인 전개
                        </p>
                    </div>
                </div>
            </section>

            {/* ----------------------------------------section3--------------------------------------------------- */}

            <section className="our_brands">
                <div className="contents_title_box">
                    <p className="contents_title" data-aos="fade-right" data-aos-duration="600">Our Brands</p>
                    <p className="contents_article" data-aos="fade-right" data-aos-duration="700">
                        아모레퍼시픽의 브랜드는 전통적인 뷰티의 영역을 과감히 넘고자 노력합니다.
                    </p>
                </div>

                <div className="brand_contents">
                    <div className="brand_img" data-aos="fade-up" data-aos-duration="700">
                        <img src="" alt="" />
                    </div>

                    <div className="brand_img" data-aos="fade-up" data-aos-duration="1000">
                        <img src="" alt="" />
                    </div>

                    <div className="brand_img" data-aos="fade-up" data-aos-duration="1300">
                        <img src="" alt="" />
                    </div>
                </div>

                <div className="brand_text_box" data-aos="fade-up" data-aos-duration="800">
                    창조적인 아이디어에 기술혁신을 더해 효능의 가치를 높인 차세대 뷰티 제품을 만들고, 건강한 삶을 돌보기 위한 솔루션을 제안합니다.<br />
                    전 세계 고객과 직접 소통하며 아름다움을 향한 여정을 이어갑니다.
                </div>
            </section>

            {/* ----------------------------------------section4--------------------------------------------------- */}

            <section className="architecture">
                <div className="contents_title_box">
                    <p className="contents_title" data-aos="fade-right" data-aos-duration="600">Architecture</p>
                    <p className="contents_article" data-aos="fade-right" data-aos-duration="700">
                        아모레퍼시픽은 공간을 통해 기업의 비전과 함께 사회를 향한 약속까지 담아냅니다.
                    </p>
                </div>

                <div className="archite_contents">
                    <div className="archite_img_box" data-aos="fade-up" data-aos-duration="700">
                        <p className="archite_img_title">본사</p>

                        <img src="" alt="" />
                    </div>

                    <div className="archite_img_box" data-aos="fade-up" data-aos-duration="900">
                        <p className="archite_img_title">뮤지엄</p>

                        <img src="" alt="" />
                    </div>

                    <div className="archite_img_box" data-aos="fade-up" data-aos-duration="1200">
                        <p className="archite_img_title">아모레 <br />뷰티 파크</p>

                        <img src="" alt="" />
                    </div>

                    <div className="archite_img_box" data-aos="fade-up" data-aos-duration="1400">
                        <p className="archite_img_title">제주 오설록</p>

                        <img src="" alt="" />
                    </div>
                </div>
            </section>

            {/* ----------------------------------------section5--------------------------------------------------- */}

            <section className="story">
                <div className="contents_title_box">
                    <p className="contents_title" data-aos="fade-right" data-aos-duration="600">Story</p>
                    <p className="contents_article" data-aos="fade-right" data-aos-duration="700">
                        아모레퍼시픽은 ‘사람을 아름답게, 세상을 아름답게 (We Make A MORE Beautiful World)’ 합니다. 이는 곧 아모레퍼시픽의 존재 이유입니다.
                    </p>
                </div>

                <div className="story_box_t" data-aos="fade-up" data-aos-duration="700">
                    <div className="story_box_t_1440">
                        <div className="story_text_box">
                            <p className="story_title" data-aos="fade-up" data-aos-duration="900">
                                CREATED<br />
                                FOR<br />
                                BEAUTY
                            </p>
                            <p className="story_article" data-aos="fade-up" data-aos-duration="1100">
                                아모레퍼시픽만이 창조하는 아름다움으로 새로운 역사를 써<br />
                                내려갑니다. 사람과 세상을 더 아름답게 하는 소명을 이루고자 <br />
                                미의 여정을 이어갑니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="story_left_box" data-aos="fade-right" data-aos-duration="700">
                    <p className="left_box_text" data-aos="fade-right" data-aos-duration="800">
                        1980년대 칼라의 시대를 담은<br />
                        메이컵 by 유행화장
                    </p>
                </div>

                <div className="story_right_box" data-aos="fade-left" data-aos-duration="700">
                    <p className="right_box_text" data-aos="fade-left" data-aos-duration="800">
                        아모레퍼시픽<br />
                        유튜브채널 바로가기
                    </p>

                    <div className="youtube_btn">
                        <img src="images/youtube.png" alt="" />
                    </div>
                </div>
            </section>

            {/* ----------------------------------------section6--------------------------------------------------- */}

            <section className="sustain">
                <div className="contents_title_box">
                    <p className="contents_title" data-aos="fade-right" data-aos-duration="600">Sustainability</p>
                    <p className="contents_article" data-aos="fade-right" data-aos-duration="700">
                        아모레퍼시픽은 더 나은 사회와 환경을 위해 노력하고자합니다.
                    </p>
                </div>

                <div className="sustain_contents">
                    <div className="sustain_img_box" data-aos="fade-right" data-aos-duration="700">
                        <div className="sustain_img"></div>
                        <p className="sustain_title" data-aos="fade-right" data-aos-duration="800">
                            고객, 사회와의 동행
                        </p>
                        <p className="sustain_article" data-aos="fade-right" data-aos-duration="800">
                            목적 기반의 브랜드 활동으로 고객의 지속가능한 소비를 촉진하고, 모두가 함께 하는 더 나은
                            사회를 만들기 위해 기여하겠습니다.
                        </p>
                    </div>

                    <div className="sustain_img_box" data-aos="fade-left" data-aos-duration="700">
                        <div className="sustain_img"></div>
                        <p className="sustain_title" data-aos="fade-left" data-aos-duration="800">
                            대자연과의 공존
                        </p>
                        <p className="sustain_article" data-aos="fade-left" data-aos-duration="800">
                            인류 앞에 놓인 기후를 함께 해결하고 대자연과 공존하기 위해 노력하겠습니다.
                        </p>
                    </div>
                </div>
            </section>
        </div> /* wrap */
    )
}

export default HomePage