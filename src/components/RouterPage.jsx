import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './HomePage'

import ProblemPage from './problem/ProblemPage'
import ProblemInsert from './problem/ProblemInsert'

import ContestMain from './contest/ContestMain'

import CommunityMain from './community/CommunityMain'

import ProjectMain from './project/ProjectMain'


import Mypage from './user/mypage/Mypage'
import SigninPage from './user/SigninPage'
import SignupPage from './user/SignupPage'


const RouterPage = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/problem/main" element={<ProblemPage />} />
            <Route path="/problem/insert" element={<ProblemInsert />} />

            <Route path="/contest/contestmain" element={<ContestMain />} />

            <Route path="/community/communitymain" element={<CommunityMain />} />

            <Route path="/project/projectmain" element={<ProjectMain />} />
        
            <Route path="/user/mypage" element={<Mypage />} />
            <Route path="/user/signin" element={<SigninPage />} />
            <Route path="/user/signup" element={<SignupPage />} />
        </Routes>
    )
}

export default RouterPage