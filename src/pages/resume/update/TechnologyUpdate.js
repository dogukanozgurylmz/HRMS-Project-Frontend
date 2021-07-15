import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import TechnologyService from '../../../services/technologyService';
import { Form } from 'formik-semantic-ui';
import { Message, Modal, Button, Label } from "semantic-ui-react";
import { toast } from 'react-toastify';

export default function TechnologyUpdate({ resumeId, technology }) {

    const formik = useFormik({
        initialValues: {
            description: technology.description,
            resumeId: "",
            technologyId: ""
        },
        validationSchema: Yup.object({
            description: Yup.string().required("Technology is not null"),
        }),
        onSubmit: (values) => {
            let technologyModel = {
                id: technology.id,
                resume: {
                    id: resumeId
                },
                description: values.description
            }
            let technologyService = new TechnologyService()
            technologyService.update(technologyModel).then(result => result.data.data)
            toast.success("Technology updated")
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
                trigger={<Button color="orange" size="mini" icon="undo"></Button>}
            >
                <Modal.Header>Update to technology</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group widths="2">
                            <Label basic>Technology</Label>
                            <Form.Input name="description" placeholder="Technology" value={formik.values.description} onChange={formik.handleChange} />
                            {formik.errors.description && formik.touched.description ? (
                                <Message color="red">{formik.errors.description}</Message>
                            ) : null}
                        </Form.Group>
                        <Form.Button fluid color="orange" onClick={formik.handleSubmit}>Update</Form.Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    )
}
