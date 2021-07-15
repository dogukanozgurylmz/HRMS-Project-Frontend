import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import LanguageService from '../../../services/languageService';
import { Form } from 'formik-semantic-ui';
import { Message, Modal, Button, Label, Icon } from "semantic-ui-react";
import { toast } from 'react-toastify';

export default function NewLanguage({ resumeId }) {

    const formik = useFormik({
        initialValues: {
            language: "",
            langLevel: ""
        },
        validationSchema: Yup.object({
            language: Yup.string().required("Language is not null"),
            langLevel: Yup.string().required("Language leve is not null")
        }),
        onSubmit: (values) => {
            let languageModel = {
                resume:{
                    id:resumeId
                },
                language: values.language,
                langLevel: values.langLevel
            }
            let languageService = new LanguageService()
            languageService.newLanguage(languageModel).then(result => result.data.data)
            toast.success(`${values.language} added`)
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
                trigger={<Button basic color="blue" > <Icon size="large" name="language" />Add to language</Button>}
            >
                <Modal.Header>Add to language</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group widths={2}>
                            <Label basic>Language</Label>
                            <Form.Input name="language" placeholder="Language" value={formik.values.language} onChange={formik.handleChange} />
                            {formik.errors.language && formik.touched.language ? (
                                <Message color="red">{formik.errors.language}</Message>
                            ) : null}
                            <Label basic>Language Level</Label>
                            <Form.Input name="langLevel" placeholder="Language Level" value={formik.values.langLevel} onChange={formik.handleChange} />
                            {formik.errors.langLevel && formik.touched.langLevel ? (
                                <Message color="red">{formik.errors.langLevel}</Message>
                            ) : null}
                        </Form.Group>
                        <Form.Button fluid color="green" onClick={formik.handleSubmit}>Save</Form.Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    )
}
