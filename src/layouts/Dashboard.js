import React from 'react'
import { Grid } from "semantic-ui-react";
import Sidebar from './Sidebar'
import { Route } from 'react-router'
import CandidateUserList from '../pages/CandidateUserList'
import EmployerUserList from '../pages/EmployerUserList'
import JobPostingList from '../pages/JobPostingList'
import NewJobPosting from '../pages/post/NewJobPosting';
import JobPostingApproval from '../pages/admin-operations/JobPostingApproval';
import CandidateRegister from '../pages/register-login/CandidateRegister';
import NewResume from '../pages/post/NewResume';
import ResumeList from '../pages/ResumeList';
import ResumeDetail from '../pages/detail/ResumeDetail';

export default function Dashboard() {
    return (
        <div>
            
            <Route exact path='/candidateRegister' component={CandidateRegister} />
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path='/candidates' component={CandidateUserList} />
                        <Route exact path='/employers' component={EmployerUserList} />
                        <Route exact path='/jobpostings' component={JobPostingList} />
                        <Route exact path='/resumes' component={ResumeList} />
                        <Route exact path='/resume/:id' component={ResumeDetail} />
                        <Route exact path='/jobposting/add' component={NewJobPosting} />
                        <Route exact path='/jobPosting/approval' component={JobPostingApproval} />
                        <Route exact path='/resume/add' component={NewResume} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
