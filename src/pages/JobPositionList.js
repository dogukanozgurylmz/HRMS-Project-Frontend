import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService';

export default function JobPositionList() {

    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then(result=>setJobPositions(result.data.data))
    }, [])

    return (
        <div>
            <Form>
                <Form.Group>
                    <select>
                        {jobPositions.map(jobPosition => (

                            <option key={jobPosition.id}>{jobPosition.position}</option>

                        ))}
                    </select>
                </Form.Group>
            </Form>
        </div>
    )
}
