import { HeaderComp } from './HeaderComp/HeaderComp';
import { FormBlock } from './FormBlock/FormBlock';
import { Hero } from './Hero/Hero';
import { Users } from './Users/Users';
import { Main } from './App.styled';

export const App = () => {
  return (
    <>
      <HeaderComp />
      <Main>
        <Hero />
        <Users />
        <FormBlock/>
      </Main>
    </>
  );
};
