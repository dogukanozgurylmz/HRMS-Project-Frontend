import React from 'react'
import { useState, useEffect } from "react";
import { Button, Card, Header, Select, Pagination, Radio } from 'semantic-ui-react'
import JobPostingService from "../services/jobPostingService"
import { Popup } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { addToFavorite } from "../store/actions/favoriteActions"

export default function JobPostingList() {

    let jobPostingService = new JobPostingService()

    const dispatch = useDispatch()

    const [jobPostings, setJobPostings] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [pageSize10, setPageSize10] = useState(10)
    const [pageSize20, setPageSize20] = useState(20)
    const [pageSize50, setPageSize50] = useState(50)
    const [pageSize100, setPageSize100] = useState(100)

    function totalPage() {
        let bise = jobPostingService.getJobPosting().then(result => setPageCount(result.data.data.length))
        console.log(bise);
    }

    function handlePageSize10() {
        jobPostingService.getJobPostingPage(pageNo, pageSize10).then(result => setJobPostings(result.data.data))
    }

    function handlePageSize20() {
        jobPostingService.getJobPostingPage(pageNo, pageSize20).then(result => setJobPostings(result.data.data))
    }

    function handlePageSize50() {
        jobPostingService.getJobPostingPage(pageNo, pageSize50).then(result => setJobPostings(result.data.data))
    }

    function handlePageSize100() {
        jobPostingService.getJobPostingPage(pageNo, pageSize100).then(result => setJobPostings(result.data.data))
    }

    useEffect(() => {
        jobPostingService.getJobPostingPage(pageNo, 10).then(result => setJobPostings(result.data.data))
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
            <Select placeholder='' />
            <Header as="h1">
                <Header.Content style={{ color: "#5f86a0" }} >Job Postings</Header.Content>
            </Header>
            <Button onClick={handlePageSize10} circular color='grey'>10</Button>
            <Button onClick={handlePageSize20} circular color='grey'>20</Button>
            <Button onClick={handlePageSize50} circular color='grey'>50</Button>
            <Button onClick={handlePageSize100} circular color='grey'>100</Button>
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
                <Button onClick={totalPage}></Button>
            </Card.Group>
            <Pagination defaultActivePage={1} activePage={pageNo} totalPages={totalPage} />
        </div>
    )
}
