import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../../redux/actions';
import Alert from '../Alert/Alert';
import Button from '../Button/Button';

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
      className="form"
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      {alert && <Alert text={alert} />}

      <div className="form__input-wrapper">
        <label htmlFor="title" className="form__label">
          Title:
        </label>
        <input
          type="text"
          value={title}
          className="form__input"
          id="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="body" className="form__label">
          Body:
        </label>
        <textarea
          type="text"
          value={body}
          className="form__input form__input_textarea"
          id="body"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
      </div>
      <Button text={'Add post'} />
    </form>
  );
};

const mapDispatchToProps = {
  createPost,
  showAlert,
};

const mapStateToProps = (state) => ({ alert: state.app.alert });

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
