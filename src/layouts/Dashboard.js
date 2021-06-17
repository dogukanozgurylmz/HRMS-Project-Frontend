import React from 'react'
import { Grid } from "semantic-ui-react";
import Sidebar from './Sidebar'
import { Route } from 'react-router'
import CandidateUserList from '../pages/CandidateUserList'
import EmployerUserList from '../pages/EmployerUserList'
import JobPostingList from '../pages/JobPostingList'
import NewJobPosting from '../pages/post/NewJobPosting';

export default function Dashboard() {
    return (
        <div>
            
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path='/candidates' component={CandidateUserList} />
                        <Route exact path='/employers' component={EmployerUserList} />
                        <Route exact path='/jobpostings' component={JobPostingList} />
                        <Route exact path='/newjobposting' component={NewJobPosting} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
