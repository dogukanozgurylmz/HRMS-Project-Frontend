import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import EducationService from '../../../services/educationService';
import { Form } from 'formik-semantic-ui';
import { Message, Modal, Button, Label} from "semantic-ui-react";

export default function EducationUpdate({ resumeId, education }) {

    const formik = useFormik({
        initialValues: {
            schoolName: education.schoolName,
            schoolDepartment: education.schoolDepartment,
            startedDate: education.startedDate,
            endedDate: education.endedDate,
            resumeId:"",
            educationId:""
        },
        validationSchema: Yup.object({
            schoolName: Yup.string().required("School name is not null"),
            schoolDepartment: Yup.string().required("School department is not null"),
            startedDate: Yup.date().required("Started date is not null"),
            endedDate: Yup.date()
        }),
        onSubmit: (values) => {
            let educationModel = {
                id:education.id,
                resume: {
                    id: resumeId
                },
                schoolName: values.schoolName,
                schoolDepartment: values.schoolDepartment,
                startedDate: values.startedDate,
                endedDate: values.endedDate
            }
            let educationService = new EducationService()
            educationService.newEducation(educationModel).then(result => result.data.data)
        }
    })

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Modal
                size="small"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button color="orange" size="mini" icon="undo"></Button>}
            >
                <Modal.Header>Update to education</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group widths={2}>
                            <Label basic>School Name</Label>
                            <Form.Input name="schoolName" placeholder="School Name" value={formik.values.schoolName} onChange={formik.handleChange} />
                            {formik.errors.schoolName && formik.touched.schoolName ? (
                                <Message color="red">{formik.errors.schoolName}</Message>
                            ) : null}
                            <Label basic>School Department</Label>
                            <Form.Input name="schoolDepartment" placeholder="School Department" value={formik.values.schoolDepartment} onChange={formik.handleChange} />
                            {formik.errors.schoolDepartment && formik.touched.schoolDepartment ? (
                                <Message color="red">{formik.errors.schoolDepartment}</Message>
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
                        <Form.Button fluid color="orange" onClick={formik.handleSubmit}>Update</Form.Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    )
}

