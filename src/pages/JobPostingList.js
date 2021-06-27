import React from 'react'
import { useState, useEffect } from "react";
import { Button, Card, Header } from 'semantic-ui-react'
import JobPostingService from "../services/jobPostingService"
import { Popup } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { addToFavorite } from "../store/actions/favoriteActions"

export default function JobPostingList() {

    const dispatch = useDispatch()

    const [jobPostings, setJobPostings] = useState([])
    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getByIsActiveTrue().then(result => setJobPostings(result.data.data))
    }, [])

    const handleAddToFavorite = (jobPosting) => {
        dispatch(addToFavorite(jobPosting))
    }

    const style = {
        borderRadius: 0,
        opacity: 0.7,
        padding: '1em',
    }

    return (
        <div>
            <Header as="h1">
                <Header.Content style={{ color: "#5f86a0" }} >Job Postings</Header.Content>
            </Header>
            <Card.Group itemsPerRow={3}>
                {
                    jobPostings.map(jobPosting => (
                        <Card key={jobPosting.id}>
                            <Popup style={style} inverted content='Add to favorites' trigger={<Button color="blue" onClick={() => handleAddToFavorite(jobPosting)} icon='add' />} />
                            <Card.Content>
                                <Card.Header>{jobPosting.employerUser.companyName}</Card.Header>
                                <Card.Meta>{jobPosting.employerUser.webAddress}</Card.Meta>
                            </Card.Content>
                            <Card.Content >{jobPosting.jobPosition.position}</Card.Content>
                            <Card.Content >Salary: {jobPosting.minSalary} - {jobPosting.maxSalary} TL</Card.Content>
                            <Card.Content >City: {jobPosting.city.cityName}</Card.Content>
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
