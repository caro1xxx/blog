import React from "react";
import styled from "styled-components";
import Link from "next/link";
type Props = {};
const Warp = styled.div`
  height: 4rem;
  font-size: 1.5rem;
  position: fixed;
  width: 100%;
  background-color: #ffffffad;
`;

const Bar = styled.div`
  float: right;
  a {
    display: inline-block;
    margin: 0 1rem;
  }
`;
const NavBar = (props: Props) => {
  return (
    <Warp>
      <div style={{ width: "80%", margin: "1rem auto" }}>
        <Bar>
          <Link href="/">blog</Link>
          <Link href="/about">about</Link>
        </Bar>
        <Link href="/about">bezos</Link>
      </div>
    </Warp>
  );
};

export default NavBar;
