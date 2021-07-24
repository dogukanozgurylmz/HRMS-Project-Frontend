import React, { useEffect, useState } from 'react'
import { Grid, Segment, Image, Header, Icon, Menu, Label, Rating, Divider, Item } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import ResumeUpdate from '../update/ResumeUpdate'
import { useDispatch, useSelector } from 'react-redux'
import { getById } from '../../../store/actions/resumeActions'
import { getTechnologyByResumeId } from '../../../store/actions/technologyActions'
import { getLanguageByResumeId } from '../../../store/actions/languageActions'
import ResumeService from '../../../services/resumeService'

export default function ResumeDetail() {

    let { id } = useParams()
    
    const [resume, setResume] = useState({})
    const [jobExperiences, setJobExperiences] = useState([])
    const [educations, setEducations] = useState([])

    //const resume = useSelector(state => state.resume.resume)
    const technologies = useSelector(state => state.technology)
    const languages = useSelector(state => state.language)
    const dispatch = useDispatch()

    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getById(id).then(result=>setResume(result.data.data))
        resume_(resume)
        console.log(id)
    }, [id])

    let resume_ =(resume)=>{
        setResume(resume)
    }

    useEffect(() => {
        dispatch(getLanguageByResumeId(id))
    }, [id,dispatch])

    useEffect(() => {
        dispatch(getTechnologyByResumeId(id)) 
    }, [id,dispatch])

    return (
        <div>
            <Segment color="blue">
                <Grid textAlign="left">
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Segment>
                                <Image centered src={resume.photo} style={{ width: "255px", height: "255px", objectFit: "cover" }} />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Segment textAlign="left">
                                <Header size="small">First Name: {resume.candidateUser?.firstName}</Header>
                                <Header size="small">Last Name: {resume.candidateUser?.lastName}</Header>
                                <Header size="small">Doğum Tarihi: {resume.candidateUser?.birthOfDate}</Header>
                                <Header size="small">Description:</Header>
                                <Header.Content>{resume.description}</Header.Content>
                                <Menu widths="2">
                                    <Menu.Item href={resume.githubLink}><Icon size="large" name="github" /></Menu.Item>
                                    <Menu.Item href={resume.linkedLink}><Icon size="large" name="linkedin" /></Menu.Item>
                                </Menu>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header textAlign="left">Technologies</Header>
                            <Segment>
                                {technologies.technologies.map(technology => (
                                    <Label key={technology.id} size="large" > {technology.description}</Label>
                                ))}
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header textAlign="left">Languages</Header>
                            <Segment>
                                {languages.languages.map(language => (
                                    <Label key={language.id} size="large" >
                                        {language.language}<br />
                                        <Rating disabled defaultRating={language.langLevel} maxRating={3} />
                                    </Label>

                                ))}
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header textAlign="left">Job Experiences</Header>
                            <Segment>
                                {jobExperiences.map(jobExperience => (
                                    <Segment key={jobExperience.id}>
                                        <Item.Group>
                                            <Item >
                                                <Item.Content >
                                                    <Item.Header >{jobExperience.companyName}</Item.Header>
                                                    <Divider />
                                                    <Item.Meta >{jobExperience.jobPosition?.position}</Item.Meta>
                                                    <Item.Description>Started Date: {jobExperience.startedDate}</Item.Description>
                                                    {jobExperience.endedDate == null ? <Item.Description>Devam ediyor</Item.Description> : <Item.Description>Job departure date: {jobExperience.endedDate}</Item.Description>}
                                                </Item.Content>
                                            </Item>
                                        </Item.Group>
                                    </Segment>
                                ))}
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header textAlign="left">Educations</Header>
                            <Segment>
                                {educations.map(education => (
                                    <Segment key={education.id}>
                                        <Item.Group>
                                            <Item >
                                                <Item.Content>
                                                    <Item.Header >{education.schoolName}</Item.Header>
                                                    <Divider />
                                                    <Item.Description >{education.schoolDepartment}</Item.Description>
                                                    <Item.Description >{education.graduate?.description}</Item.Description>
                                                    <Item.Description>Started Date: {education.startedDate}</Item.Description>
                                                    {education.endedDate == null ? <Item.Description>Devam ediyor</Item.Description> : <Item.Description>Job departure date: {education.endedDate}</Item.Description>}
                                                </Item.Content>
                                            </Item>
                                        </Item.Group>
                                    </Segment>
                                ))}
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <ResumeUpdate educations={educations} jobExperiences={jobExperiences} languages={languages.languages} resume={resume} technologies={technologies.technologies} />
        </div >
    )
}