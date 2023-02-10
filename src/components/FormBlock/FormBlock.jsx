import { ContainerComp } from 'components/ContainerComp/ContainerComp';
import LoginForm from 'components/LoginForm/LoginForm';
// import { useEffect, useState } from 'react';
// import { getPositions } from 'service/Api';
import { FormTitle, FormWraper } from './FormBlock.styled';

export const FormBlock = () => {
  // const [positionList, setPositionList] = useState([]);

  //   useEffect(() => {
  //     getPositions().then(setPositionList);
  //   }, []);
  // console.log(positionList);
  return (
    <ContainerComp>
      <FormWraper id="formBlock">
        <FormTitle>Working with POST request</FormTitle>
        <LoginForm/>
      </FormWraper>
    </ContainerComp>
  );
};
