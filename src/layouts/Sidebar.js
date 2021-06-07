import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
            <Menu pointing secondary vertical>
                <Menu.Item
                    name='Candidates'
                />
                <Menu.Item
                    name='Employers'
                />
                <Menu.Item
                    name='Job Postings'
                />
            </Menu>
        </div>
    )
}
