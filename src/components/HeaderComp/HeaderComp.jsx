import { ContainerComp } from '../ContainerComp/ContainerComp';
import { Header, HeaderWraper } from './HeaderComp.styled';
import logo from '../../Assets/Logo.svg';
import { Nav } from '../Nav/Nav';

export const HeaderComp = () => {
  return (
    <Header>
      <ContainerComp>
        <HeaderWraper>
        <img src={logo} alt="logo" />
        <Nav />
        </HeaderWraper>
      </ContainerComp>
    </Header>
  );
};
