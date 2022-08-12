import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import PostItem from "../components/PostItem";
import ErrorPage from "./ErrorPage";
import {
  editPost,
  deletePost,
  selectPostById,
} from "../features/posts/postSlice";

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();

  const { isLoading, isError, message } = useSelector((state) => state.posts);
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");

  if (!post) {
    return <ErrorPage />;
  }

  const canSave = [title, body].every((el) => el.toString().length >= 1);

  const onSubmit = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        dispatch(
          editPost({ id: post.id, title, body, userId: post.userId })
        ).unwrap();
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

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //     console.log(message);
  //   }
  //   dispatch(getOnePost(postId));
  // }, [dispatch]);

  return (
    <div className="container">
      <section className="heading">
        <h1>Post {post.id}</h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">UserID</label>
            <input
              type="text"
              name="text"
              id="userID-form"
              value={post.userId}
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
            <button
              //This would work if I had access to the backend. Need the deletePost to return the post.id in order to filter it out.
              onClick={() => dispatch(deletePost(post.id))}
              className="btn btn-block btn-delete"
            >
              Delete
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default EditPostForm;
