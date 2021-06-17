import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import CityList from '../pages/CityList'

export default function Sidebar() {

    return (
        <div>
            <CityList></CityList>
        </div>
    )
}
