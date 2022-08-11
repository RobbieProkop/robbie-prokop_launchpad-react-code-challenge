import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PostItem from "../components/PostItem";
import {
  editPost,
  getOnePost,
  selectPostById,
} from "../features/posts/postSlice";

const EditPostForm = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  console.log("post edit", post);
  const [userId, setUserId] = useState(post.userId);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(editPost({ body }));
  //   setUserId("");
  //   setTitle("");
  //   setBody("");
  // };

  // if (!post) {
  //   return (
  //     <section>
  //       <h2>Post Not Found</h2>
  //     </section>
  //   );
  // }

  useEffect(() => {
    if (isError) {
      toast.error(message);
      console.log(message);
    }
    dispatch(getOnePost(postId));
  }, [dispatch]);

  return (
    <div className="container">
      <section className="heading">
        <h1>Post {post.id}</h1>
      </section>

      <section className="form">
        <form>
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
          </div>
        </form>
      </section>
    </div>
  );
};
export default EditPostForm;
