import * as React from "react";
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';

import store from '../redux/store';
import Home from 'src/pages/Home';
import Layout from '../components/Layout';
import MaterialThemeProvider from '../theme/MaterialThemeProvider';


interface BlogIndexProps {
  location: string,
}

const BlogIndex: React.FunctionComponent<BlogIndexProps> = (props) => {
  return (
    <Provider store={store}>
      <MaterialThemeProvider>
        <Layout>
          <Helmet title={""} />
          <Home />
        </Layout>
      </MaterialThemeProvider>
    </Provider>
  )
}
// class BlogIndex extends React.Component {
//   render() {
//     const siteTitle = get(
//       this,
//       'props.data.cosmicjsSettings.metadata.site_title'
//     );
//     // const posts = get(this, 'props.data.allCosmicjsPosts.edges');
//     // const author = get(this, 'props.data.cosmicjsSettings.metadata');
//     const location = get(this, 'props.location');
//     console.log('post', posts);
//     return (
// <Provider store={store}>
//   <MaterialThemeProvider>
//     <Layout location={location}>
//       <Helmet title={siteTitle} />
//       {/* <Bio settings={author} /> */}
//       <PostList data={posts} />
//       {/* {posts.map(({ node }) => {
//       const title = get(node, 'title') || node.slug;
//       return (
//         <div key={node.slug}>
//           <h3
//             style={{
//               marginBottom: rhythm(1 / 4),
//             }}
//           >
//             <Link style={{ boxShadow: 'none' }} to={`posts/${node.slug}`}>
//               {title}
//             </Link>
//           </h3>
//           <small>{node.created}</small>
//           <p
//             dangerouslySetInnerHTML={{
//               __html: node.metadata.description,
//             }}
//           />
//         </div>
//       );
//     })} */}
//     </Layout>
//   </MaterialThemeProvider>
// </Provider>
//     );
//   }
// }

export default BlogIndex;

// export const pageQuery = graphql`
//   query IndexQuery {
//     allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
//       edges {
//         node {
//           metadata {
//             description
//             hero {
//               imgix_url
//             }
//           }
//           slug
//           title
//           created(formatString: "DD MMMM, YYYY")
//         }
//       }
//     }
//     cosmicjsSettings(slug: { eq: "general" }) {
//       metadata {
//         site_title
//         author_name
//         author_bio
//         author_avatar {
//           imgix_url
//         }
//       }
//     }
//   }
// `;
