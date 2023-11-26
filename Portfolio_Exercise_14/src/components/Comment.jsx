import React, { useState } from 'react';
import './Comment.css';

function Comment({ onCommentSubmit }) {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleUsernameChange = (x) => {
    setUsername(x.target.value);
  };

  const handleCommentChange = (x) => {
    setComment(x.target.value);
  };

  const handleSubmit = (x) => {
    x.preventDefault();
    onCommentSubmit({ username, comment });
    setUsername('');
    setComment('');
  };

  return (
    <div className="comment-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Comment;