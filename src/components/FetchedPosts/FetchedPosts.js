import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions';
import Post from '../Post/Post';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <Button text={'Async post'} onClick={() => dispatch(fetchPosts())} />
    );
  }

  return posts.map((post) => {
    return <Post post={post} key={post.id} />;
  });
};

export default FetchedPosts;
