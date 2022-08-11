import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setEditForm,
  editPost,
  selectPostById,
} from "../features/posts/postSlice";

const EditPostForm = ({ post }) => {
  // const { postId } = useParams();
  // const post = useSelector((state) => selectPostById(state, Number(postId)));
  console.log("post edit", post);
  const [userId, setUserId] = useState(post.userId);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const dispatch = useDispatch();
  const editPostState = useSelector((state) => state.posts.editPost);

  const toggleForm = () => {
    dispatch(setEditForm());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editPost({ body }));
    setUserId("");
    setTitle("");
    setBody("");
    toggleForm();
  };

  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    );
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">
            UserID <span onClick={toggleForm}>X</span>
          </label>
          <input type="text" name="text" id="text" value={userId} disabled />
          <label htmlFor="text">Title</label>
          <input
            type="text"
            name="text"
            id="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="text">Post</label>
          <input
            type="text"
            name="text"
            id="text"
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
  );
};
export default EditPostForm;
