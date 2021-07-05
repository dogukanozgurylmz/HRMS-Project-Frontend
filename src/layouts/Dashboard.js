import React from 'react'
import { Grid } from "semantic-ui-react";
import { Route } from 'react-router'
import CandidateUserList from '../pages/CandidateUserList'
import EmployerUserList from '../pages/EmployerUserList'
import JobPostingList from '../pages/jobPosting/JobPostingList'
import NewJobPosting from '../pages/jobPosting/post/NewJobPosting';
import JobPostingApproval from '../pages/admin-operations/JobPostingApproval';
import CandidateRegister from '../pages/register-login/CandidateRegister';
import NewResume from '../pages/resume/post/NewResume';
import ResumeList from '../pages/resume/ResumeList';
import ResumeDetail from '../pages/resume/detail/ResumeDetail';
import NewLanguage from '../pages/resume/post/NewLanguage';

export default function Dashboard() {
    return (
        <div>
            
            <Route exact path='/candidateRegister' component={CandidateRegister} />
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Route exact path='/candidates' component={CandidateUserList} />
                        <Route exact path='/employers' component={EmployerUserList} />
                        <Route exact path='/jobpostings' component={JobPostingList} />
                        <Route exact path='/resumes' component={ResumeList} />
                        <Route exact path='/resume/:id' component={ResumeDetail} />
                        <Route exact path='/jobposting/add' component={NewJobPosting} />
                        <Route exact path='/jobPosting/approval' component={JobPostingApproval} />
                        <Route exact path='/candidate/resume/add' component={NewResume} />
                        <Route exact path='/candidate/language' component={NewLanguage} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
