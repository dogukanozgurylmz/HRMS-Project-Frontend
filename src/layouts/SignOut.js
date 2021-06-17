import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({signIn}) {
    return (
        <div>
            <Menu.Item style={{maxHeight:"2em"}}>
                <Button onClick={signIn} >
                    Log in
                </Button>
                <Button style={{ marginLeft: '0.5em' }}>
                    Sign Up
                </Button>
            </Menu.Item>
        </div>
    )
}
