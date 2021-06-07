import React from 'react'
import { useState, useEffect } from "react";
import { Table, Header, Image, Button } from "semantic-ui-react";
import CandidateUserService from '../services/candidateUserService'

export default function CandidateUserList() {

    const [candidateUsers, setCandidateUsers] = useState([])

    useEffect(() => {
        let candidateUserService = new CandidateUserService()
        candidateUserService.getCandidateUsers().then(result => setCandidateUsers(result.data.data))
    }, [])

    return (
        <div>
            <Header color='grey' as="h2">
                <Header.Content>Candidates</Header.Content>
            </Header>
            <Table basic='very' celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name Surname</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidateUsers.map((candidateUser) => (
                            <Table.Row key={candidateUser.id}>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='/images/avatar/small/lena.png' rounded size='mini' />
                                        <Header.Content>
                                            {candidateUser.firstName} {candidateUser.lastName}
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{candidateUser.emailAddress}</Table.Cell>
                                <Table.Cell>
                                    <Button size='tiny' color='green'>View</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
