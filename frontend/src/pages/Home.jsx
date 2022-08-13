import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "../components/PostForm";
import PostItem from "../components/PostItem";
import Spinner from "../components/Spinner";
import { toast, ToastContainer } from "react-toastify";
import { getPosts, setToggleForm } from "../features/posts/postSlice";
import { FaAngleDoubleUp } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();

  const togglePostForm = useSelector((state) => state.posts.postForm);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );

  const [searchId, setSearchId] = useState("");
  const [userId, setUserId] = useState("");

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
                  type="number"
                  name="user"
                  id="text"
                  value={userId}
                  placeholder="User:"
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="column">
                <label htmlFor="postSearch">Search by ID</label>
                <input
                  type="number"
                  name="searchId"
                  id="text"
                  value={searchId}
                  placeholder="ID:"
                  onChange={(e) => setSearchId(e.target.value)}
                />
              </div>
            </div>
          </section>

          {togglePostForm && <PostForm />}
          {/* {toggleEditForm && <EditPostForm />} */}

          <section className="content">
            {posts.length > 0 ? (
              <div className="posts">
                {/* after removing the extra outside array, change this to posts.map */}
                {posts
                  .filter((post) => {
                    if (searchId === "" && userId === "") {
                      return post;
                    } else if (post.id === Number(searchId)) {
                      return post;
                    } else if (post.userId === Number(userId)) {
                      return post;
                    }
                  })
                  .map((post) => (
                    <PostItem key={post.id} post={post} />
                  ))}
                <div className="return-to-top">
                  <a href="#header">
                    <button>
                      <FaAngleDoubleUp />
                    </button>
                  </a>
                </div>
              </div>
            ) : (
              <h3>No posts to show</h3>
            )}
          </section>
        </div>
      )}
    </>
  );
};
export default Home;
