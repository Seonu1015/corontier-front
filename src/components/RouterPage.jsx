import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './HomePage'

import ProblemList from './problem/ProblemList'
import ProblemInsert from './problem/ProblemInsert'

import ContestMain from './contest/ContestMain'

import CommunityMain from './community/CommunityMain'

import ProjectMain from './project/ProjectMain'

import UserMain from './users/UserMain'

const RouterPage = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/problem/list" element={<ProblemList />} />
            <Route path="/problem/insert" element={<ProblemInsert />} />

            <Route path="/contest/contestmain" element={<ContestMain />} />

            <Route path="/community/communitymain" element={<CommunityMain />} />

            <Route path="/project/projectmain" element={<ProjectMain />} />

            <Route path="/users/usermain" element={<UserMain />} />
        </Routes>
    )
}

export default RouterPage