import React from 'react'
import CandidateUserList from '../pages/CandidateUserList';
import EmployerUserList from '../pages/EmployerUserList';
import JobPostingList from '../pages/JobPostingList';

export default function Section() {
    return (
        <div>
            <CandidateUserList/>
            <EmployerUserList/>
            <JobPostingList/>
        </div>
    )
}
