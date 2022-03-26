import React from 'react';
import { connect } from 'react-redux';
import Post from '../Post/Post';

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <h3 className="post-creator__error">No posts!</h3>;
  }

  return syncPosts.map((post) => {
    return <Post post={post} key={post.id} />;
  });
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
