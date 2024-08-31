import React from 'react';
import { useFormik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <Field
          id="username"
          name="username"
          type="text"
        />
        <ErrorMessage name="username" component="div" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
        />
        <ErrorMessage name="email" component="div" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          id="password"
          name="password"
          type="password"
        />
        <ErrorMessage name="password" component="div" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default FormikForm;
