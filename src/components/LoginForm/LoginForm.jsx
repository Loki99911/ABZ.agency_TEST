import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import shortid from 'shortid';
import { getPositions, getToken, postUser} from '../../service/Api';
// import { useDispatch } from 'react-redux';
// import google from '../../images/google.svg';
// import { logIn, signUp } from '../../redux/Auth/authOperations';
import {
  FormLayout,
  Form,
  LoginLabel,
  LoginInput,
  LoginBtn,
  ErrorText,
  HelperText,
  PositionLabel,
  PositionInput,
  PositionTitle,
  FakeInput,
  FileLabel,
  FileInput,
} from './LoginForm.styled';

const LoginForm = ({userStatus}) => {
  //   const dispatch = useDispatch();
  const nameID = shortid.generate();
  const emailID = shortid.generate();
  const phonelID = shortid.generate();

  const [positions, setPositions] = useState([]);
  const [newToken, setNewToken] = useState('');
  // const [newUserCreated, setNewUserCreated] = useState(false);

  useEffect(() => {
    getPositions().then(response => setPositions(response));
    getToken().then(response => setNewToken(response.token));
  }, []);

  return (
    <FormLayout>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          position_id: '',
          photo: null,
        }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'This is a required field';
          } else if (values.name.length < 2 && values.name.length >= 60) {
            errors.name = 'Invalid name';
          }
          if (!values.email) {
            errors.email = 'This is a required field';
          } else if (
            values.email.length < 2 &&
            values.email.length >= 100 &&
            !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
              values.email
            )
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.phone) {
            errors.phone = 'This is a required field';
            // eslint-disable-next-line
          } else if (!/^[\+]{0,1}380([0-9]{9})$/.test(values.phone)) {
            errors.phone = 'Invalid phone (should start with +380)';
          }
          return errors;
        }}
        onSubmit={values => {
          const user = postUser({ values, newToken });
          console.log(user);
          userStatus(user);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <LoginLabel htmlFor={nameID} value={values.name}>
              Your name
            </LoginLabel>
            <LoginInput
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              id={nameID}
              placeholder="Your name"
            ></LoginInput>
            <ErrorText>{errors.name && touched.name && errors.name}</ErrorText>

            <LoginLabel htmlFor={emailID} value={values.email}>
              Email
            </LoginLabel>

            <LoginInput
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              id={emailID}
              placeholder="Email"
            />
            <ErrorText>
              {errors.email && touched.email && errors.email}
            </ErrorText>

            <LoginLabel htmlFor={phonelID} value={values.phone}>
              Phone
            </LoginLabel>

            <LoginInput
              type="phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              id={phonelID}
              placeholder="Phone"
            />
            <ErrorText>
              {errors.phone && touched.phone && errors.phone}
            </ErrorText>
            {!errors.phone && <HelperText>+380 (XX) XXX - XX - XX</HelperText>}
            <PositionTitle>Select your position</PositionTitle>
            {positions.map(position => (
              <PositionLabel key={position.name}>
                <PositionInput
                  type="radio"
                  name="position_id"
                  value={position.id}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                />
                <FakeInput />
                {position.name}
              </PositionLabel>
            ))}
            <FileLabel>
              <FileInput
                type="file"
                name="photo"
                id="photoFile"
                // value={position.id}
                onChange={handleChange}
                accept=".jpg, .jpeg"
              />
            </FileLabel>
            <LoginBtn type="submit">Sign up</LoginBtn>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
};

export default LoginForm;
