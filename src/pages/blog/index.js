import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.id}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        );
      })}
    </Layout>
  );
};

// Using GraphQL queries in page components uses a slightly different syntax from queries in building-block components. In page components, you use page queries.

// Define and export page query.

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
