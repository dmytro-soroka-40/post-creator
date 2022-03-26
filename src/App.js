import React from 'react';
import FetchedPosts from './components/FetchedPosts/FetchedPosts';
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';
import './App.scss';

function App() {
  return (
    <div className="post-creator">
      <div className="post-creator__wrapper">
        <h1 className="post-creator__title">post-creator.</h1>
        <PostForm />
        <div className="post-creator__posts">
          <div className="post-creator__block post-creator__block_sync">
            <h2 className="post-creator__subtitle">Sync posts</h2>
            <Posts />
          </div>
          <div className="post-creator__block post-creator__block_async">
            <h2 className="post-creator__subtitle">Async posts</h2>
            <FetchedPosts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
