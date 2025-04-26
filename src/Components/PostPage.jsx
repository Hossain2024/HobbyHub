import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../client';
import "./PostPage.css";
import './Home.css'
const PostPage = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true); // 👈 loading state

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('Post')
        .select()
        .eq('Title', decodedTitle)
        .single();
      if (error) {
        console.error('Fetch error:', error);
      } else {
        setPost(data);
      }
    };

    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('Comments')
        .select()
        .eq('Title', decodedTitle)
        .order('id', { ascending: true });
      if (!error) setComments(data);
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchPost(), fetchComments()]);
      setLoading(false);
    };

    fetchData();
  }, [decodedTitle]);

  const handleLike = async () => {
    if (!post) return;
    const newLikes = (post.Like || 0) + 1;
    const { error } = await supabase
      .from('Post')
      .update({ Like: newLikes })
      .eq('Title', decodedTitle);
    if (!error) {
      setPost((prev) => ({ ...prev, Like: newLikes }));
    } else {
      console.error('Like update error:', error);
    }
  };



  // Function for submitting a comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
  
    // Get the latest comment ID
    const { data: lastComment, error: fetchError } = await supabase
      .from('Comments')
      .select('id')
      .order('id', { ascending: false })
      .limit(1); // ❌ remove .single()
  
    if (fetchError) {
      console.error('Error fetching last comment:', fetchError);
      return;
    }
  
    const newId = lastComment && lastComment.length > 0 ? lastComment[0].id + 1 : 1;
  
    const { data, error } = await supabase
      .from('Comments')
      .insert([{ id: newId, Title: decodedTitle, Comment: newComment }])
      .select();
  
    if (error) {
      console.error('Comment insert error:', error);
    } else {
      setComments((prev) => [...prev, data[0]]);
      setNewComment('');
    }
  };
  
  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }
  return post ? (
    <div className="post-page">
      <h1>{post.Title}</h1>
      <p>{post.Content}</p>

      <button onClick={handleLike}>❤️ Like ({post.Like || 0})</button>

      {/* Comment form */}
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button type="submit">Post Comment</button>
      </form>

      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.Comment}</li>
        ))}
      </ul>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default PostPage;
