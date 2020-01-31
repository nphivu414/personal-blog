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

const BlogIndex: React.FunctionComponent<BlogIndexProps> = () => {
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
export default BlogIndex;