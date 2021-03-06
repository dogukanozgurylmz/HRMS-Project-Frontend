import React, { useState } from 'react'
import { Header, Modal, Button, Grid, Segment, Icon, Menu, Label, Rating, Divider, Item } from 'semantic-ui-react'
import LanguageUpdate from './LanguageUpdate'
import NewLanguage from "../post/NewLanguage"
import TechnologyUpdate from './TechnologyUpdate'
import NewTechnology from "../post/NewTechnology"
import EducationUpdate from './EducationUpdate'
import NewEducation from "../post/NewEducation"
import JobExperienceUpdate from "./JobExperienceUpdate"
import NewJobExperience from "../post/NewJobExperience"
import ResumeInfosUpdate from './ResumeInfosUpdate'
import EducationDelete from '../delete/EducationDelete'
import JobExperienceDelete from '../delete/JobExperienceDelete'
import TechnologyDelete from '../delete/TechnologyDelete'
import LanguageDelete from '../delete/LanguageDelete'
import { useParams } from 'react-router-dom'

export default function ResumeUpdate({ resume, technologies, educations, languages, jobExperiences }) {

    let { id } = useParams()

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Modal
                size="small"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button color="orange" floated="right">Update</Button>}
            >
                <Segment color="blue">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <b>Add photo</b>
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
                                    <ResumeInfosUpdate resume={resume} />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header textAlign="left">Technologies</Header>
                                <Segment>
                                    {technologies.map(technology => (
                                        <Segment>
                                            <Item.Group key={technology.id}>
                                                <Item>
                                                    <Item.Content><Label color="blue"> {technology.description}</Label></Item.Content>
                                                    <TechnologyUpdate resumeId={id} technology={technology} />
                                                    <TechnologyDelete technology={technology} />
                                                </Item>
                                            </Item.Group>
                                        </Segment>
                                    ))}
                                    <NewTechnology resumeId={id} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header textAlign="left">Languages</Header>
                                <Segment>
                                    {languages.map(language => (
                                        <Segment>
                                            <Item.Group key={language.id}>
                                                <Item>
                                                    <Item.Content><Label color="blue">{language.language}</Label></Item.Content>
                                                    <Item.Content><Label><Rating disabled defaultRating={language.langLevel} maxRating={3} /></Label></Item.Content>
                                                    <LanguageUpdate resumeId={id} language={language} />
                                                    <LanguageDelete language={language} />
                                                </Item>
                                            </Item.Group>
                                        </Segment>
                                    ))}
                                    <NewLanguage resumeId={id} />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
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
                                                    <JobExperienceUpdate jobExperience={jobExperience} resumeId={id} />
                                                    <JobExperienceDelete jobExperience={jobExperience} />
                                                </Item>
                                            </Item.Group>
                                        </Segment>
                                    ))}
                                    <NewJobExperience resumeId={id} />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Header textAlign="left">Educations</Header>
                                <Segment>
                                    {educations.map(education => (
                                        <Segment key={education.id}>
                                            <Item.Group>
                                                <Item >
                                                    <Item.Content >
                                                        <Item.Header >{education.schoolName}</Item.Header>
                                                        <Item.Meta >{education.schoolDepartment}</Item.Meta>
                                                        <Item.Meta >{education.graduate?.description}</Item.Meta>
                                                        <Item.Description>Started Date: {education.startedDate}</Item.Description>
                                                        {education.endedDate == null ? <Item.Description>Devam ediyor</Item.Description> : <Item.Description>Job departure date: {education.endedDate}</Item.Description>}
                                                    </Item.Content>
                                                    <EducationUpdate resumeId={id} education={education} />
                                                    <EducationDelete education={education} />
                                                </Item>
                                            </Item.Group>
                                        </Segment>
                                    ))}
                                    <NewEducation resumeId={id} />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Modal>
        </div>
    )
}
