import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup";
import LanguageService from '../../../services/languageService';
import { Form } from 'formik-semantic-ui';
import { Message, Modal, Button, Label } from "semantic-ui-react";

export default function LanguageUpdate({ resumeId, language }) {

    const formik = useFormik({
        initialValues: {
            language: language.language,
            langLevel: language.langLevel,
            resumeId: "",
            languageId: ""
        },
        validationSchema: Yup.object({
            language: Yup.string().required("Language is not null"),
            langLevel: Yup.string().required("Language leve is not null")
        }),
        onSubmit: (values) => {
            let languageModel = {
                id: language.id,
                resume: {
                    id: resumeId
                },
                language: values.language,
                langLevel: values.langLevel
            }
            let languageService = new LanguageService()
            languageService.update(languageModel).then(result => result.data.data)
        }
    })

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button color="orange" size="mini" icon="undo"></Button>}
            >
                <Modal.Header>Update to language</Modal.Header>
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
                        <Form.Button fluid color="orange" onClick={formik.handleSubmit}>Update</Form.Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    )
}
