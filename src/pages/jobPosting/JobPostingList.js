import React from 'react'
import { useState, useEffect } from "react";
import { Button, Card, Header, Segment, Pagination, Dropdown, Grid } from 'semantic-ui-react'
import JobPostingService from "../../services/jobPostingService"
import { Popup } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { addToFavorite } from "../../store/actions/favoriteActions"
import JobPostingFilter from './JobPostingFilter';

export default function JobPostingList() {

    let jobPostingService = new JobPostingService()

    const dispatch = useDispatch()

    const [jobPostings, setJobPostings] = useState([])
    const [page, setPage] = useState(1);
    const [totalData, setTotalData] = useState([])
    const [jobPostingFilter, setJobPostingFilter] = useState({});
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        jobPostingService.getByJobPostingFilter(page, pageSize, jobPostingFilter)
            .then((result) => {
                setJobPostings(result.data.data);
            })
            console.log(page,pageSize,jobPostingFilter)
    }, [page, pageSize, jobPostingFilter]);

    useEffect(() => {
        jobPostingService.getJobPosting().then(result=>setTotalData(result.data.data))
    }, [])

    function handleJobPostingFilter(jobPostingFilter) {
        if (jobPostingFilter.cityId.lenght === 0) {
            jobPostingFilter.cityId = null
        }
        if (jobPostingFilter.jobPositionId.lenght === 0) {
            jobPostingFilter.jobPositionId = null
        }
        if (jobPostingFilter.workTypeId.lenght === 0) {
            jobPostingFilter.workTypeId = null
        }
        if (jobPostingFilter.workingTimeId.lenght === 0) {
            jobPostingFilter.workingTimeId = null
        }
        setJobPostingFilter(jobPostingFilter)
        setPage(1)
        console.log(jobPostingFilter)
    }

    const pageSizes = [
        { key: 'pageSize10', text: '10', value: '10' },
        { key: 'pageSize20', text: '20', value: '20' },
        { key: 'pageSize50', text: '50', value: '50' },
        { key: 'pageSize100', text: '100', value: '100' }
    ];

    const handleChangePageSize = (value) => {
        setPageSize(value);
        jobPostingService.getJobPostingPage(page, value)
            .then((result) => { setJobPostings(result.data.data) })
    }

    function handleChangePage(page) {
        setPage(page);
        jobPostingService.getByJobPostingFilter(page, pageSize, jobPostingFilter)
            .then((result) => { setJobPostings(result.data.data) });
    }


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
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <JobPostingFilter clickEvent={handleJobPostingFilter}></JobPostingFilter>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Segment >
                            <Dropdown fluid placeholder="Per page" search selection options={pageSizes} onChange={(e, data) => {
                                handleChangePageSize(data.value)
                            }} ></Dropdown>
                        </Segment>
                        <Header as="h1">
                            <Header.Content style={{ color: "#5f86a0" }} >Job Postings</Header.Content>
                        </Header>
                        <Segment>
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
                        </Segment>
                        <Pagination style={{ marginTop: "2em" }} defaultActivePage={page}
                            onPageChange={(e, data) => {
                                handleChangePage(data.activePage);
                            }}
                            totalPages={Math.ceil(totalData.length / pageSize)} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}