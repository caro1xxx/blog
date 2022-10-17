import React, { useState } from "react";
import styled from "styled-components";
import { postListRes, postFiled } from "../type/post";
type Props = {
  setPostMethod: any;
};

const Warp = styled.div`
  background-color: #ececec;
  height: 3rem;
  margin: 0 auto;
  width: 50%;
  line-height: 3rem;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
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

  const changeSearchValue = async (e) => {
    setSearchValue(e.target.value);
  };

  const getPost = async () => {
    const res = await fetch(
      `http://127.0.0.1:8000/api/v1/PostDetail/?SearchKey=${SearchValue}`,
      {
        // cache: "no-cache",
      }
    );
    const data: postListRes = await res.json();
    if (data.post != undefined && data.post != " ") {
      props.setPostMethod(JSON.parse(data.post));
    }
  };

  return (
    <Warp>
      &gt;
      <Input
        onChange={(e) => {
          changeSearchValue(e);
        }}
      ></Input>
      <svg
        onClick={getPost}
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
