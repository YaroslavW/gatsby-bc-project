import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import Layout from "../components/layout";
import blogStyles from './blog.module.scss';
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li key={edge.node.title} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h1>{edge.node.title}</h1>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
};

export default BlogPage;