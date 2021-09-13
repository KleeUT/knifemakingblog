import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import { H2, PageLayout } from "../../components";

// markup
const IndexPage = () => {
  const q: QueryResponse = useStaticQuery(query);
  return (
    <PageLayout>
      <H2>Blog</H2>
      {q.allMarkdownRemark.edges.map((e) => JSON.stringify(e.node.frontmatter))}
      <ol>
        {q.allMarkdownRemark.edges.map((e) => (
          <li>
            <Link to={`${e.node.frontmatter.date}/${e.node.frontmatter.slug}`}>
              {e.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ol>
    </PageLayout>
  );
};

export default IndexPage;

const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`;

type QueryResponse = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            title: string;
            slug: string;
            date: string;
            abstract: string;
          };
        };
      }
    ];
  };
};

const cat = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            title: "My second blog post",
            slug: "my-second-post",
            date: "2019-05-04",
          },
        },
      },
      {
        node: {
          frontmatter: {
            title: "My first blog post",
            slug: "my-first-post",
            date: "2019-05-04",
          },
        },
      },
    ],
  },
};
