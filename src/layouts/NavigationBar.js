import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function NavigationBar() {
    return (
        <div>
            <Menu size='large' fixed="top" pointing inverted color="black">
                <Container>
                    <Menu.Item as={NavLink} to="/home" >HRMS</Menu.Item>
                    <Menu.Item as={NavLink} to="/employers" >Employers</Menu.Item>
                    <Menu.Item as={NavLink} to="/jobpostings" >Job Postings</Menu.Item>
                    <Menu.Item position='right'>
                        <Button >
                            Log in
                        </Button>
                        <Button  style={{ marginLeft: '0.5em' }}>
                            Sign Up
                        </Button>
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    )
}
