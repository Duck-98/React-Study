import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import {
  getAllPostsIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/posts";

const Post = ({
  postData,
}: {
  postData: {
    date: string;
    title: string;
    contentHtml: string;
  };
}) => {
  return (
    <div>
      <Head>
        <title>{postData?.title}</title>
      </Head>
      <article>
        <h1>{postData?.title}</h1>
        <div>{postData?.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData?.contentHtml }}></div>
      </article>
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds();
  //[{params : {id: 'pre-rendering},[{params : {id: '....'} }]
  return {
    paths,
    fallback: false,
    // fallback이 false -> 리턴되지 않은 것들은 모두 404page
    // true -> 404 page가 아닌 fallback페이지가 뜸
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
