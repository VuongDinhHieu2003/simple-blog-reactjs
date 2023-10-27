import React, { useState } from 'react';

function PostForm({ onPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const generateRandomId = () => {
    return Math.floor(Math.random() * 10000);
  };

  const handleSubmit = () => {
    if (title.trim() && content.trim()) {
      const newPost = {
        id: generateRandomId(),
        title,
        content,
      };
      onPost(newPost);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}

export default PostForm;
