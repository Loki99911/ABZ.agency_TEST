import styled from 'styled-components';
import img from '../../Assets/pexels-alexandr-podvalny-1227513.jpeg';

export const Layout = styled.section`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${img});
  background-color: #c4c4c4;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  margin: 0 auto;
  padding-top: 40px;
  padding-left: 16px;
  padding-right: 16px;
  @media screen and (min-width: 768px) {
    padding-top: 89px;
    padding-left: 194px;
    padding-right: 194px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 164px;
    padding-left: 322px;
    padding-right: 322px;
    height: 650px;
  }
  @media screen and (min-width: 1170px) {
    padding-left: 395px;
    padding-right: 395px;
    width: 1170px;
  }
`;

export const HeroHeader = styled.h1`
  text-align: center;
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 21px;
  color: #ffffff;
`;

export const HeroText = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 32px;
  color: #ffffff;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  border-radius: 80px;
  background-color: #f4e041;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
  text-align: center;
  color: inherit;
  margin: 0 auto;
  :hover {
    background-color: #ffe302;
  }
`;