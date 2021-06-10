import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";

import { getBlogPosts } from "../../lib/airtable";

import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

const PostWrapper = styled.article`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }

  #author-image {
    img {
      border-radius: 100%;
    }
  }

  #back-button {
    display: block;
    margin-bottom: 1rem;
  }

  .author {
    a {
      display: flex;
      align-items: center;
      #name {
        margin-left: 5px;
      }
    }
    margin-bottom: 1rem;
  }

  .image-container {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const Post = ({ post }) => {
  return (
    <Layout>
      <PostWrapper>
        <Link href='/posts'>
          <a id='back-button'>Back to posts</a>
        </Link>
        <h1>{post.headline}</h1>
        <div className='author'>
          <Link href={`/team/${post.author.slug}`}>
            <a>
              <div className='' id='author-image'>
                <Image src={post.author.photo} height={40} width={40} />
              </div>
              <h4 id='name'>{post.author.name}</h4>
            </a>
          </Link>
        </div>
        {post.coverImage !== null && (
          <div className='image-container'>
            <Image
              src={post.coverImage}
              width={1500}
              height={700}
              objectFit='contain'
            />
          </div>
        )}
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </PostWrapper>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const posts = await getBlogPosts();
  const paths = posts.map((post) => {
    return {
      params: { post: post.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getBlogPosts();

  const [post] = posts.filter((p) => p.slug === params.post);
  return { props: { post } };
}
