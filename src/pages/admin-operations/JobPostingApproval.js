import React, { useEffect, useState } from 'react'
import JobPostingService from '../../services/jobPostingService'
import { Button, Table } from 'semantic-ui-react'

export default function JobPostingApproval() {

    let jobPostingService = new JobPostingService()
    
    let changeActive = (id) => {

        jobPostingService.getChangeStatus(id)
        alert("İş ilanı onaylandı")
        window.location.reload()
    }

    let deleteJobPosting = (id) => {

        jobPostingService.deleteJobPosting(id)
        alert("İş ilanı silindi")
        window.location.reload()
    }

    const [jobPostings, setJobPostings] = useState([])

    useEffect(() => {
        jobPostingService.getByIsActiveFalse().then(result => setJobPostings(result.data.data))
    }, [])

    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Min Salary</Table.HeaderCell>
                        <Table.HeaderCell>Max Salary</Table.HeaderCell>
                        <Table.HeaderCell>Open Job Position</Table.HeaderCell>
                        <Table.HeaderCell>Application Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Approval</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {
                    jobPostings.map(jobPosting => (
                        <Table.Body key={jobPosting.id}>
                            <Table.Row>
                                <Table.Cell>{jobPosting.employerUser.companyName}</Table.Cell>
                                <Table.Cell>{jobPosting.jobPosition.position}</Table.Cell>
                                <Table.Cell>{jobPosting.city.cityName}</Table.Cell>
                                <Table.Cell>{jobPosting.minSalary}</Table.Cell>
                                <Table.Cell>{jobPosting.maxSalary}</Table.Cell>
                                <Table.Cell>{jobPosting.quota}</Table.Cell>
                                <Table.Cell>{jobPosting.applicationDeadline}</Table.Cell>
                                <Table.Cell>{jobPosting.description}</Table.Cell>
                                <Table.Cell>
                                    <Button.Group vertical>
                                        <Button size='mini' color="green" onClick={() => changeActive(jobPosting.id)}>Approval</Button>
                                        <Button size='mini' color="red" onClick={() => deleteJobPosting(jobPosting.id)}>Delete</Button>
                                    </Button.Group>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))
                }

            </Table>
        </div>
    )
}
