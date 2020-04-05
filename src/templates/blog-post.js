import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import store from 'src/redux/store';
import Prism from 'prismjs';

import Bio from 'src/components/Bio';
import Layout from 'src/components/Layout';
import { rhythm, scale } from 'src/utils/typography';
const loadLanguages = require('prismjs/components/');
console.log('loadLanguages', loadLanguages);
//loadLanguages(['jsx']);

function BlogPostTemplate(props) {
  const post = props.data.cosmicjsPosts;
  const siteTitle = get(props, 'data.cosmicjsSettings.metadata.site_title');
  const author = get(props, 'data.cosmicjsSettings.metadata') || {};
  console.log('BlogPostTemplate -> author', author);
  const location = get(props, 'location');
  const { previous, next } = props.pageContext;

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll();
  }, []);

  return (
    <Provider store={store}>
      <Layout location={location}>
        <style>
          {`
        .post-content {
          text-align: justify;
        }
        .post-hero {
          width: calc(100% + ${rhythm(8)});
          margin-left: ${rhythm(-4)};
          height: ${rhythm(18)};
        }
        @media (max-width: ${rhythm(32)}) {
          .post-hero {
            width: calc(100% + ${rhythm((3 / 4) * 2)});
            margin-left: ${rhythm(-3 / 4)};
            height: ${rhythm(13)};
          }
        }
      `}
        </style>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div
          style={{
            marginTop: rhythm(1.4),
          }}
        >
          <Link to="/">← Back to Posts</Link>
        </div>
        <h1
          style={{
            marginTop: rhythm(1),
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(0.6),
            marginTop: rhythm(-0.6),
          }}
        >
          {post.created}
        </p>
        <div
          className="post-hero"
          style={{
            backgroundColor: '#007ACC',
            backgroundImage: `url("${post.metadata.hero.imgix_url}?w=2000")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginBottom: rhythm(0.6),
            position: 'relative',
          }}
        />
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio settings={author} />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {previous && (
            <li>
              <Link to={`posts/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={`posts/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            </li>
          )}
        </ul>
      </Layout>
    </Provider>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    cosmicjsPosts(slug: { eq: $slug }) {
      id
      content
      title
      created(formatString: "MMMM DD, YYYY")
      metadata {
        hero {
          imgix_url
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
