import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import SignOut from './SignOut'
import SignIn from './SignIn'
import FavoriteSummary from './FavoriteSummary'
import { useSelector } from 'react-redux'

export default function NavigationBar() {

    const { favoriteItems } = useSelector(state => state.favorite)

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut() {
        setIsAuthenticated(false)
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu size='large' color="blue" fixed="top" inverted pointing  >
                <Container>
                    <Menu.Item as={NavLink} to="/home" >HRMS</Menu.Item>
                    <Menu.Item as={NavLink} to="/employers" >Employers</Menu.Item>
                    <Menu.Item as={NavLink} to="/jobpostings" >Job Postings</Menu.Item>
                    <Menu.Item as={NavLink} to="/resumes" >Resumes</Menu.Item>
                    <Menu.Item position='right'>
                    {favoriteItems.length>0&&<FavoriteSummary/>}
                        {isAuthenticated?<SignIn signOut={handleSignOut} />:<SignOut signIn={handleSignIn} />}
                    </Menu.Item>
                </Container>
            </Menu>            
        </div>
    )
}
