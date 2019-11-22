import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "../styles2.css";
import "../styles-custom.css";

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const SignupForm = () => {
  return (
    <>
      <h1>Sign Up!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          prisonName: "",
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .min(20, "Must be 20 characters or less")
            .required("Required"),
          prisonName: Yup.string()
            .min(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <FormInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <FormInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <FormInput
            label="Prison Name"
            name="prisonName"
            type="text"
            placeholder="My Prison"
          />
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@myprison.com"
          />
          <Checkbox name="acceptedTerms">
            I accept the terms and conditions
          </Checkbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm