import React, { useEffect, useState } from 'react'
import CityService from "../../services/cityService"
import JobPositionService from "../../services/jobPositionService"
import WorkingTime from "../../services/workingTimeService"
import WorkTypeService from "../../services/workTypeService"
import { Segment, Checkbox, Header, Button, Dropdown } from 'semantic-ui-react'

export default function JobPostingFilter({ clickEvent }) {

    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [workingTimes, setWorkingTimes] = useState([])
    const [workTypes, setWorkTypes] = useState([])

    const [workTypeIndex] = useState([])
    const [workingTimeIndex] = useState([])
    const [jobPositionIndex, setJobPositionIndex] = useState([])
    const [cityIndex, setCityIndex] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCity().then(result => setCities(result.data.data))

        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))

        let workingTimeService = new WorkingTime()
        workingTimeService.getWorkingTime().then(result => setWorkingTimes(result.data.data))

        let workTypeService = new WorkTypeService()
        workTypeService.getWorkType().then(result => setWorkTypes(result.data.data))
    }, [])

    const handleChangeWorkType = (e, { value }) => {
        workTypeIndex.push(value)
    }

    const handleChangeworkingTime = (e, { value }) => {
        workingTimeIndex.push(value)
    }

    const handleChangeJobPosition = (e, { value }) => {
        setJobPositionIndex(value)
    }

    const handleChangeCity = (e, { value }) => {
        setCityIndex(value)
    }

    return (
        <div>
            <Segment>
                <Header>Work Types</Header>
                {workTypes.map(workType => (
                    <Checkbox onChange={handleChangeWorkType} key={workType.id} label={workType.workType} value={workType.id} />
                ))}
            </Segment>
            <Segment>
                <Header>Working Times</Header>
                {workingTimes.map(workingTime => (
                    <Checkbox onChange={handleChangeworkingTime} key={workingTime.id} label={workingTime.workingTime} name={workingTime.workingTime} value={workingTime.id} />
                ))}
            </Segment>
            <Segment>
                <Header >Job Positions</Header>
                <Dropdown
                    placeholder="Job Positions"
                    selection
                    search
                    multiple
                    clearable
                    options={jobPositions.map((jobPosition, index) => {
                        return { text: jobPosition.position, key: jobPosition.index, value: jobPosition.id }
                    })}
                    onChange={handleChangeJobPosition}
                    value={jobPositionIndex}
                />
            </Segment>
            <Segment>
                <Header >Cities</Header>
                <Dropdown
                    placeholder="Cities"
                    selection
                    search
                    multiple
                    clearable
                    options={cities.map((city, index) => {
                        return { text: city.cityName, key: city.id, value: city.id }
                    })}
                    onChange={handleChangeCity}
                    value={cityIndex}
                />
            </Segment>
            <Button
                type="button"
                fluid
                color="green"
                onClick={() => clickEvent({ cityId: cityIndex, jobPositionId: jobPositionIndex, workTypeId: workTypeIndex, workingTimeId: workingTimeIndex })}
            >
                Filter
            </Button>
        </div>
    )
}
