import React from 'react'
import AuthService from '../../services/authService'
import { Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { useFormik } from "formik";
import * as Yup from "yup";

export default function CandidateRegister() {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            nationalityIdentity: "",
            birthOfDate: "",
            emailAddress: "",
            password: "",
            passwordRepeat: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is not null"),
            lastName: Yup.string().required("Last Name is not null"),
            emailAddress: Yup.string().email().required("E-mail is not null"),
            nationalityIdentity: Yup.number().required("Nationality Identity is not null"),
            birthOfDate: Yup.date().required("Birth Of Date is not null"),
            password: Yup.string().required("Password is not null"),
            passwordRepeat: Yup.string().required("Password repeat is not null")
        }),
        onSubmit: (values) => {
            let registerCandidateModel = {
                firstName: values.firstName,
                lastName: values.lastName,
                nationalityIdentity: values.nationalityIdentity,
                birthOfDate: values.birthOfDate,
                emailAddress: values.email,
                password: values.password,
                passwordRepeat: values.passwordRepeat,
            };

            let authService = new AuthService()
            authService.registerCandidate(registerCandidateModel).then(result => result.data.data)
            alert("Success")
            window.location.reload()
        }
    })

    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>HRMS</Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input label="First Name" name="firstName" fluid icon='user' iconPosition='left' placeholder='First Name' value={formik.values.firstName} onChange={formik.handleChange} />
                            {
                                formik.errors.firstName && formik.touched.firstName ? (
                                    <Message color="red">{formik.errors.firstName}</Message>
                                ) : null

                            }
                            <Form.Input label="Last Name" name="lastName" fluid icon='user' iconPosition='left' placeholder='Last Name' value={formik.values.lastName} onChange={formik.handleChange} />
                            {
                                formik.errors.lastName && formik.touched.lastName ? (
                                    <Message color="red">{formik.errors.lastName}</Message>
                                ) : null

                            }
                            <Form.Input label="Nationality Identity" name="nationalityIdentity" fluid icon='user' iconPosition='left' placeholder='Nationality Identity' value={formik.values.nationalityIdentity} onChange={formik.handleChange} />
                            {
                                formik.errors.nationalityIdentity && formik.touched.nationalityIdentity ? (
                                    <Message color="red">{formik.errors.nationalityIdentity}</Message>
                                ) : null

                            }
                            <Form.Input label="Birth Of Date" name="birthOfDate" fluid icon='calendar' iconPosition='left' placeholder='Birth Of Date' value={formik.values.birthOfDate} onChange={formik.handleChange} />
                            {
                                formik.errors.birthOfDate && formik.touched.birthOfDate ? (
                                    <Message color="red">{formik.errors.birthOfDate}</Message>
                                ) : null

                            }
                            <Form.Input label="E-Mail" name="emailAddress" fluid icon='mail' iconPosition='left' placeholder='E-mail address' value={formik.values.emailAddress} onChange={formik.handleChange} />
                            {
                                formik.errors.emailAddress && formik.touched.emailAddress ? (
                                    <Message color="red">{formik.errors.emailAddress}</Message>
                                ) : null

                            }
                            <Form.Input label="Password" name="password" fluid icon='lock' iconPosition='left' placeholder='Password' type='password' value={formik.values.password} onChange={formik.handleChange} />
                            {
                                formik.errors.password && formik.touched.password ? (
                                    <Message color="red">{formik.errors.password}</Message>
                                ) : null

                            }
                            <Form.Input label="Password Repeat" name="passwordRepeat" fluid icon='lock' iconPosition='left' placeholder='Password Repeat' type='password' value={formik.values.passwordRepeat} onChange={formik.handleChange} />
                            {
                                formik.errors.passwordRepeat && formik.touched.passwordRepeat ? (
                                    <Message color="red">{formik.errors.passwordRepeat}</Message>
                                ) : null

                            }
                            <Form.Button color='blue' fluid size='large' onClick={formik.handleSubmit} type="submit">Register</Form.Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}
