import React from "react";
import "./ContactPage.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";

import MyAddressMap from "../../components/MyAddressMap";

const ContactPage = () => {
    const form = useRef();

    const sendEmail = async e => {
        e.preventDefault();

        var res = await toast.promise(emailjs.sendForm("service_srpy7bf", "template_mx97uen", form.current, "Uw39eNBn1znHrYBfB"), {
            pending: "Sending Messages..",
            success: "Message successfully sent!",
            error: "Failed to send the message, please try again.",
        });

        //resets the form if sending is success
        res && res?.status === 200 && e.target.reset();
    };

    return (
        <section className="contact-page" data-testid="contactpage">
            <section className="form-col">
                <h1>Contact Me</h1>
                <p>If you're interested on me and you want to reach out, don't hesitate to fill-up the email form below and send me a message. Can't wait to discuss with you soon.</p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input placeholder="Name" type="text" name="name" autoComplete="off" required />
                            </li>
                            <li className="half">
                                <input placeholder="Email" type="email" name="email" autoComplete="off" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" autoComplete="off" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <button type="submit" className="flat-button">
                                    SEND
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>
            </section>

            <section className="map-col">
                <MyAddressMap />
            </section>

            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={true} theme="dark" closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </section>
    );
};

export default ContactPage;
