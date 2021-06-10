import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function NavigationBar() {
    return (
        <div>
            <Menu fixed='top' inverted size='large'>
                <Container>
                    <Menu.Item as={NavLink} to="/home" name='HRMS' />
                    <Menu.Item name='Home' />
                    <Menu.Item name='Job Postings' />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button.Group>
                                <Button>Sign In</Button>
                                <Button.Or />
                                <Button positive>Register</Button>
                            </Button.Group>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
