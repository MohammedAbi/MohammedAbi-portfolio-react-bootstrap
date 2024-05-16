import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactForm() {
  return (
    <form className="bg-dark text-light p-5 border shadow">
      <div className="row">
        <Form.Group className="mb-3 col-lg-6" controlId="firstName">
          <Form.Label className="w-100 text-start text-capitalize">
            First Name
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="lastName">
          <Form.Label className="w-100 text-start text-capitalize">
            Last Name
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </div>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label className="w-100 text-start text-capitalize">
          Email
        </Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="textarea">
        <Form.Label className="w-100 text-start">Email</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
      <Button className="pt-3 pb-3 px-5 mt-3" variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
