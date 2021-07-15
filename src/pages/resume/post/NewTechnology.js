import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import TechnologyService from '../../../services/technologyService';
import { Form } from 'formik-semantic-ui';
import { Message, Modal, Button, Label, Icon } from "semantic-ui-react";
import { toast } from 'react-toastify';

export default function NewTechnology({resumeId}) {

    const formik = useFormik({
        initialValues: {
            description: ""
        },
        validationSchema: Yup.object({
            description: Yup.string().required("Technology is not null"),
        }),
        onSubmit: (values) => {
            let technologyModel = {
                resume: {
                    id: resumeId
                },
                description:values.description
            }
            let technologyService = new TechnologyService()
            technologyService.newTechnology(technologyModel).then(result => result.data.data)
            toast.success(`${values.description} added`)
            setOpen(false)
        }
    })

    const [open, setOpen] = React.useState(false)

    return (
        <div>
            <Modal
                size="small"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button basic color="blue" > <Icon size="large" name="th" />Add to technology</Button>}
            >
                <Modal.Header>Add to technology</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group >
                            <Label basic>Technology</Label>
                            <Form.Input name="description" placeholder="Technology" value={formik.values.description} onChange={formik.handleChange} />
                            {formik.errors.description && formik.touched.description ? (
                                <Message color="red">{formik.errors.description}</Message>
                            ) : null}
                        </Form.Group>
                        <Form.Button fluid color="green" onClick={formik.handleSubmit}>Save</Form.Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    )
}
