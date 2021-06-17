import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

export default function SignIn({signOut}) {
    return (
        <div>
            <Menu.Item style={{maxHeight:"2em"}}>
                <Image avatar spaced="right" src="https://pbs.twimg.com/media/Cfm9jq5WsAENBFS.jpg"/>
                <Dropdown pointing="top right">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Profile" icon="address card outline" />
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
