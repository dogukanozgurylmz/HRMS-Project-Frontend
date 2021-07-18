import React from 'react'
import { useState, useEffect } from "react";
import { Button, Card, Header, Segment, Pagination, Dropdown, Grid, Divider } from 'semantic-ui-react'
import JobPostingService from "../../services/jobPostingService"
import { Popup } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite } from "../../store/actions/favoriteActions"
import JobPostingFilter from './JobPostingFilter';
import { Link } from 'react-router-dom';

export default function JobPostingList() {

    const dispatch = useDispatch()

    const [jobPostings, setJobPostings] = useState([])

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1)
    const [pageSize, setPageSize] = useState(1)
    const [totalData, setTotalData] = useState()

    const filters = useSelector(state => state.filter.jobPostingFilterValues)

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getByJobPostingFilter(page, pageSize, filters)
            .then((result) => {
                setJobPostings(result.data.data.content)
                setTotalPage(result.data.data.totalPages)
                setTotalData(result.data.data.totalElements)
            })

    }, [page, pageSize, filters]);

    const pageSizes = [
        { key: 'pageSize10', text: '10', value: '10' },
        { key: 'pageSize20', text: '20', value: '20' },
        { key: 'pageSize50', text: '50', value: '50' },
        { key: 'pageSize100', text: '100', value: '100' }
    ];

    const handleChangePageSize = (value) => {
        setPageSize(value);
    }

    function handleChangePage(page) {
        setPage(page);
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
                        <JobPostingFilter />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Divider horizontal>{totalData} job postings</Divider>
                        <Segment >
                            <Dropdown fluid placeholder="Per page" search selection options={pageSizes} onChange={(e, data) => {
                                handleChangePageSize(data.value)
                            }} ></Dropdown>
                        </Segment>
                        <Header as="h1">
                            <Header.Content style={{ color: "#5f86a0" }} >Job Postings</Header.Content>
                        </Header>
                        <Segment>
                            <Card.Group centered itemsPerRow={3}>
                                {
                                    jobPostings.map(jobPosting => (
                                        <Card key={jobPosting.id} >
                                            <Popup style={style}
                                                inverted content='Add to favorites'
                                                trigger={<Button color="blue"
                                                    onClick={() => handleAddToFavorite(jobPosting)}
                                                    icon='like' />} />
                                            <Card.Content>
                                                <Card.Header>{jobPosting.employerUser?.companyName}</Card.Header>
                                                <Card.Meta>{jobPosting.employerUser?.webAddress}</Card.Meta>
                                            </Card.Content>
                                            <Card.Content >{jobPosting.jobPosition?.position}</Card.Content>
                                            <Card.Content >Salary: {jobPosting.minSalary} - {jobPosting.maxSalary} TL</Card.Content>
                                            <Card.Content >City: {jobPosting.city.cityName}</Card.Content>
                                            <Card.Content >Application Deadline: {jobPosting.applicationDeadline}</Card.Content>
                                            <Card.Content extra>
                                                <Button fluid><Link to={`/jobPosting/${jobPosting.id}`}>Apply for a job</Link></Button>
                                            </Card.Content>
                                        </Card>

                                    ))
                                }
                            </Card.Group>
                        </Segment>
                        {jobPostings.length<=0?null:<Pagination style={{ marginTop: "2em" }} defaultActivePage={page}
                            onPageChange={(e, data) => {
                                handleChangePage(data.activePage);
                            }}
                            totalPages={totalPage} />}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}