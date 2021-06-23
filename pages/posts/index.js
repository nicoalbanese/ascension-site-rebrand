import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";

import Link from "next/link";
import Head from "next/head";

import styled from "styled-components";

import { getBlogPosts } from "../../lib/airtable";

const Wrapper = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
`;

const Posts = ({ posts }) => {
  // console.log(posts);
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>
      <Wrapper>
        <h1>Posts</h1>
        <div>
          {posts.map((post, i) => (
            <Post post={post} key={i} />
          ))}
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Posts;

export async function getStaticProps() {
  const fetchedPosts = await getBlogPosts();
  return {
    props: { posts: fetchedPosts },
    revalidate: 2, // will be passed to the page component as props
  };
}

const PostWrapper = styled.article`
  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    /* white-space: nowrap; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
  }

  .author {
    margin-bottom: 0.5rem;
    a {
      text-decoration: none;
      /* text-transform: uppercase; */
      font-size: 0.9rem;
    }
    h5 {
      color: ${({ theme }) => theme.colors.primaryOne};
      font-weight: 100;
    }
  }

  margin-bottom: 2rem;

  #headline {
    text-decoration: underline;
  }

  #content {
    color: ${({ theme }) => theme.colors.primaryOne};
    p {
      text-decoration: none;
    }
  }
  .post-container {
    text-decoration: none;
  }
`;

const Post = ({ post }) => {
  return (
    <PostWrapper>
      <div className='author'>
        <Link href={`/team/${post.author.slug}`}>
          <a>
            <h5>
              {post.author.name} on{" "}
              {String(new Date(post.date).toLocaleDateString("EN"))}
            </h5>
          </a>
        </Link>
      </div>
      <Link href={`/posts/${post.slug}`}>
        <a className='post-container'>
          <h3 id='headline'>{post.headline}</h3>
          <p id='content'>{post.snippet}</p>
        </a>
      </Link>
    </PostWrapper>
  );
};
