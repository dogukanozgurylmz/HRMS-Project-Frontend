import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, Form,Message,Checkbox,Radio} from "semantic-ui-react";
import JobPostingService from '../../services/jobPostingService';
import CityService from '../../services/cityService';
import EmployerUserService from '../../services/employerUserService';
import JobPositionService from '../../services/jobPositionService';
import WorkingTimeService from '../../services/workingTimeService';
import WorkTypeService from "../../services/workTypeService";

export default function NewJobPosting() {

    const [employerUsers, setEmployerUsers] = useState([])
    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [workingTimes, setWorkingTimes] = useState([])
    const [workTypes, setWorkTypes] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCity().then(result => setCities(result.data.data))
        let employerUserService = new EmployerUserService()
        employerUserService.getEmployerUser().then(result => setEmployerUsers(result.data.data))
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))
        let workingTimeService = new WorkingTimeService()
        workingTimeService.getWorkingTime().then(result => setWorkingTimes(result.data.data))
        let workTypeService = new WorkTypeService()
        workTypeService.getWorkType().then(result => setWorkTypes(result.data.data))
    }, [])

    const formik = useFormik({
        initialValues: {
            description: "",
            quota: "",
            applicationDeadline: "",
            minSalary: 0,
            maxSalary: 0,
            employerId: "",
            cityId: "",
            jobPositionId: "",
            workingTimeId: "",
            workTypeId: "",
        },
        validationSchema: Yup.object({
            description: Yup.string().required("Description is not null"),
            quota: Yup.number().required("Open position is not null"),
            applicationDeadline: Yup.date().required("Application deadline is not null"),
            minSalary: Yup.number(),
            maxSalary: Yup.number(),
            employerId: Yup.number(),
            cityId: Yup.number().required("City is not null"),
            jobPositionId: Yup.number().required("Job position is not null"),
            workingTimeId: Yup.number().required("Working time is not null"),
            workTypeId: Yup.number().required("Work type is not null"),
        }),
        onSubmit: (values) => {
            let jobPostingModel = {
                jobPosition: {
                    id: values.jobPositionId
                },
                employerUser: {
                    id: 45
                },
                city: {
                    id: values.cityId
                },
                workingTime: {
                    id: values.workingTimeId
                },
                workType: {
                    id: values.workTypeId
                },
                description: values.description,
                quota: values.quota,
                applicationDeadline: values.applicationDeadline,
                minSalary: values.minSalary,
                maxSalary: values.maxSalary,
            };

            let jobPostingService = new JobPostingService();
            jobPostingService.newJobPosting(jobPostingModel).then((result) => result.data.data);
        },
    });

    const handleChangeSemantic = (field, value) => {
        formik.setFieldValue(field, value);
    }

    const jobPositionOptions = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.position,
        value: jobPosition.id
    }))

    const citiesOptions = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id
    }))

    const workingTimeOptions = workingTimes.map((workingTime, index) => ({
        key: index,
        text: workingTime.workingTime,
        value: workingTime.id
    }))

    const workTypeOption = workTypes.map((workType, index) => ({
        key: index,
        text: workType.workType,
        value: workType.id
    }))


    return (
        <div>
            <Form>

                <Form.Group widths={2}>
                    <Form.Dropdown required label="Job Positions" placeholder="Select Job" selection search value={formik.values.jobPositionId} options={jobPositionOptions} onChange={(event, data) => {
                        handleChangeSemantic("jobPositionId", data.value)
                    }} />
                    {formik.errors.jobPositionId && formik.touched.jobTitleId ? (
                        <Message color="red">{formik.errors.jobPositionId}</Message>
                    ) : null}
                    <Form.Dropdown required label="Cities" placeholder="Select City" selection search value={formik.values.cityId} options={citiesOptions} onChange={(event, data) => {
                        handleChangeSemantic("cityId", data.value)
                    }} />
                    {formik.errors.cityId && formik.touched.cityId ? (
                        <Message color="red">{formik.errors.cityId}</Message>
                    ) : null}
                </Form.Group>
                <Form.Group widths={3}>
                    <Form.Input label=" Minimum Salary" name="minSalary" placeholder='Minimum Salary' value={formik.values.minSalary} onChange={formik.handleChange} />
                    {
                        formik.errors.minSalary && formik.touched.minSalary ? (
                            <Message color="red">{formik.errors.minSalary}</Message>
                        ) : null

                    }
                    <Form.Input label=" Maximum Salary" name="maxSalary" placeholder='Maximum Salary' value={formik.values.maxSalary} onChange={formik.handleChange} />
                    {
                        formik.errors.maxSalary && formik.touched.maxSalary ? (
                            <Message color="red">{formik.errors.maxSalary}</Message>
                        ) : null

                    }
                    <Form.Input required label="Open position count" name="quota" placeholder="Open position count" value={formik.values.quota} onChange={formik.handleChange} />
                    {formik.errors.quota && formik.touched.quota ? (
                        <Message color="red">{formik.errors.quota}</Message>
                    ) : null}
                </Form.Group>
                <Form.Group >
                    <Form.Input required width={6} label="Application Deadline" name="applicationDeadline" placeholder="Application deadline" value={formik.values.applicationDeadline} onChange={formik.handleChange} />
                    {formik.errors.applicationDeadline && formik.touched.applicationDeadline ? (
                        <Message color="red">{formik.errors.applicationDeadline}</Message>
                    ) : null}
                    <Form.Field style={{ marginLeft: "30px" }} >
                        <Form.Dropdown required label="Working Time" placeholder="Select working time" selection search value={formik.values.workingTimeId} options={workingTimeOptions} onChange={(event, data) => {
                            handleChangeSemantic("workingTimeId", data.value)
                        }} />
                        {formik.errors.employmentTypeId && formik.touched.employmentTypeId ? (
                            <Message color="red">{formik.errors.workingTimeId}</Message>
                        ) : null}
                    </Form.Field>
                    <Form.Field style={{ marginLeft: "150px" }} >
                        <Form.Dropdown required label="Work Type" placeholder="Select work type" selection search value={formik.values.workTypeId} options={workTypeOption} onChange={(event, data) => {
                            handleChangeSemantic("workTypeId", data.value)
                        }} />
                        {formik.errors.workTypeId && formik.touched.workTypeId ? (
                            <Message color="red">{formik.errors.workTypeId}</Message>
                        ) : null}
                    </Form.Field>

                </Form.Group>

                <Form.TextArea label='Description' required name="description" placeholder="Description" value={formik.values.description} onChange={formik.handleChange} />
                {formik.errors.description && formik.touched.description ? (
                    <Message color="red">{formik.errors.description}</Message>
                ) : null}
                <Form.Button onClick={formik.handleSubmit} type="submit" positive>Submit</Form.Button>

            </Form>
        </div >
    )
}
