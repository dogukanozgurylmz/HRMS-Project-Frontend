import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import JobPostingService from '../../services/jobPostingService';
import CityService from '../../services/cityService';
import EmployerUserService from '../../services/employerUserService';
import JobPositionService from '../../services/jobPositionService';

export default function NewJobPosting() {

    const [jobPostings, setJobPostings] = useState([])
    const [employerUsers, setEmployerUsers] = useState([])
    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPosting().then(result=>setJobPostings(result.data.data))
        let cityService = new CityService()
        cityService.getCity().then(result=>setCities(result.data.data))
        let employerUserService = new EmployerUserService()
        employerUserService.getEmployerUser().then(result=>setEmployerUsers(result.data.data))
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then(result=>setJobPositions(result.data.data))
    }, [])

    return (
        <div>
            
        </div>
    )
}
