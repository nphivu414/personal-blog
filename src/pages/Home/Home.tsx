import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostListAction } from 'src/redux/thunk/post/postListThunk';
import { getPostList } from 'src/redux/selectors/post/postSelector';
import PostList from 'src/components/Blog/BlogList/BlogList.jsx';

type HomeProps = {};
const { useEffect } = React;

const Home: React.FunctionComponent<HomeProps> = (props) => {
  const dispatch = useDispatch();
  const postList = useSelector(getPostList);

  useEffect(() => {
    dispatch(loadPostListAction({}));
  }, [dispatch])

  return (
    <div>
      <PostList data={postList} />
    </div>
  )
}

export default Home;