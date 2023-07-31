import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const initialValues = {
        name: "",
        email: "",
        message: "",
        subject: 'StaticForms - Contact Form',
        honeypot: '',
        accessKey: 'b49cd4af-3192-4a99-b8e8-905478fb499f'
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);
    const [response, setResponse] = useState({
        type: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors(validate(formValues));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        try {
            const res = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                body: JSON.stringify(formValues),
                headers: { 'Content-Type': 'application/json' }
            });
            const json = await res.json();
            if (json.success) {
                setResponse({
                    type: 'success',
                    message: 'Thank you for reaching out to me.'
                });
            } else {
                setResponse({
                    type: 'error',
                    message: json.message
                });
            }
        } catch (e) {
            console.log('An error occurred', e);
            setResponse({
                type: 'error',
                message: 'An error occured while submitting the form'
            });
        }

    };


    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
        if (!values.name) {
            errors.name = "Please input your name.";
        }
        if (!values.email) {
            errors.email = "Please input your email.";
        } else if (!regex.test(values.email)) {
            errors.email = "Please input your correct email.";
        }
        if (!values.message) {
            errors.message = "Please input some message.";
        }
        return errors;
    };


    return (
        <div className='main-container'>
            <Helmet>
                <title>Sawako Goshima | Contact Form</title>
            </Helmet>
            <div className='title-container'>
                <h1>Contact</h1>
            </div>
            <form

                onSubmit={(e) => handleSubmit(e)}
                className='form-group'
                action="https://api.staticforms.xyz/submit"
                method='post'
            >
                <input type="hidden" name="accessKey" value="b49cd4af-3192-4a99-b8e8-905478fb499f" />
                <div className="mb-3 pt-0">
                    <lavel>Your name:</lavel>
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="form-control"
                        onChange={(e) => handleChange(e)}

                    />
                </div>
                <p className="errorMsg">{formErrors.yourName}</p>

                <div className="mb-3 pt-0">
                    <lavel>Email:</lavel>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        onChange={(e) => handleChange(e)}

                    />
                </div>
                <p className="errorMsg">{formErrors.email}</p>
                <div className="mb-3 pt-0">
                    <lavel>Message:</lavel>
                    <textarea
                        type="text"
                        placeholder="Your message"
                        name="message"
                        className="form-control"
                        onChange={(e) => handleChange(e)}

                    />
                </div>
                <p className="errorMsg">{formErrors.message}</p>
                <div className="mb-3 pt-0 submitBtn-container">
                    <Button
                        className="btn btn-danger"
                        type="submit"
                    >
                        Send a message
                    </Button>
                </div>
                {Object.keys(formErrors).length === 0 && isSubmit && response.type === 'success' && (
                    <div className="msgOk">{response.message}</div>
                )}
            </form>
        </div>
    );
};

export default Contact;

