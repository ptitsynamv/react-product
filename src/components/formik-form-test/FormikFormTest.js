import './formikFormTest.scss';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 2) {
    errors.name = 'Name is min 2 char';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...props} {...field} />
        {children}
      </label>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const FormikFormTest = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     amount: 0,
  //     currency: '',
  //     text: '',
  //     terms: false,
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string()
  //       .required('Name is required')
  //       .min(2, 'Name is min 2 char'),
  //     email: Yup.string()
  //       .required('Email is required')
  //       .email('Invalid email address'),
  //     amount: Yup.number().min(5, 'Min 5').required('Amount is required'),
  //     currency: Yup.string().required('Currency is required'),
  //     text: Yup.string().min(10, 'min 10 char'),
  //     terms: Yup.boolean()
  //       .required('Terms is required')
  //       .oneOf([true], 'Terms is required'),
  //   }),
  //   onSubmit: (values) => {
  //     console.log({ values });
  //   },
  // });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        amount: 0,
        currency: '',
        text: '',
        terms: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Name is required')
          .min(2, 'Name is min 2 char'),
        email: Yup.string()
          .required('Email is required')
          .email('Invalid email address'),
        amount: Yup.number().min(5, 'Min 5').required('Amount is required'),
        currency: Yup.string().required('Currency is required'),
        text: Yup.string().min(10, 'min 10 char'),
        terms: Yup.boolean()
          .required('Terms is required')
          .oneOf([true], 'Terms is required'),
      })}
      onSubmit={(values) => {
        console.log({ values });
      }}
    >
      <Form className="form">
        <h2>Send a donation</h2>

        <MyTextField label="Name" id="name" name="name" type="text" />

        <MyTextField label="Email" id="email" name="email" type="email" />

        <label htmlFor="amount">Quantity</label>
        <Field id="amount" name="amount" type="number" />
        <ErrorMessage className="error" name="amount" component="div" />
        <label htmlFor="currency">Currency</label>
        <Field id="currency" name="currency" as="select">
          <option value="">Select currency</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
        </Field>
        <ErrorMessage className="error" name="currency" component="div" />
        <label htmlFor="text">Your message</label>
        <Field id="text" name="text" as="textarea" />
        <ErrorMessage className="error" name="text" component="div" />
        {/* <label className="checkbox">
          <Field name="terms" type="checkbox" />
          Do you agree with the privacy policy?
        </label>
        <ErrorMessage className="error" name="terms" component="div" /> */}

        <MyCheckbox name="terms">
          Do you agree with the privacy policy?
        </MyCheckbox>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

function FormikFormTestWrapper() {
  return (
    <div className="app">
      <FormikFormTest />
    </div>
  );
}

export default FormikFormTestWrapper;
