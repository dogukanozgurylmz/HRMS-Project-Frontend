import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
            <Menu pointing secondary vertical>
                <Menu.Item style={{fontSize:"20px"}}
                    as={NavLink} to="/candidates"
                    name='Candidates'
                />
                <Menu.Item style={{fontSize:"20px"}}
                    as={NavLink} to="/employers"
                    name='Employers'
                />
                <Menu.Item style={{fontSize:"20px"}}
                    as={NavLink} to="/jobpostings"
                    name='Job Postings'
                />
            </Menu>
        </div>
    )
}
