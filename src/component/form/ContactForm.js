import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactFormStyle.css";
import img from "../../assets/img34.jpg";

function ContactForm() {
    const [state, handleSubmit] = useForm("xwkzeerv");
    if (state.succeeded) {
        return (
            <>
                <br />
                <p className="msg-confirmed">
                    <strong>Message Envoyé !</strong>
                </p>

                <div className="container3">
                    <img src={img} alt="/" />
                </div>
            </>
        );
    }
    return (
        <>
            <h2>Contactez-nous !</h2>
            <br />
            <br />
            <br />
            <br />
            <div className="container2">
                <form id="fs-frm" onSubmit={handleSubmit}>
                    <fieldset id="fs-frm-inputs">
                        <label for="full-name">Prénom et nom *</label>
                        <input
                            type="fullname"
                            name="fullname"
                            placeholder="Lapin Rouge"
                            minlength="2"
                            required
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label for="email-address" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="_replyto"
                            id="email-address"
                            placeholder="Lapin.rouge@domain.tld"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            required
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label for="message">Message</label>
                        <textarea
                            rows="5"
                            name="message"
                            id="message"
                            placeholder="Votre message"
                            required=""
                        ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <input
                            type="hidden"
                            name="_subject"
                            id="email-subject"
                            value="Contact Form Submission"
                        />
                    </fieldset>
                    <button type="submit" disabled={state.submitting}>
                        Envoyer
                    </button>
                </form>
                <br />
                <br />
                <br />
                <br />
            </div>
        </>
    );
}

export default ContactForm;
