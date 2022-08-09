import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../features/posts/postSlice";

const PostForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const postForm = useSelector((state) => state.posts.postForm);
  console.log("post form", postForm);

  // const setToggleForm = () => {
  //   dispatch(setToggleForm());
  //   console.log("toggle");
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postActions.setToggleForm());
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Write Your Post</label>
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
