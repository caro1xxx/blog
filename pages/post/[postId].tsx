import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { nanoid } from "nanoid";
// markdown支持
import ReactMarkdown from "react-markdown";
//支持markdown代码高亮
import hljs from "highlight.js";
import "highlight.js/styles/arduino-light.css";
import "github-markdown-css/github-markdown-light.css";
type Props = {};

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
  font-size: 25px;
`;

const Update = styled.div`
  font-size: 15px;
  margin: 1rem 0rem;
  font-style: italic;
  text-align: right;
`;

const PostId = ({ data }) => {
  const [Post, setPost] = useState(JSON.parse(data.post));

  useEffect(() => {
    document.querySelectorAll("pre").forEach((block) => {
      try {
        hljs.highlightBlock(block);
      } catch (e) {
        console.log(e);
      }
    });
  });

  return (
    <div>
      <NavBar></NavBar>
      <Warp className="markdown-body">
        {Post.map((item) => {
          return (
            <div key={nanoid()}>
              <Title>{item.fields.title}</Title>
              <Update>{item.fields.update_time}</Update>
              <ReactMarkdown>{item.fields.content}</ReactMarkdown>
            </div>
          );
        })}
      </Warp>
    </div>
  );
};

export default PostId;

export async function getServerSideProps(context) {
  const res = await fetch(`http://127.0.0.1:8000/api/v1/PostDetail/`, {
    method: "post",
    body: JSON.stringify({ postId: context.params }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return { props: { data } };
}
