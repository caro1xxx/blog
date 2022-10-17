import React from "react";
import styled from "styled-components";
type Props = {};

const Warp = styled.div`
  background-color: #ececec;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
`;

const Key = styled.span`
  display: inline;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
`;

const Subscribe = (props: Props) => {
  return (
    <Warp>
      {/* ⏰订阅我的Post,每周更新我的见解! */}
      {/* <button>订阅</button> */}
      <Key>Ctrl</Key>+<Key>D</Key>
      收藏该网站,每周更新我的见解! ⏰
    </Warp>
  );
};

export default Subscribe;
