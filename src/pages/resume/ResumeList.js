import React, { useEffect, useState } from 'react'
import ResumeService from "../../services/resumeService"
import TechnologyService from "../../services/technologyService"
import { Card, Segment, Image, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function ResumeList() {

    const [resumes, setResumes] = useState([])

    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getResume().then(result => setResumes(result.data.data))
    }, [])

    return (
        <div>
            <Segment raised color='blue'>
                <Card.Group centered itemsPerRow={3}>
                    {
                        resumes.map(resume => (
                            <Card as={Link} to={`/resume/${resume.id}`} fluid key={resume.id}>
                                <Card.Content>
                                    <Image style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                        src={resume.photo}
                                        bordered
                                        rounded />
                                    <Card.Header style={{ marginTop: "15px" }} textAlign="center">
                                        {resume.candidateUser?.firstName} {resume.candidateUser?.lastName}
                                    </Card.Header>
                                    <Card.Meta>{resume.createdDate}</Card.Meta>
                                </Card.Content>
                            </Card>
                        ))
                    }
                </Card.Group>
            </Segment>
        </div>
    )
}
