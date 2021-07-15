import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import EducationService from '../../../services/educationService';
import { Form } from 'formik-semantic-ui';
import { Message, Modal, Button, Label, Icon } from "semantic-ui-react";
import { toast } from 'react-toastify';

export default function NewEducation({resumeId}) {

    const formik = useFormik({
        initialValues: {
            schoolName: "",
            schoolDepartment: "",
            startedDate: "",
            endedDate: ""
        },
        validationSchema: Yup.object({
            schoolName: Yup.string().required("School name is not null"),
            schoolDepartment: Yup.string().required("School department is not null"),
            startedDate: Yup.date().required("Started date is not null"),
            endedDate: Yup.date()
        }),
        onSubmit: (values) => {
            let educationModel = {
                resume: {
                    id: resumeId
                },
                schoolName:values.schoolName,
                schoolDepartment:values.schoolDepartment,
                startedDate:values.startedDate,
                endedDate:values.endedDate
            }
            let educationService = new EducationService()
            educationService.newEducation(educationModel).then(result => result.data.data)
            toast.success(`${values.schoolName} - ${values.schoolDepartment} added`)
            setOpen(false)
        }
    })

    const [open, setOpen] = React.useState(false)

    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button basic color="blue" > <Icon size="large" name="pencil" />Add to education</Button>}
            >
                <Modal.Header>Add to education</Modal.Header>
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
                            <Form.Input name="startedDate" placeholder="Started Date" value={formik.values.startedDate} onChange={formik.handleChange} />
                            {formik.errors.startedDate && formik.touched.startedDate ? (
                                <Message color="red">{formik.errors.startedDate}</Message>
                            ) : null}
                            <Label basic>Ended Date</Label>
                            <Form.Input name="endedDate" placeholder="Ended Date" value={formik.values.endedDate} onChange={formik.handleChange} />
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
