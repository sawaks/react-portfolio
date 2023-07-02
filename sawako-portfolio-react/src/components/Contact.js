import React, { useState } from "react";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Form response was not ok');
                }

                setSubmitted(true);
            })
            .catch((err) => {
                // Submit the form manually
                e.target.submit();
            });
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <div className='main-container'>
            <div className='title-container'>
                <h1>Contact</h1>
            </div>
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                className='form-group'
            >
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3 pt-0 submitBtn-container">
                    <button
                        className="btn btn-info"
                        type="submit"
                    >
                        Send a message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;

