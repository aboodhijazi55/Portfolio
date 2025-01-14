import React, { useState } from 'react'
import "./Email.css"
import emailjs from "@emailjs/browser"

function Email() {
    const [emailForm, setEmailForm] = useState("");
    const [message, setMessage] = useState("");
    const [subjectForm, setSubjectForm] = useState("")
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    function sendEmail(e) {
        e.preventDefault();
        setIsLoading(true); // Show loading spinner
        emailjs
            .sendForm("service_e3i0r9o", "template_lvmqi0d", e.target, "eKntTFWsHYgSOmUwj")
            .then(() => {
                setShowAlert(true); // Show success alert
                setEmailForm(""); // Clear email field
                setSubjectForm("")
                setMessage(""); // Clear message field
                setIsLoading(false);
                // Hide the alert after 2 seconds
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000);
            })
            .catch((error) => {
                console.error("Email sending failed:", error);
            });

    }

    return <>
        <div className='email'>
            <form onSubmit={sendEmail}>
                <div class="mb-3">
                    <label htmlFor="emailForm" class="form-label">Email address</label>
                    <input name="emailForm"
                        type="email"
                        class="form-control"
                        id="emailForm"
                        value={emailForm}
                        placeholder="name@example.com"
                        onChange={(e) => setEmailForm(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label htmlFor="subjectForm" class="form-label">Subject</label>
                    <input name="subjectForm"
                        type="text"
                        class="form-control"
                        id="subjectForm"
                        value={subjectForm}
                        placeholder=""
                        onChange={(e) => setSubjectForm(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label htmlFor="message" class="form-label">Massage</label>
                    <textarea name='message'
                        class="form-control"
                        id="message"
                        value={message}
                        rows="3"
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                </div>
                <button type="submit" class="btn  btn-outline-light" id='button' > {isLoading ? (
                    <div class="spinner-grow" style={{ width: "1rem", height: "1rem" }} role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    'Send'
                )}</button>
                {showAlert && (
                    <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
                        <strong>Success!</strong> Your message has been sent.
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => setShowAlert(false)}
                        ></button>
                    </div>
                )}
            </form>
        </div>
    </>

}

export default Email