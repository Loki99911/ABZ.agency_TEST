import { Layout, HeroHeader, HeroText, Link } from './Hero.styled';

export const Hero = () => {
  return (
    <Layout>
      <HeroHeader>Test assignment for front-end developer</HeroHeader>
      <HeroText>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </HeroText>
      <Link href="#formBlock">Sign up</Link>
    </Layout>
  );
};
