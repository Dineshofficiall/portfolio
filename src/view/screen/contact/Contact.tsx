// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Image,
  InputGroup,
  Spinner,
} from "react-bootstrap";

// image
import { ContactIcon } from "../../../assets/Images/ContactIcon";
// css
import "./contact.css";

// icons
import { TiTickOutline } from "react-icons/ti";
import { IoCloseCircleSharp } from "react-icons/io5";

// emailjs
import emailjs from "@emailjs/browser";

// toastify
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormElements extends HTMLFormControlsCollection {
  mail: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const Contact: React.FC = () => {
  const icon = ContactIcon();

  const notify = () =>
    toast.success("🤖 Successfully sent!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });

  const form = useRef<HTMLFormElement | null>(null);

  const [formStatus, setFormStatus] = useState<boolean>(true);

  const [emailStatus, setEmailStatus] = useState<boolean | null>(null);
  const [subjectStatus, setSubjectStatus] = useState<boolean | null>(null);
  const [messageStatus, setMessageStatus] = useState<boolean | null>(null);

  const formValidation = () => {
    if (!form.current) return false;

    const formElements = form.current.elements as FormElements;
    const email = formElements.mail.value;
    const subject = formElements.subject.value;
    const message = formElements.message.value;

    const emailValidate = email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    setEmailStatus(emailValidate ? true : false);

    setSubjectStatus(subject.length >= 3 ? true : false);

    setMessageStatus(message.length >= 5 ? true : false);

    return emailValidate && subject.length >= 3 && message.length >= 5;
  };

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    if (formValidation()) {
      try {
        setFormStatus(false);

        const messageResponse = await emailjs.sendForm(
          "service_fquu7mq",
          "template_ew9jsn9",
          form.current,
          "Ch90_r-QFo5NUtUV9"
        );
        console.log("Email sent successfully:", messageResponse.text);

        setFormStatus(true);
        setEmailStatus(null);
        setSubjectStatus(null);
        setMessageStatus(null);
        form.current.reset();

        notify();
      } catch (error) {
        console.error("Error while sending email:", error);

        toast.error("Failed to send email. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      }
    } else {
      alert("Form validation failed. Please check the inputs.");
    }
  };

  return (
    <>
      <section>
        <Container className="col-12 col-sm-9 col-lg-6 col-xxl-5 px-3 px-sm-0 p-1 my-5">
          <div className="text-center mb-5">
            <h1>Contact</h1>
            <p>
              Feel free to reach out to me for any questions or Opportunities
            </p>
          </div>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-9 col-lg-9 p-4 contact-block">
              <div className="mb-3 d-flex justify-content-start align-items-center">
                <h4 className="m-0 mx-2">Email Me</h4>
                <Image src={icon.rocketIcon} width={40} />
              </div>
              <Form ref={form} onSubmit={sendMail}>
                <InputGroup className="mb-3 parent-contact-block">
                  <FormControl
                    className="Contact-Input-Groups rounded-4"
                    placeholder="Your Email"
                    aria-label="Email"
                    type="email"
                    name="mail"
                  />
                  {emailStatus === false ? (
                    <span>
                      <IoCloseCircleSharp />
                    </span>
                  ) : emailStatus === true ? (
                    <span>
                      <TiTickOutline />
                    </span>
                  ) : null}
                </InputGroup>
                <InputGroup className="mb-3 parent-contact-block">
                  <FormControl
                    className="Contact-Input-Groups rounded-4"
                    placeholder="Subject"
                    aria-label="Subject"
                    type="text"
                    name="subject"
                  />
                  {subjectStatus === false ? (
                    <span>
                      <IoCloseCircleSharp />
                    </span>
                  ) : subjectStatus === true ? (
                    <span>
                      <TiTickOutline color="green" />
                    </span>
                  ) : null}
                </InputGroup>
                <InputGroup className="mb-3 parent-contact-block">
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    className="Contact-Input-Groups rounded-4"
                    placeholder="Message"
                    rows={6}
                    name="message"
                  />
                  {messageStatus === false ? (
                    <span>
                      <IoCloseCircleSharp color="red" />
                    </span>
                  ) : messageStatus === true ? (
                    <span>
                      <TiTickOutline color="green" />
                    </span>
                  ) : null}
                </InputGroup>
                <div className="mt-4 Contact-btn text-center">
                  <Button className="rounded-5" variant="transparent" type="submit">
                    {formStatus === true ? (
                      <span>
                        send
                      </span>
                    ) : (
                      <span className="bg-transparent mx-2">
                        <Spinner
                          animation="border"
                          variant="info"
                          className="spinner bg-transparent"
                          style={{ width: "1.2rem", height: "1.2rem"}}
                        />
                      </span>
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Slide}
          />
        </Container>
      </section>
    </>
  );
};

export default Contact;
