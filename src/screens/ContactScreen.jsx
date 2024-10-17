


import { useRef, useState } from "react";
import Section from "../components/Section";

import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
     showAlert({
       show: true,
       text: "Thank you for your message 😃",
       type: "success",
     });
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
   showAlert({
     show: true,
     text: "Thank you for your message 😃",
     type: "success",
   });
   setTimeout(() => {
     hideAlert(false);
     setForm({
       name: "",
       email: "",
       message: "",
     });
   }, [3000]);
    // emailjs
    //   .send(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       to_name: "JavaScript Mastery",
    //       from_email: form.email,
    //       to_email: "sujata@jsmastery.pro",
    //       message: form.message,
    //     },
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       showAlert({
    //         show: true,
    //         text: "Thank you for your message 😃",
    //         type: "success",
    //       });

    //       setTimeout(() => {
    //         hideAlert(false);
    //         setForm({
    //           name: "",
    //           email: "",
    //           message: "",
    //         });
    //       }, [3000]);
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);

    //       showAlert({
    //         show: true,
    //         text: "I didn't receive your message 😢",
    //         type: "danger",
    //       });
    //     }
    //   );
  };

  return (
    <Section className={" py-10 "} crosses customPaddings id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="container">
        <div className=" relative border border-n-1/10 rounded-3xl mb-5 p-8 overflow-hidden lg:p-20   flex items-center justify-center flex-col">
          <div className="contact-container">
            <h3 className="h3  sm:text-4xl text-3xl font-semibold font-grotesk">
              Let's talk
            </h3>
            <p className="text-lg text-white-600 mt-3 font-grotesk">
              Whether you’re looking to build a new website, improve your
              existing platform, or bring a unique project to life, I’m here to
              help.
            </p>

            <form
              ref={formRef}
              // onSubmit={handleSubmit}
              className="mt-12 flex flex-col space-y-7 font-grotesk"
            >
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., John Doe"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., johndoe@gmail.com"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}

                <img
                  src="/assets/arrow-up.png"
                  alt="arrow-up"
                  className="field-btn_arrow"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;