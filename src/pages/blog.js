import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from "../components/layout"

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
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <h1>{edge.node.frontmatter.title}</h1>
              <p>{edge.node.frontmatter.data}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
};

export default BlogPage;