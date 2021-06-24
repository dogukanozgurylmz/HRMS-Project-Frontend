import { useFormik } from 'formik'
import * as Yup from "yup";
import React, { useEffect, useState } from 'react'
import { Form, Message, Grid, Image, Button } from "semantic-ui-react";
import ResumeService from '../../services/resumeService';

export default function NewResume() {

    const [resumes, setResumes] = useState([])

    const resumeId = resumes.map(resume => resume.id)

    const formik = useFormik({
        initialValues: {
            githubLink: "",
            linkedLink: "",
            photo: null,
            description: "",

        },
        validationSchema: Yup.object({
            githubLink: Yup.string().url("Must be in URL format"),
            linkedLink: Yup.string().url("Must be in URL format"),
            photo: Yup.string().url().required("Photo is not null"),
            description: Yup.string()
        }),
        onSubmit: (values) => {
            let resumeModel = {
                githubLink: values.githubLink,
                linkedLink: values.linkedLink,
                photo: values.photo,
                description: values.description
            }
            let resumeService = new ResumeService()
            resumeService.saveImage(resumeId)
            resumeService.newResume(resumeModel).then(result => result.data.data)
        }
    })

    return (
        <div>
            <Grid>
                <Grid.Column>
                    <Image
                        style={{ width: "300px", height: "300px" }}
                        fluid
                        label={{ as: 'a', color: 'red', corner: 'right', icon: 'save' }}
                        src={formik.values.photo}
                    />
                    <Button></Button>
                </Grid.Column>
            </Grid>
            <Form>
                <Form.Group widths={2}>
                    <Form.Input label="Github Link" name="githubLink" placeholder="Github Link" value={formik.values.githubLink} onChange={formik.handleChange} />
                    {formik.errors.githubLink && formik.touched.githubLink ? (
                        <Message color="red">{formik.errors.githubLink}</Message>
                    ) : null}
                    <Form.Input label="LinkedIn Link" name="linkedLink" placeholder="LinkedIn Link" value={formik.values.linkedLinkLink} onChange={formik.handleChange} />
                    {formik.errors.linkedLink && formik.touched.linkedLink ? (
                        <Message color="red">{formik.errors.linkedLink}</Message>
                    ) : null}
                </Form.Group>
                <Form.TextArea label='Description' required name="description" placeholder="Description" value={formik.values.description} onChange={formik.handleChange} />
                {formik.errors.description && formik.touched.description ? (
                    <Message color="red">{formik.errors.description}</Message>
                ) : null}
                <Form.Button onClick={formik.handleSubmit} type="submit" positive>Submit</Form.Button>

            </Form>
        </div>
    )
}
