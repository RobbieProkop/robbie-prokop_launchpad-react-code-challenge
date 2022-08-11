import { useDispatch, useSelector } from "react-redux";
import { deletePost, setEditForm, editPost } from "../features/posts/postSlice";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const postForm = useSelector((state) => state.posts.postForm);
  const editHandler = () => {
    dispatch(editPost(post.id));
    dispatch(setEditForm());
  };

  return (
    <div className="post">
      <div>
        <h4>User: {post.userId}</h4>
        <div>
          <button onClick={editHandler} className="btn btn-edit">
            Edit
          </button>
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
export default PostItem;
