import styled from 'styled-components';

export const UserWraper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
padding-top: 140px;
`;

export const UserTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 50px;
`;

export const UserBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 29px;
  }
`;

export const UserBtn = styled.button`
  height: 34px;
  width: 120px;
  border-radius: 17px;
  border: none;
  background-color: #f4e041;
  margin: 0 auto;
  :hover {
    background-color: #ffe302;
  }
`;