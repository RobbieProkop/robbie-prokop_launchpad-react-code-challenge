import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../features/posts/postSlice";

const PostForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const toggleForm = () => dispatch(postActions.setToggleForm());

  const onSubmit = (e) => {
    e.preventDefault();
    toggleForm();
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">
            Write Your Post <span onClick={toggleForm}>X</span>
          </label>
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
