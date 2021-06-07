import React from 'react'
import { useState, useEffect } from "react";
import { Button, Card, Header } from 'semantic-ui-react'
import JobPostingService from "../services/jobPostingService"

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPosting().then(result => setJobPostings(result.data.data))
    }, [])

    return (
        <div>
            <Header color='grey' as="h2">
                <Header.Content>Job Postings</Header.Content>
            </Header>
            <Card.Group>
                {
                    jobPostings.map(jobPosting => (
                        <Card>
                            <Card.Content>
                                <Card.Header>{jobPosting.employerUser.companyName}</Card.Header>
                                <Card.Meta>{jobPosting.employerUser.webAddress}</Card.Meta>
                                <Card.Description>{jobPosting.description}</Card.Description>
                            </Card.Content>
                            <Card.Content >{jobPosting.jobPosition.position}</Card.Content>
                            <Card.Content >Salary: {jobPosting.minSalary} - {jobPosting.maxSalary} TL</Card.Content>
                            <Card.Content >Open Position: {jobPosting.quota}</Card.Content>
                            <Card.Content >Şehir: {jobPosting.city.cityName}</Card.Content>
                            <Card.Content >Starting Date: {jobPosting.releaseDate}</Card.Content>
                            <Card.Content >Application Deadline: {jobPosting.applicationDeadline}</Card.Content>
                            <Card.Content extra>
                                <div className='ui one buttons'>
                                    <Button basic color='green'>
                                        Apply for a job
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    ))
                }
            </Card.Group>
        </div>
    )
}
