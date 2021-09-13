import React from "react";
import { graphql } from "gatsby";
import { H2, PageLayout } from "../../../components";
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <PageLayout>
      <H2>{frontmatter.title}</H2>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </PageLayout>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
