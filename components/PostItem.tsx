import React, { useState } from "react";
import { post } from "../type/post";
import BlogTag from "../components/BlogTag";
import styled from "styled-components";
import Router from "next/router";
type Props = {
  post: post[];
};

const Warp = styled.div`
  width: 50%;
  margin: 1rem auto;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
  cursor: pointer;
  padding: 0.5rem 0;
`;
const Title = styled.div`
  font-size: 17px;
  font-style: italic;
  :hover {
    color: #8e8e8e;
    text-decoration: underline;
  }
`;

const Time = styled.div`
  font-size: 10px;
  font-style: italic;
  color: #767676;
  float: right;
`;

const Content = styled.div`
  font-size: 13px;
  margin-top: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostItem = (props: Props) => {
  const routerPostDetail = (postid: string) => {
    Router.push(`/post/${postid}`);
  };

  return (
    <div>
      {props.post.map((item) => {
        return (
          <Warp
            key={item.fields.post_id}
            onClick={() => {
              routerPostDetail(item.fields.post_id);
            }}
          >
            <Title>
              <div>{item.fields.title}</div>
              <BlogTag type={item.fields.type}></BlogTag>
            </Title>
            <Content>{item.fields.content}</Content>
            <Time>{item.fields.update_time}</Time>
          </Warp>
        );
      })}
    </div>
  );
};

export default PostItem;
