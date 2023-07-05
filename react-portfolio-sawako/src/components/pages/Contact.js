import React, { useState } from "react";
import { Button } from 'react-bootstrap';
const Contact = () => {
    const initialValues = { yourName: "", email: "", message: "" }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormErrors(validate(formValues));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    };


    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
        if (!values.yourName) {
            errors.yourName = "Please input your name.";
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
            <div className='title-container'>
                <h1>Contact</h1>
            </div>
            <form

                onSubmit={(e) => handleSubmit(e)}
                className='form-group'
            >
                <div className="mb-3 pt-0">
                    <lavel>Your name:</lavel>
                    <input
                        type="text"
                        placeholder="Your name"
                        name="yourName"
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
                {Object.keys(formErrors).length === 0 && isSubmit && (
                    <div className="msgOk">Thank you for sending your message.</div>
                )}
            </form>
        </div>
    );
};

export default Contact;

