import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import TestPage from './problem/TestPage'
import ContestMain from './contest/ContestMain'
import CommunityMain from './community/CommunityMain'
import ProjectMain from './project/ProjectMain'
import UserMain from './users/UserMain'
import NoticePage from './community/notice/NoticePage'
import LoungePage from './community/lounge/LoungePage'
import Insert from './community/notice/Insert'

const RouterPage = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/problem/testpage" element={<TestPage />} />
            <Route path="/contest/contestmain" element={<ContestMain />} />
            <Route path="/community/communitymain" element={<CommunityMain />} />
            <Route path="/community/notice/NoticePage" element={<NoticePage />} />
            <Route path="/community/notice/insert" element={<Insert />} />
            <Route path="/community/lounge" element={<LoungePage />} />

            <Route path="/project/projectmain" element={<ProjectMain />} />
            <Route path="/users/usermain" element={<UserMain />} />
        </Routes>
    )
}

export default RouterPage