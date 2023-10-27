import { React, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

function PostDetail({ posts, onComment, setPosts }) {
  const { id } = useParams();
  const [newComment, setNewComment] = useState('');
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <div>Post not found.</div>;
  }

  const handleCommentSubmit = () => {
    onComment(post.id, newComment);
    setNewComment('');
    const updatedComments = Array.isArray(post.comments) ? [...post.comments, newComment] : [newComment];
    const updatedPost = { ...post, comments: updatedComments };

    setPosts((prevPosts) =>
      prevPosts.map((prevPost) =>
        prevPost.id === post.id ? updatedPost : prevPost
      )
    );
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <h3>Comments</h3>
      <ul>
        {post.comments && post.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>

      <div>
        <textarea
          rows="3"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>Submit Comment</button>
      </div>
    </div>
  );
}

export default PostDetail;
