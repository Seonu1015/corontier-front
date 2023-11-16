import React from 'react'

const HomePage = () => {
    // alert(sessionStorage.getItem("user_id"));
    return (
        <div className='wrap'>
            <div className="main_img">
                <div className="main_text_box">
                    <p className="main_article_t" data-aos="fade-up" data-aos-duration="800">LIVE YOUR NEW BEAUTY</p>

          <p className="main_title" data-aos="fade-up" data-aos-duration="900">
            WE MAKE <br />
            <span>A MORE</span><br />
            WONDERFUL <br />
            WORLD
          </p>

          <p className="main_article_b" data-aos="fade-up" data-aos-duration="900">사람을 아름답게, 세상을 아름답게</p>

          <p className="btn" data-aos="fade-up" data-aos-duration="1000">
            <a href="#">VIEW MORE +</a>
          </p>
        </div>
      </div>

      {/* ----------------------------------------section1--------------------------------------------------- */}

      <section className="news">
        <div className="contents_title_box">
          <p className="contents_title" data-aos="fade-right" data-aos-duration="600">국비지원으로 개발자 커리어 시작!</p>
          <a href="" data-aos="fade-left" data-aos-duration="600">더 보기 +</a>
        </div>

        <div className="news_contents">
          <div className="news_img_box" data-aos="fade-up" data-aos-duration="700">
            <div className="news_img">
              <img src="/images/news01.png" alt="News 01" />
            </div>

            <p className="news_title">
              무료
            </p>
          </div>

          <div className="news_img_box" data-aos="fade-up" data-aos-duration="900">
            <div className="news_img">
              <img src="/images/news02.png" alt="News 02" />
            </div>
            <p className="news_title">
              무료
            </p>
          </div>

          <div className="news_img_box" data-aos="fade-up" data-aos-duration="1000">
            <div className="news_img">
              <img src="/images/news03.png" alt="News 03" />
            </div>
            <p className="news_title">
              무료
            </p>
          </div>

          <div className="news_img_box" data-aos="fade-up" data-aos-duration="1200">
            <div className="news_img">
              <img src="/images/news04.png" alt="News 04" />
            </div>
            <p className="news_title">
              무료
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------section2--------------------------------------------------- */}

      <section className="our_brands">
        <div className="contents_title_box">
          <p className="contents_title" data-aos="fade-right" data-aos-duration="600">추천 프로그램</p>
          <a href="" data-aos="fade-left" data-aos-duration="600">더 보기 +</a>
        </div>

        <div className="brand_contents">
          <div className="brand_img" data-aos="fade-up" data-aos-duration="700"></div>

          <div className="brand_img" data-aos="fade-up" data-aos-duration="1000"> </div>

          <div className="brand_img" data-aos="fade-up" data-aos-duration="1300"></div>
        </div>

        <div className="brand_text_box" data-aos="fade-up" data-aos-duration="800">
          창조적인 아이디어에 기술혁신을 더해 효능의 가치를 높인 차세대 뷰티 제품을 만들고, 건강한 삶을 돌보기 위한 솔루션을 제안합니다.<br />
          전 세계 고객과 직접 소통하며 아름다움을 향한 여정을 이어갑니다.
        </div>
      </section>

      {/* ----------------------------------------section3--------------------------------------------------- */}

      <section className="sustain">
        <div className="contents_title_box">
          <p className="contents_title" data-aos="fade-right" data-aos-duration="600">추천 강의</p>
        </div>

        <div className="sustain_contents">
          <div className="sustain_img_box" data-aos="fade-right" data-aos-duration="700">
            <div className="sustain_img"></div>
            <p className="sustain_title" data-aos="fade-right" data-aos-duration="800">
              파이썬 코딩테스트와 쉽게 배우는 자료구조 알고리즘
            </p>
            <p className="sustain_article" data-aos="fade-right" data-aos-duration="800">
              자료구조와 알고리즘은 왜 중요할지? 근본적인 이유부터 스택, 큐, 심화 알고리즘 풀이까지 알차게 담았습니다.
            </p>
          </div>

          <div className="sustain_img_box" data-aos="fade-left" data-aos-duration="700">
            <div className="sustain_img"></div>
            <p className="sustain_title" data-aos="fade-left" data-aos-duration="800">
              자바스크립트(JavaScript)로 배우는 정규표현식
            </p>
            <p className="sustain_article" data-aos="fade-left" data-aos-duration="800">
              코딩 활용의 필수 도구, 기초부터 탄탄하게 다져주는 JavaScript 정규표현식.
            </p>
          </div>
        </div>
      </section>
    </div> /* wrap */
  )
}

export default HomePage