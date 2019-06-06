import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import Layout from "../components/layout";
import blogStyles from './blog.module.scss';
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              data
            }
            fields {
              slug
            }
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
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.frontmatter.title}
            className={blogStyles.post}
            >
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h1>{edge.node.frontmatter.title}</h1>
                <p>{edge.node.frontmatter.data}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
};

export default BlogPage;