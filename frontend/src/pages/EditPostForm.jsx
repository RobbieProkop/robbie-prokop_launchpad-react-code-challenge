import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PostItem from "../components/PostItem";
import {
  editPost,
  getOnePost,
  selectPostById,
} from "../features/posts/postSlice";

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const [userId, setUserId] = useState(post.userId);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const canSave = [userId, title, body].every(
    (el) => el.toString().length >= 1
  );

  const editHandler = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        dispatch(editPost({ id: post.id, title, body, userId })).unwrap();
        setUserId("");
        setTitle("");
        setBody("");
        navigate("/");
      } catch (error) {
        const message =
          error.response.data.message || error.message || error.toString();
        toast.error(message);
        console.log(message);
      }
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
      console.log(message);
    }
    dispatch(getOnePost(postId));
  }, [dispatch]);

  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    );
  }

  return (
    <div className="container">
      <section className="heading">
        <h1>Post {post.id}</h1>
      </section>

      <section className="form">
        <form onSubmit={editHandler}>
          <div className="form-group">
            <label htmlFor="text">UserID</label>
            <input
              type="text"
              name="text"
              id="userID-form"
              value={userId}
              disabled
            />
            <label htmlFor="text">Title</label>
            <input
              type="text"
              name="text"
              id="title-form"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="text">Post</label>
            <textarea
              type="text"
              name="text"
              rows="4"
              id="post-form"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Edit Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default EditPostForm;
