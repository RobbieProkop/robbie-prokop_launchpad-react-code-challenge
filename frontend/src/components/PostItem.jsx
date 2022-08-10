import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";

const PostItem = ({ post }) => {
  const editHandler = () => {};
  const deleteHandler = () => {};
  const dispatch = useDispatch();
  return (
    <div className="post">
      <div>
        <h4>User: {post.userId}</h4>
        <div>
          <button onClick={editHandler} className="btn btn-edit">
            Edit
          </button>
          <button
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
export default PostItem;
