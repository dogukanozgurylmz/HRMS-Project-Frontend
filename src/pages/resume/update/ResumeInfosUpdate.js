import { useFormik } from 'formik'
import * as Yup from "yup";
import React, { useState } from 'react'
import { Message, Grid, Modal, Segment, Icon, Button } from "semantic-ui-react";
import { Form } from 'formik-semantic-ui';
import ResumeService from '../../../services/resumeService';
import { useDispatch } from 'react-redux';
import { resumeUpdate } from '../../../store/actions/resumeActions';

export default function ResumeInfosUpdate({ resume }) {

    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            id: resume.id,
            candidateUser:{
                id:resume.candidateUser?.id
            },
            githubLink: resume.githubLink,
            linkedLink: resume.linkedLink,
            description: resume.description,
            photo: resume.photo
        },
        validationSchema: Yup.object({
            githubLink: Yup.string(),
            linkedLink: Yup.string(),
            description: Yup.string()
        }),
        onSubmit: (values) => {
            dispatch(resumeUpdate(values))
            setOpen(false)
        }
    })
    

    return (
        <div>
            <Modal
                size="small"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button fluid color="orange" size="mini" icon="undo"></Button>}
            >
                <Modal.Header>Update</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>
                                    <Form>
                                        <Form.Group widths={2}>
                                            <Icon name="github" size="big" />
                                            <Form.Input name="githubLink" placeholder="Github Link" value={formik.values.githubLink} onChange={formik.handleChange} />
                                            {formik.errors.githubLink && formik.touched.githubLink ? (
                                                <Message color="red">{formik.errors.githubLink}</Message>
                                            ) : null}
                                            <Icon name="linkedin" size="big" color="blue" />
                                            <Form.Input name="linkedLink" placeholder="LinkedIn Link" value={formik.values.linkedLink} onChange={formik.handleChange} />
                                            {formik.errors.linkedLink && formik.touched.linkedLink ? (
                                                <Message color="red">{formik.errors.linkedLink}</Message>
                                            ) : null}
                                        </Form.Group>
                                        <Form.TextArea label='Description' name="description" placeholder="Description" value={formik.values.description} onChange={formik.handleChange} />
                                        {formik.errors.description && formik.touched.description ? (
                                            <Message color="red">{formik.errors.description}</Message>
                                        ) : null}
                                        <Form.Button type="submit" fluid color="orange" onClick={formik.handleSubmit}>Update</Form.Button>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>

                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        </div>
    )
}
