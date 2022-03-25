import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../../redux/actions';
import Alert from '../Alert/Alert';

const PostForm = ({ showAlert, createPost, alert }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return showAlert('Post title cannot be empty!');
    }

    if (!body.trim()) {
      return showAlert('Post body cannot be empty!');
    }

    const newPost = {
      title: title,
      body: body,
      id: Date.now().toString(),
    };

    createPost(newPost);
    setTitle('');
    setBody('');
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      {alert && <Alert text={alert} />}

      <div className="form-group">
        <label htmlFor="title">Title post</label>
        <input
          type="text"
          value={title}
          className="form-control"
          id="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="body">Body post</label>
        <input
          type="text"
          value={body}
          className="form-control"
          id="body"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-success mt-2" type="submit">
        Create
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  createPost,
  showAlert,
};

const mapStateToProps = (state) => ({ alert: state.app.alert });

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
