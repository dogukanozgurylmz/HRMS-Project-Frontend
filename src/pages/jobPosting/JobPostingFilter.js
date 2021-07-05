import React, { useEffect, useState } from 'react'
import CityService from "../../services/cityService"
import JobPositionService from "../../services/jobPositionService"
import WorkingTime from "../../services/workingTimeService"
import WorkTypeService from "../../services/workTypeService"
import { Divider, Button, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { addNewFilter, clearFilter } from "../../store/actions/filterActions"


export default function JobPostingFilter() {

    const dispatch = useDispatch()

    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [workingTimes, setWorkingTimes] = useState([])
    const [workTypes, setWorkTypes] = useState([])

    const filters = useSelector(state => state.filter.jobPostingFilterValues)

    const workingTimeOptions = []
    const workTypeOptions = []
    const jobPositionOptions = []
    const cityOptions = []

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

    workingTimes.map(workingTime =>
        workingTimeOptions.push({
            key: workingTime.id,
            text: workingTime.workingTime,
            value: workingTime.id
        })
    )

    workTypes.map(workType =>
        workTypeOptions.push({
            key: workType.id,
            text: workType.workType,
            value: workType.id
        })
    )

    cities.map(city =>
        cityOptions.push({
            key: city.id,
            text: city.cityName,
            value: city.id
        })
    )

    jobPositions.map(jobPosition =>
        jobPositionOptions.push({
            key: jobPosition.id,
            text: jobPosition.position,
            value: jobPosition.id
        })
    )
    const formik = useFormik({
        initialValues: {
            workTypeId: filters.workTypeId,
            workingTimeId: filters.workingTimeId,
            cityId: filters.cityId,
            jobPositionId: filters.jobPositionId
        },
        onSubmit: (values) => {
            dispatch(addNewFilter(values))
        }
    })

    function handleClearFilters() {
        dispatch(clearFilter())
        formik.resetForm(formik.values)
    }

    return (
        <div>
            <Form>
                <div
                    style={{ overflowY: "auto", maxHeight: "200px", margin: "10px 10px" }}
                >
                    <Form.Field label="Work Types" />
                    {
                        workTypeOptions.map(workTypeOption => (
                            <Form.Checkbox
                                onChange={(e, { value }) => {
                                    formik.setFieldValue(
                                        "workTypeId",
                                        formik.values.workTypeId.includes(value)
                                            ? [...formik.values.workTypeId.filter((i) => i !== value)]
                                            : [...formik.values.workTypeId, value]
                                    );
                                }}
                                key={workTypeOption.key}
                                checked={formik.values.workTypeId.includes(workTypeOption.value)}
                                label={workTypeOption.text}
                                value={workTypeOption.value}
                            />
                        ))
                    }
                </div>
                <Divider />
                <div
                    style={{ overflowY: "auto", maxHeight: "200px", margin: "10px 10px" }}
                >
                    <Form.Field label="Working Times" />
                    {
                        workingTimeOptions.map(workingTimeOption => (
                            <Form.Checkbox
                                onChange={(e, { value }) => {
                                    formik.setFieldValue(
                                        "workingTimeId",
                                        formik.values.workingTimeId.includes(value)
                                            ? [...formik.values.workingTimeId.filter((i) => i !== value)]
                                            : [...formik.values.workingTimeId, value]
                                    )
                                }}
                                key={workingTimeOption.key}
                                checked={formik.values.workingTimeId.includes(workingTimeOption.value)}
                                label={workingTimeOption.text}
                                value={workingTimeOption.value}
                            />
                        ))
                    }
                </div>
                <Divider />
                <div
                    style={{ overflowY: "auto", maxHeight: "200px", margin: "10px 10px" }}
                >
                    <Form.Field label="Cities" />
                    {cityOptions.map((cityOption) => (
                        <Form.Checkbox
                            onChange={(e, { value }) => {
                                formik.setFieldValue(
                                    "cityId",
                                    formik.values.cityId.includes(value)
                                        ? [...formik.values.cityId.filter((i) => i !== value)]
                                        : [...formik.values.cityId, value]
                                );
                            }}
                            key={cityOption.key}
                            checked={formik.values.cityId.includes(cityOption.value)}
                            label={cityOption.text}
                            value={cityOption.value}
                        />
                    ))}
                </div>
                <Divider />
                <div
                    style={{ overflowY: "auto", maxHeight: "200px", margin: "10px 10px" }}
                >
                    <Form.Field label="Job Positions" />
                    {jobPositionOptions.map((jobPositionOption) => (
                        <Form.Checkbox
                            onChange={(e, { value }) => {
                                formik.setFieldValue(
                                    "jobPositionId",
                                    formik.values.jobPositionId.includes(value)
                                        ? [...formik.values.jobPositionId.filter((i) => i !== value)]
                                        : [...formik.values.jobPositionId, value]
                                );
                            }}
                            key={jobPositionOption.key}
                            checked={formik.values.jobPositionId.includes(jobPositionOption.value)}
                            label={jobPositionOption.text}
                            value={jobPositionOption.value}
                        />
                    ))}
                </div>
                <Button type="submit" fluid color="green" onClick={formik.handleSubmit} >Filter</Button>
            </Form>
        </div>
    )
}
