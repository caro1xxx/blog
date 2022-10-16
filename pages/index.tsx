import Head from "next/head";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import PostItem from "../components/PostItem";
import { useState } from "react";
import { nanoid } from "nanoid";
import { postListRes, postFiled } from "../type/post";
export default function Home({ data }) {
  const [postList, setPostList] = useState(JSON.parse(data.post));
  return (
    <div>
      <NavBar></NavBar>
      <Search setPostMethod={setPostList}></Search>
      <PostItem post={postList}></PostItem>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://127.0.0.1:8000/api/v1/PostList/`);
  const data: postListRes = await res.json();
  return { props: { data } };
}
