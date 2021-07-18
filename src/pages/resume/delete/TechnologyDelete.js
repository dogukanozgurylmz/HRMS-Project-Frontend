import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { technologyDelete } from '../../../store/actions/technologyActions'

export default function TechnologyDelete({technology}) {

    const dispatch = useDispatch()

    function deleteTechnology() {
        dispatch(technologyDelete(technology.id))
    }

    return (
        <div>
            <Button size="mini" onClick={() => deleteTechnology()} color="red" icon="delete"></Button>
        </div>
    )
}
