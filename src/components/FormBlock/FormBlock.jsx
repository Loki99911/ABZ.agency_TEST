import { ContainerComp } from 'components/ContainerComp/ContainerComp';
import LoginForm from 'components/LoginForm/LoginForm';
import {useState } from 'react';
import successImg from '../../Assets/success-image.svg';
import { FormTitle, FormWraper } from './FormBlock.styled';

export const FormBlock = () => {
 
  const [newUserCreated, setNewUserCreated] = useState(false);
  console.log(newUserCreated);
  return (
    <ContainerComp>
      <FormWraper id="formBlock">
        {newUserCreated ? (
          <>
            <FormTitle>User successfully registered</FormTitle>
            <img src={successImg} alt="Success"/>
          </>
        ) : (
          <>
            <FormTitle>Working with POST request</FormTitle>
            <LoginForm userStatus={setNewUserCreated} />
          </>
        )}
      </FormWraper>
    </ContainerComp>
  );
};
