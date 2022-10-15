import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
type Props = {
  type: string;
};

const Warp = styled.div`
  display: inline-block;
  padding: 3px;
  background-color: #818181;
  font-size: 12px;
  color: white;
  margin-right: 0.5rem;
`;

const BlogTag = (props: Props) => {
  let tag = props.type.split(",");
  return (
    <div>
      {tag.map((item) => {
        return <Warp key={nanoid()}>{item}</Warp>;
      })}
    </div>
  );
};

export default BlogTag;
