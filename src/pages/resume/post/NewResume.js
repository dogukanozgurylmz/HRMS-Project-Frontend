import { useFormik } from 'formik'
import * as Yup from "yup";
import React from 'react'
import { Message, Grid, Image, Button, Input, Menu, Icon } from "semantic-ui-react";
import ResumeService from '../../../services/resumeService';
import { Form } from 'formik-semantic-ui';
import NewLanguage from './NewLanguage';
import NewTechnology from './NewTechnology';
import NewEducation from './NewEducation';
import NewJobExperience from './NewJobExperience';

export default function NewResume() {


    const formik = useFormik({
        initialValues: {
            githubLink: "",
            linkedLink: "",
            photo: "",
            description: "",

        },
        validationSchema: Yup.object({
            githubLink: Yup.string(),
            linkedLink: Yup.string(),
            photo: Yup.string(),
            description: Yup.string()
        }),
        onSubmit: (values) => {
            let resumeModel = {
                candidateUser: {
                    id: 47
                },
                githubLink: values.githubLink,
                linkedLink: values.linkedLink,
                photo: values.photo,
                description: values.description
            }
            let resumeService = new ResumeService()
            resumeService.newResume(resumeModel).then(result => result.data.data)
        }
    })

    return (
        <div>
            <Grid>
                <Grid.Column width={4}>
                    <Image
                        style={{ width: "250px", height: "250px" }}
                        fluid
                    />
                </Grid.Column>
                <Grid.Column width={12}>
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
                        <Form.TextArea label='Description' required name="description" placeholder="Description" value={formik.values.description} onChange={formik.handleChange} />
                        {formik.errors.description && formik.touched.description ? (
                            <Message color="red">{formik.errors.description}</Message>
                        ) : null}
                    </Form>
                    <Form.Button style={{ marginTop: "20px" }} fluid color="green" onClick={formik.handleSubmit}>Save</Form.Button>
                </Grid.Column>
                <Grid.Row>
                    <Grid.Column>
                        <Menu tabular widths={4}>
                            <Menu.Item><NewLanguage/></Menu.Item>
                            <Menu.Item><NewTechnology/></Menu.Item>
                            <Menu.Item><NewEducation/></Menu.Item>
                            <Menu.Item><NewJobExperience/></Menu.Item>
                        </Menu>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
