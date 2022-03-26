import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h5 className="post__title">{post.title}</h5>
      <p className="post__body">{post.body}</p>
    </div>
  );
};

export default Post;
