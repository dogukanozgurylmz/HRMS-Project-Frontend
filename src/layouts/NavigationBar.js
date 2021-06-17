import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Menu} from 'semantic-ui-react'
import SignOut from './SignOut'
import SignIn from './SignIn'

export default function NavigationBar() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut() {
        setIsAuthenticated(false)
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu size='large' fixed="top" inverted pointing  >
                <Container>
                    <Menu.Item as={NavLink} to="/home" >HRMS</Menu.Item>
                    <Menu.Item as={NavLink} to="/employers" >Employers</Menu.Item>
                    <Menu.Item as={NavLink} to="/jobpostings" >Job Postings</Menu.Item>
                    <Menu.Item position='right'>
                        {isAuthenticated?<SignIn signOut={handleSignOut} />:<SignOut signIn={handleSignIn} />}
                    </Menu.Item>
                </Container>
            </Menu>            
        </div>
    )
}
