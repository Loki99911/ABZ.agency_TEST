import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
`;

export const CardPhoto = styled.img`
  width: 70px;
  border-radius: 50%;
`;

export const CardName = styled.span`
  font-size: 16px;
  line-height: 26px;
  max-width: calc((100%-29px * 2));
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardInfo = styled.p`
  font-size: 16px;
  line-height: 26px;
  max-width: calc((100%-29px * 2));
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
`;

export const CardContacts = styled.a`
  display: block;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
  max-width: calc((100%-29px * 2));
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  color: inherit;
`;
