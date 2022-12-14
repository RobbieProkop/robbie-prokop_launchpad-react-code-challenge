import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "../components/PostForm";
import PostItem from "../components/PostItem";
import Spinner from "../components/Spinner";
import { toast, ToastContainer } from "react-toastify";
import { getPosts, setToggleForm } from "../features/posts/postSlice";
import ReturnToTop from "../components/ReturnToTop";

const Home = () => {
  const dispatch = useDispatch();

  //useSelectors
  const togglePostForm = useSelector((state) => state.posts.postForm);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );

  //useStates
  const [searchId, setSearchId] = useState("");
  const [userId, setUserId] = useState("");

  //Events
  //submit post
  const addPostHandler = (e) => {
    e.preventDefault();
    {
      !togglePostForm && dispatch(setToggleForm());
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
      <ToastContainer />;
      console.log(message);
    }
    dispatch(getPosts());

    //to be used if i want to reset state after moving to another page
    // return () => dispatch(reset());
  }, [dispatch, isError, message]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <section className="heading">
            <h1>Posts Dashboard</h1>
            <button className="btn" onClick={addPostHandler}>
              Add a post!
            </button>

            {/* THIS IS NOT DOING A GET REQUEST BY POST ID, IT IS FILTERING THE POSTS INSTEAD. MAY CHANGE LATER */}
            <div className="search">
              <div className="column">
                <label htmlFor="postSearch">Search by User</label>
                <input
                  type="text"
                  name="user"
                  id="search-user"
                  value={userId}
                  placeholder="User:"
                  onChange={(e) => setUserId(e.target.value)}
                  disabled={searchId}
                />
              </div>

              <div className="column">
                <label htmlFor="postSearch">Search by ID</label>
                <input
                  type="text"
                  name="searchId"
                  id="search-postId"
                  value={searchId}
                  placeholder="ID:"
                  onChange={(e) => setSearchId(e.target.value)}
                  disabled={userId}
                />
              </div>
            </div>
          </section>

          {togglePostForm && <PostForm />}

          <section className="content">
            {posts.length > 0 ? (
              <div className="posts">
                {/* This feels busy. Come back to refactor */}
                {posts
                  .filter((post) => {
                    if (!searchId && !userId) {
                      return post;
                    } else if (post.userId === Number(userId)) {
                      return post;
                    } else if (post.id === Number(searchId)) {
                      return post;
                    }
                  })
                  .sort((a, b) => {
                    if (a.id > b.id) return 1;
                    if (a.id < b.id) return -1;
                    return 0;
                  })
                  .map((post) => (
                    <PostItem key={post.id} post={post} />
                  ))}
              </div>
            ) : (
              <h3>No posts to show</h3>
            )}
          </section>
          <ReturnToTop />
        </div>
      )}
    </>
  );
};
export default Home;
