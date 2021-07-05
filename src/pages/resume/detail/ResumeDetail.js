import React, { useEffect, useState } from 'react'
import { Grid, Segment, Image, Header, Icon, MenuItem, Menu, Label, Rating, Divider, Item } from 'semantic-ui-react'
import ResumeService from '../../../services/resumeService'
import TechnologyService from '../../../services/technologyService'
import LanguageService from '../../../services/languageService'
import EducationService from '../../../services/educationService'
import JobExperiencesService from '../../../services/jobExperienceService'
import { useParams } from 'react-router-dom'

export default function ResumeDetail() {

    let { id } = useParams()

    const [resume, setResume] = useState({})
    const [technologies, setTechnologies] = useState([])
    const [languages, setLanguages] = useState([])
    const [jobExperiences, setJobExperiences] = useState([])
    const [educations, setEducations] = useState([])

    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getById(id).then(result => setResume(result.data.data))
    }, [])

    useEffect(() => {
        let technologyService = new TechnologyService()
        technologyService.getByResumeById(id).then(result => setTechnologies(result.data.data))
    }, [])

    useEffect(() => {
        let languageService = new LanguageService()
        languageService.getByResumeById(id).then(result => setLanguages(result.data.data))
    }, [])

    useEffect(() => {
        let jobExperienceService = new JobExperiencesService()
        jobExperienceService.getByResumeById(id).then(result => setJobExperiences(result.data.data))
    }, [])

    useEffect(() => {
        let educationService = new EducationService()
        educationService.getByResumeById(id).then(result => setEducations(result.data.data))
    }, [])

    return (
        <div>
            <Segment color="blue">
                <Grid>
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
                                    <MenuItem href={resume.githubLink}><Icon size="large" name="github" /></MenuItem>
                                    <MenuItem href={resume.linkedLink}><Icon size="large" name="linkedin" /></MenuItem>
                                </Menu>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header textAlign="left">Technologies</Header>
                            <Segment>
                                {technologies.map(technology => (
                                    <Label size="large" > {technology.description}</Label>
                                ))}
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header textAlign="left">Languages</Header>
                            <Segment>
                                {languages.map(language => (
                                    <Label size="large" >
                                        {language.language}<br />
                                        <Rating disabled defaultRating={language.langLevel} maxRating={3} />
                                    </Label>

                                ))}
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header textAlign="left">Job Experiences</Header>
                            <Segment>
                                {jobExperiences.map(jobExperience => (
                                    <Segment>
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
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                            <Header textAlign="left">Educations</Header>
                            <Segment>
                                {educations.map(education => (
                                    <Segment>
                                        <Item.Group>
                                            <Item >
                                                <Item.Content >
                                                    <Item.Header >{education.schoolName}</Item.Header>
                                                    <Item.Meta >{education.schoolDepartment}</Item.Meta>
                                                    <Item.Meta >{education.graduate?.description}</Item.Meta>
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
                    <Grid.Row>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div >
    )
}
