import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './HomePage'

import ProblemPage from './problem/ProblemPage'
import ProblemInsert from './problem/ProblemInsert'
import ProblemList from './problem/ProblemList'
import Question from './problem/Question'
import SolutionPage from './problem/solution/SolutionPage'
import SolutionList from './problem/solution/SolutionList'
import SolutionRead from './problem/solution/SolutionRead'

import ContestMain from './contest/ContestMain'
import ContestTip from './contest/contestlist/ContestTip'
import ContestReview from './contest/contestlist/ContestReview'
import ContestL from './contest/contestlist/ContestL'
import ContestTipDetail from './contest/contestlist/ContestTipDetail'
import ContestReviewDetail from './contest/contestlist/ContestReviewDetail'
import TipInsert from './contest/contestlist/TipInsert'
import ReviewInsert from './contest/contestlist/ReviewInsert'

import CommunityMain from './community/CommunityMain'

import NoticePage from './community/notice/NoticePage'
import NoticeInsert from './community/notice/NoticeInsert'
import NoticeUpdate from './community/notice/NoticeUpdate'
import LoungePage from './community/lounge/LoungePage'
import LoungeRead from './community/lounge/LoungeRead'
import ApplyProjectPage from './community/applystudy&project/ApplyProjectPage'
import ApplyProjectRead from './community/applystudy&project/ApplyProjectRead'
import QuestionPage from './community/q&a/QuestionPage'
import QuestionRead from './community/q&a/QuestionRead'
import TextbookPage from './community/recomendcontents/TextbookPage'
import TextbookRead from './community/recomendcontents/TextbookRead'
import LecturePage from './community/recomendcontents/LecturePage'
import LectureRead from './community/recomendcontents/LectureRead'

import ProjectMain from './project/ProjectMain'
import ProjectRead from './project/ProjectRead'

import Mypage from './user/mypage/Mypage'
import SigninPage from './user/SigninPage'
import SignupPage from './user/SignupPage'
import MyQuizPage from './user/mypage/detail/MyQuizPage'
import MyActivityPage from './user/mypage/detail/MyActivityPage'
import OXNotePage from './user/mypage/detail/OXNotePage'
import MyListPage from './user/mypage/detail/MyListPage'
import UserUpdatePage from './user/mypage/detail/UserUpdatePage'
import OXNoteDetailPage from './user/mypage/detail/OXNoteDetailPage'

import KakaoRedirectHandler from './user/KakaoRedirectHandler'; import AdminPage from './admin/AdminPage'
import AdminManagement from './admin/admin_detail/AdminManagement'
import Myactive from './admin/admin_detail/Myactive'


import ProjectInsert from './project/ProjectInsert'

const RouterPage = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/problem/main" element={<ProblemPage />} />
            <Route path="/problem/list" element={<ProblemList />} />
            <Route path="/problem/insert" element={<ProblemInsert />} />
            <Route path="/problem/:problem_id" element={<SolutionPage />} />
            <Route path="/problem/question" element={<Question />} />
            <Route path="/solution/:user_id" element={<SolutionList />} />
            <Route path="/solution/read/:sol_id" element={<SolutionRead />} />

            <Route path="/contest/contestmain" element={<ContestMain />} />
            <Route path="/contest/contest-tip" element={<ContestTip />} />
            <Route path="/contest/ContestReview" element={<ContestReview />} />
            <Route path="/contest/ContestList" element={<ContestL />} />
            <Route path="/contest/contest-tip/:post_id" element={<ContestTipDetail />} />
            <Route path="/contest/contest-review/:post_id" element={<ContestReviewDetail />} />
            <Route path="/contest/TipInsert" element={<TipInsert />} />
            <Route path="/contest/ReviewInsert" element={<ReviewInsert />} />
            
            <Route path="/community/communitymain" element={<CommunityMain />} />
            <Route path="/community/notice/NoticePage" element={<NoticePage />} />
            <Route path="/community/notice/NoticeInsert" element={<NoticeInsert />} />
            <Route path="/community/notice/NoticeUpdate/:post_id" element={<NoticeUpdate />} />
            <Route path="/community/lounge/loungepage" element={<LoungePage />} />
            <Route path="/community/lounge/loungeread/:post_id" element={<LoungeRead />} />
            <Route path="/community/applystudy&project/applyprojectpage" element={<ApplyProjectPage />} />
            <Route path="/community/applystudy&project/applyprojectread/:post_id" element={<ApplyProjectRead />} />
            <Route path="/community/q&a/questionpage" element={<QuestionPage />} />
            <Route path="/community/q&a/questionread/:post_id" element={<QuestionRead />} />
            <Route path="/community/recomendcontents/textbookpage" element={<TextbookPage />} />
            <Route path="/community/recomendcontents/Textbookread" element={<TextbookRead />} />
            <Route path="/community/recomendcontents/lecturepage" element={<LecturePage />} />
            <Route path="/community/recomendcontents/lectureread" element={<LectureRead />} />

            <Route path="/project/projectmain" element={<ProjectMain />} />
            <Route path="/project/read/:post_id" element={<ProjectRead />} />
            <Route path="/project/insert" element={<ProjectInsert />} />

            <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />

            <Route path="/admin/adminpage" element={<AdminPage />} >
                <Route path='' element={<AdminManagement />}></Route>
                <Route path='myactive' element={<Myactive />}></Route>
                <Route path='problemlist' element={<ProblemList />}></Route>
            </Route>

            <Route path="/user/mypage" element={<Mypage />} >
                <Route path='' element={<MyQuizPage/>}></Route>
                <Route path="myactivity" element={<MyActivityPage />} />               
                <Route path="oxnote" element={<OXNotePage />} />               
                <Route path="oxnote/detail/:problem_id" element={<OXNoteDetailPage />} />               
                <Route path="mylist" element={<MyListPage />} />       
                <Route path="userupdate" element={<UserUpdatePage />} />               
                <Route path="analysis"  />               

            </Route>
            <Route path="/user/signin" element={<SigninPage />} />
            <Route path="/user/signup" element={<SignupPage />} />
        </Routes>
    )
}

export default RouterPage