import React from 'react';
import { Link } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import BlogList from '../components/Blog/BlogList';
import Layout from '../components/layout';
import MaterialThemeProvider from '../theme/MaterialThemeProvider';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(
      this,
      'props.data.cosmicjsSettings.metadata.site_title'
    );
    const posts = get(this, 'props.data.allCosmicjsPosts.edges');
    const author = get(this, 'props.data.cosmicjsSettings.metadata');
    const location = get(this, 'props.location');
    console.log('post', posts);
    return (
      <MaterialThemeProvider>
        <Layout location={location}>
          <Helmet title={siteTitle} />
          {/* <Bio settings={author} /> */}
          <BlogList data={posts} />
          {/* {posts.map(({ node }) => {
            const title = get(node, 'title') || node.slug;
            return (
              <div key={node.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={`posts/${node.slug}`}>
                    {title}
                  </Link>
                </h3>
                <small>{node.created}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.metadata.description,
                  }}
                />
              </div>
            );
          })} */}
        </Layout>
      </MaterialThemeProvider>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
      edges {
        node {
          metadata {
            description
            hero {
              imgix_url
            }
          }
          slug
          title
          created(formatString: "DD MMMM, YYYY")
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
  }
`;
