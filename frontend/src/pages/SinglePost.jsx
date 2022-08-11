import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  deletePost,
  selectPostById,
  setEditForm,
} from "../features/posts/postSlice";

const SinglePost = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  const editHandler = () => {
    // dispatch(editPost(post.id));
    dispatch(setEditForm());
  };

  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    );
  }
  return (
    <div className="post">
      <div>
        <h4>User: {post.userId}</h4>
        <div>
          {console.log("post id", post.id)}
          <Link
            to={`/edit/${post.id}`}
            onClick={editHandler}
            className="btn btn-edit"
          >
            Edit
          </Link>
          <button
            //This would work if I had access to the backend. Need the deletePost to return the post.id in order to filter it out.
            onClick={() => dispatch(deletePost(post.id))}
            className="btn btn-delete"
          >
            Delete
          </button>
        </div>
      </div>
      <h4>ID: {post.id}</h4>
      <h3>
        Title: <span>{post.title}</span>
      </h3>
      <p>{post.body}</p>
    </div>
  );
};
export default SinglePost;
