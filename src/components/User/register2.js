import React from 'react';
import { useFormik } from 'formik';

const validate = (values) => {
  const errorMsg = 'Must be 20 characters or less';
  const errors = {};
  if (!values.firstName) {
    errors.firstName = '*';
  } else if (values.firstName.length > 20) {
    errors.firstName = errorMsg;
  }

  if (!values.lastName) {
    errors.lastName = '*';
  } else if (values.lastName.length > 20) {
    errors.lastName = errorMsg;
  }

  if (!values.userName) {
    errors.userName = '*';
  } else if (values.userName.length > 20) {
    errors.userName = errorMsg;
  }

  if (!values.password) {
    errors.password = '*';
  } else if (values.password.length > 20) {
    errors.password = errorMsg;
  }

  if (!values.email) {
    errors.email = '*';
  } else if (values.email.length > 20) {
    errors.email = errorMsg;
  }

  return errors;
};

const NewPost = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      email: '',
      bio: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='firstName'>First Name</label>
      <input
        id='firstName'
        name='firstName'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      <br />
      <label htmlFor='lastName'>Last Name</label>
      <input
        id='lastName'
        name='lastName'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
      <br />
      <label htmlFor='userName'>Username</label>
      <input
        id='userName'
        name='userName'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.userName}
      />
      {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}
      <br />
      <label htmlFor='password'>password</label>
      <input
        id='password'
        name='password'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <br />
      <label htmlFor='email'>email</label>
      <input
        id='email'
        name='email'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <br />
      <label htmlFor='bio'>bio</label>
      <input
        id='bio'
        name='bio'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.bio}
      />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default NewPost;
