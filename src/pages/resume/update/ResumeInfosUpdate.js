import { useFormik } from 'formik'
import * as Yup from "yup";
import React, { useState } from 'react'
import { Message, Grid, Modal, Segment, Icon, Button } from "semantic-ui-react";
import ResumeService from '../../../services/resumeService';
import { Form } from 'formik-semantic-ui';

export default function ResumeInfosUpdate({resume}) {

    const [open, setOpen] = useState(false)

    const formik = useFormik({
        initialValues: {
            resumeId: resume.id,
            githubLink: resume.githubLink,
            linkedLink: resume.linkedLink,
            description: resume.description,
            photo:resume.photo
        },
        validationSchema: Yup.object({
            githubLink: Yup.string(),
            linkedLink: Yup.string(),
            description: Yup.string()
        }),
        onSubmit: (values) => {
            let resumeModel = {
                id:resume.id,
                candidateUser: {
                    id: resume.candidateUser?.id
                },
                photo:resume.photo,
                githubLink: values.githubLink,
                linkedLink: values.linkedLink,
                description: values.description
            }
            let resumeService = new ResumeService()
            resumeService.update(resumeModel).then(result => result.data.data)
        }
    })



    return (
        <div>
            <Modal
                size="small"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button color="orange" size="mini" icon="undo"></Button>}
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
                                        <Form.Button fluid color="orange" onClick={formik.handleSubmit}>Update</Form.Button>
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
