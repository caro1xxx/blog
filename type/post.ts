export type postFiled = {
  post_id: string;
  update_time: string;
  content: string;
  title: string;
  type: string;
};

export type post = {
  model: string;
  pk: number;
  fields: postFiled[];
};

export type postListRes = {
  code: number;
  msg: string;
  post: post;
};
