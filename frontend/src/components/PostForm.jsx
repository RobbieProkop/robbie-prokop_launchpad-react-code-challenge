import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setToggleForm, createPost } from "../features/posts/postSlice";

const PostForm = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const toggleForm = () => {
    dispatch(setToggleForm());
  };

  const canSave = [userId, title, body].every(
    (el) => el.toString().length >= 1
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        dispatch(createPost({ body, title, userId }));
        setUserId("");
        setTitle("");
        setBody("");
        toggleForm();
      } catch (error) {
        const message =
          error.response.data.message || error.message || error.toString();
        toast.error(message);
        console.log(message);
      }
    }
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">
            UserID <span onClick={toggleForm}>X</span>
          </label>
          <input
            type="text"
            name="text"
            id="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <label htmlFor="text">Title</label>
          <input
            type="text"
            name="text"
            id="text"
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
            Submit Post
          </button>
        </div>
      </form>
    </section>
  );
};
export default PostForm;
