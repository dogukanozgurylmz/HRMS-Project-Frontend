import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { Form } from 'formik-semantic-ui';
import { Message, Modal, Button, Label, Icon } from "semantic-ui-react";
import JobPositionService from '../../../services/jobPositionService';
import JobExperienceService from "../../../services/jobExperienceService"
import { toast } from 'react-toastify';

export default function NewJobExperience({resumeId}) {

    const [jobPositions, setJobPositions] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))
    }, [])

    const formik = useFormik({
        initialValues: {
            companyName: "",
            jobPositionId: "",
            startedDate: "",
            endedDate: ""
        },
        validationSchema: Yup.object({
            companyName: Yup.string().required("Company name is not null"),
            jobPositionId: Yup.string().required("Job Position is not null"),
            startedDate: Yup.date().required("Started date is not null"),
            endedDate: Yup.date()
        }),
        onSubmit: (values) => {
            let jobExperienceModal = {
                jobPosition: {
                    id: values.jobPositionId
                },
                resume: {
                    id: resumeId
                },
                companyName: values.companyName,
                startedDate: values.startedDate,
                endedDate: values.endedDate
            }
            let jobExperienceService = new JobExperienceService()
            jobExperienceService.newJobExperience(jobExperienceModal).then(result => result.data.data)
            toast.success(`Job experience added`)
            setOpen(false)
        }
    })

    const handleChangeSemantic = (field, value) => {
        formik.setFieldValue(field, value);
    }

    const jobPositionOptions = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.position,
        value: jobPosition.id
    }))

    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button basic color="blue" > <Icon size="large" name="pencil" />Add to job experience</Button>}
            >
                <Modal.Header>Add to job experience</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group widths={2}>
                            <Label basic>Company Name</Label>
                            <Form.Input name="companyName" placeholder="Company Name" value={formik.values.companyName} onChange={formik.handleChange} />
                            {formik.errors.companyName && formik.touched.companyName ? (
                                <Message color="red">{formik.errors.companyName}</Message>
                            ) : null}
                            <Label basic>Job Position</Label>
                            <Form.Dropdown placeholder="Select Job" selection search value={formik.values.jobPositionId} options={jobPositionOptions} onChange={(event, data) => {
                                handleChangeSemantic("jobPositionId", data.value)
                            }} />
                            {formik.errors.jobPositionId && formik.touched.jobPositionId ? (
                                <Message color="red">{formik.errors.jobPositionId}</Message>
                            ) : null}
                        </Form.Group>
                        <Form.Group widths={2}>
                            <Label basic>Started Date</Label>
                            <Form.Input name="startedDate" placeholder="YYYY-AA-GG" value={formik.values.startedDate} onChange={formik.handleChange} />
                            {formik.errors.startedDate && formik.touched.startedDate ? (
                                <Message color="red">{formik.errors.startedDate}</Message>
                            ) : null}
                            <Label basic>Ended Date</Label>
                            <Form.Input name="endedDate" placeholder="YYYY-AA-GG" value={formik.values.endedDate} onChange={formik.handleChange} />
                            {formik.errors.endedDate && formik.touched.endedDate ? (
                                <Message color="red">{formik.errors.endedDate}</Message>
                            ) : null}
                        </Form.Group>
                        <Form.Button fluid color="green" onClick={formik.handleSubmit}>Save</Form.Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    )
}
