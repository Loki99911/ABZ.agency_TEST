import styled from 'styled-components';

export const FormLayout = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const FormText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
`;

export const Form = styled.form`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: var(--auth-form-validation-error-color);
`;

export const LoginLabel = styled.label`
  display: block;
  position: absolute;
  font-size: 12px;
  line-height: 14px;
  padding: 0 4px;
  background-color: #f8f8f8;
  color: #7e7e7e;

  left: 12px;
  top: -7px;
  opacity: ${props => {
    return props.value.length > 0 ? '1' : '0';
  }};

  &:nth-of-type(2) {
    top: 98px;
  }
  &:last-of-type {
    top: 201px;
  }
`;

export const LoginInput = styled.input`
  font-size: 16px;
  line-height: 26px;
  background-color: transparent;
  color: #7e7e7e;
  border: 1px solid #d0cfcf;
  border-radius: 4px;
  width: 100%;
  height: 54px;
  padding: 0 16px;
  :not(:last-of-type) {
    margin-bottom: 50px;
  }
  :last-of-type {
    margin-bottom: 43px;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  border: none;
  border-radius: 80px;
  background-color: #f4e041;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
  text-align: center;
  color: inherit;
  margin: 0 auto;
  margin-bottom: 100px;
  :hover{
    background-color: #FFE302;
  }
  &:disabled {
    background-color: #b4b4b4;
    color: #ffffff;
  }
`;

export const ErrorText = styled.span`
  display: flex;
  position: absolute;
  top: 58px;
  color: #cb3d40;
  &:nth-of-type(2) {
    top: 162px;
  }
  &:last-of-type {
    top: 266px;
  }
`;
export const HelperText = styled.span`
  display: flex;
  position: absolute;
  top: 266px;
  left: 16px;
  font-size: 12px;
  line-height: 14px;
  color: #7e7e7e;
`;

export const PositionTitle = styled.h3`
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 11px;
`;

export const PositionLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 26px;
  :not(:last-of-type) {
    margin-bottom: 7px;
  }
`;

// export const PositionInput = styled.input`
//   height: 26px;
//   display: none;
//   &:checked + ${FakeInput}::before{
// opacity: 1;
//   };
// `;

export const FakeInput = styled.span`
  display: inline-block;
  position: relative;
  width: 26px;
  height: 26px;
  border: 1px solid #d0cfcf;
  border-radius: 50%;
  margin-right: 12px;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #d0cfcf;
    opacity: 0;
  }
`;

export const PositionInput = styled.input`
  height: 26px;
  display: none;
  &:checked + ${FakeInput}::before {
    background-color: #00bdd3;
    opacity: 1;
  }
  &:checked + ${FakeInput} {
    border: 1px solid #00bdd3;
  }
`;

export const FileLabel = styled.label`
  margin-top: 47px;
  margin-bottom: 50px;
`;

export const FileInput = styled.input`
display: none;
`;

export const FakeFileInput = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  font-size: 16px;
  line-height: 26px;
  width: 100%;
  height: 54px;
  border: 1px solid #d0cfcf;
  border-radius: 4px;
  color: #d0cfcf;
`;

export const FakeFileBtn = styled.span`
  position: absolute;
  left:-1px;
  height: 54px;
  padding: 14px 15px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-top-left-radius: 4px 4px;
  border-bottom-left-radius: 4px 4px;
  color: rgba(0, 0, 0, 0.87);
`;

export const FakeFileText = styled.p`
padding-left: 99px;
`;