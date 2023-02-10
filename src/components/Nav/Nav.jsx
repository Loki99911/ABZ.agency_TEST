import { Link, Navi } from "./Nav.styled";

export const Nav = () => {
  return (
    <Navi>
      <Link href="#usersBlock">Users</Link>
      <Link href="#formBlock">Sign up</Link>
    </Navi>
  );
};
