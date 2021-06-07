import React from 'react'
import { useState, useEffect } from "react";
import { Table, Header, Image, Button } from "semantic-ui-react";
import EmployerUserService from "../services/employerUserService"

export default function EmployerUserList() {

    const [employerUsers, setEmployerUsers] = useState([])

    useEffect(() => {
        let employerUserService = new EmployerUserService()
        employerUserService.getEmployerUser().then(result => setEmployerUsers(result.data.data))
    }, [])

    return (
        <div>
            <Header color='grey' as="h2">
                <Header.Content>Employers</Header.Content>
            </Header>
            <Table basic='very' celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Web Site</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employerUsers.map((employerUser) => (
                            <Table.Row key={employerUser.id}>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='/images/avatar/small/lena.png' rounded size='mini' />
                                        <Header.Content>
                                            {employerUser.companyName}
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{employerUser.webAddress}</Table.Cell>
                                <Table.Cell>{employerUser.phoneNumber}</Table.Cell>
                                <Table.Cell>{employerUser.emailAddress}</Table.Cell>
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
