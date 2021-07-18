import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { Form } from 'formik-semantic-ui';
import { Message, Modal, Button, Label, Icon } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import { technologyAdd } from '../../../store/actions/technologyActions';

export default function NewTechnology({resumeId}) {

    const dispatch=useDispatch()

    const formik = useFormik({
        initialValues: {
            resumeId:  resumeId,
            description: ""
        },
        validationSchema: Yup.object({
            description: Yup.string().required("Technology is not null"),
        }),
        onSubmit: (values) => {
            dispatch(technologyAdd(values))
            setOpen(false)
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
