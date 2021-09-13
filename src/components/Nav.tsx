import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
const NavContainer = styled.nav`
  background: #001;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NavLink = styled(Link)`
  padding: 1rem;
  color: ${(props: { selected?: boolean }) =>
    props.selected ? "#aab" : "#eef"};
  cursor: pointer;
  text-decoration: none;
  background: #333;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
`;

export const Nav = () => {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about" selected={true}>
        About
      </NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
    </NavContainer>
  );
};
