import Head from "next/head";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import PostItem from "../components/PostItem";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { postListRes, postFiled } from "../type/post";
import { baseHost } from "../utils/ENV";

export default function Home({ data }) {
  const [postList, setPostList] = useState(JSON.parse(data.post));

  return (
    <div>
      <Head key={nanoid()}>
        <title>bezos's Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar></NavBar>
      <div style={{ paddingTop: "70px" }}>
        <Search setPostMethod={setPostList}></Search>
        <PostItem post={postList}></PostItem>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(baseHost + `PostList/`);
  const data: postListRes = await res.json();
  return { props: { data } };
}
