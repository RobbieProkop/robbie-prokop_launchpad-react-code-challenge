const PostItem = ({ post }) => {
  return (
    <div className="post">
      <div>
        <h4>User: {post.userId}</h4>
        <div>
          <button className="btn btn-edit">Edit</button>
          <button className="btn btn-delete">Delete</button>
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
