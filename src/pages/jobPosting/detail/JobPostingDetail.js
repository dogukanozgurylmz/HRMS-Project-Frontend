import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Segment, Header, Divider, Grid, Item } from 'semantic-ui-react'
import JobPostingService from '../../../services/jobPostingService'

export default function JobPostingDetail() {

    let { id } = useParams()

    const [jobPosting, setJobPosting] = useState({})

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getById(id).then(result => setJobPosting(result.data.data))
    }, [id])

    return (
        <div>
            <Segment placeholder>
            <Header textAlign="left" href={jobPosting.employerUser?.webAddress} size="huge">{jobPosting.employerUser?.companyName}</Header>
                <Grid>
                    <Grid.Row >
                        <Grid.Column textAlign="left" width="10">
                            <Segment color="blue">
                                <Item.Group>
                                    <Item>
                                        <Item.Content>
                                            <Item.Header style={{fontSize:"24px"}}>{jobPosting.jobPosition?.position}</Item.Header>
                                            <Item.Extra href={jobPosting.employerUser?.webAddress}>{jobPosting.employerUser?.webAddress}</Item.Extra>
                                            <Item.Extra>{jobPosting.releaseDate}</Item.Extra>
                                            <Divider/>
                                            <Item.Description><b>About the job posting:</b></Item.Description>
                                            <Item.Description>{jobPosting.description}</Item.Description>
                                        </Item.Content>
                                    </Item>
                                </Item.Group>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width="6">
                            <Segment color="blue">
                            <Item.Group>
                                <Item>
                                    <Item.Content>
                                        <Item.Description>Salary: {jobPosting.minSalary}₺ - {jobPosting.maxSalary}₺</Item.Description>
                                        <Divider/>
                                        <Item.Description>Open Position Number: {jobPosting.quota}</Item.Description>
                                        <Divider/>
                                        <Item.Description>{jobPosting.workType?.workType}</Item.Description>
                                        <Divider/>
                                        <Item.Description>{jobPosting.workingTime?.workingTime}</Item.Description>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}
