import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToggleForm, createPost } from "../features/posts/postSlice";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const toggleForm = () => dispatch(setToggleForm());

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ text }));
    setText("");
    toggleForm();
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">
            Title <span onClick={toggleForm}>X</span>
          </label>
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
            value={text}
            onChange={(e) => setText(e.target.value)}
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
