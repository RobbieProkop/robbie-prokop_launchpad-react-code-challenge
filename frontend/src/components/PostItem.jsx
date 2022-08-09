const PostItem = ({ post }) => {
  return (
    <div className="post">
      <h4>post.userId</h4>
      <h2>post.title</h2>
      <p>post.body</p>
    </div>
  );
};
export default PostItem;
