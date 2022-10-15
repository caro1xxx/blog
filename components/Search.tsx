import React, { useState } from "react";
import styled from "styled-components";
type Props = {};

const Warp = styled.div`
  background-color: #ececec;
  height: 3rem;
  margin: 0 auto;
  width: 50%;
  line-height: 3rem;
  padding: 0px 10px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  outline: none;
  border: none;
  height: 2rem;
  background-color: #ececec;
  font-size: 20px;
  width: 95%;
`;

const Search = (props: Props) => {
  const [SearchValue, setSearchValue] = useState("");

  const changeSearchValue = (e) => {
    console.log(e.target.value);
  };

  return (
    <Warp>
      &gt;
      <Input
        // value={SearchValue}
        onChange={(e) => {
          changeSearchValue(e);
        }}
      ></Input>
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4484"
        width="20"
        height="20"
      >
        <path
          d="M1005.312 914.752l-198.528-198.464A448 448 0 1 0 0 448a448 448 0 0 0 716.288 358.784l198.4 198.4a64 64 0 1 0 90.624-90.432zM448 767.936A320 320 0 1 1 448 128a320 320 0 0 1 0 640z"
          fill="#262626"
          p-id="4485"
        ></path>
      </svg>
    </Warp>
  );
};

export default Search;
