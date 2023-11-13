import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the form submission
    console.log("Form submitted:", formData);
    // Reset the forms
    setFormData({
      name: "",
      number: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <Fragment>
      <section>
        <div>
          <h3>CONTACT US</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <h5>Get in touch with us</h5>
                <br />
                <address>
                  <strong>
                    Address:
                    <br />
                    e.students@moringaschool.com
                  </strong>
                  <br />
                  <strong>
                    Phone No:
                    <br />
                    +23354577789
                  </strong>
                  <br />
                  <strong>
                    Email:
                    <br />
                    software.student@moringaschool.com
                  </strong>
                </address>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="form-control"
                        id="name"
                        name="firstname"
                        autoComplete="given-name"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please fill in your first name.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="number" className="form-label">
                        Number
                      </label>
                      <input
                        type="number"
                        placeholder="Your number"
                        className="form-control"
                        id="number"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please fill in your number.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Your email"
                        className="form-control"
                        id="email"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please fill in the email.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="Textarea" className="form-label">
                        Textarea
                      </label>
                      <textarea
                        className="form-control"
                        id="Textarea"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="sendbtn">
                      <button type="submit" className="btn btn-primary">
                        Submit form
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactUs;
