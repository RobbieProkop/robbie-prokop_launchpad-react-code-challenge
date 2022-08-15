import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "../components/PostForm";
import PostItem from "../components/PostItem";
import Spinner from "../components/Spinner";
import { toast, ToastContainer } from "react-toastify";
import { getPosts, setToggleForm } from "../features/posts/postSlice";
import { FaSearchLocation } from "react-icons/fa";
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
  const [filteredData, setFilteredData] = useState([]);

  //events
  const addPostHandler = (e) => {
    e.preventDefault();
    {
      !togglePostForm && dispatch(setToggleForm());
    }
  };
  const filterHandler = (e, data) => {
    const searchWord = e.target.value;
    (data = "userId") ? setUserId(searchWord) : setSearchId(searchWord);
    const newFilter = posts.filter((post) => {
      data = "userId"
        ? post.userId === Number(searchWord)
        : post.id === Number(searchWord);
    });
    setFilteredData(newFilter);
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

  // for user search results
  let users = [];
  posts.map((post) => {
    if (!users.includes(Number(post.userId))) {
      users.push(post.userId);
    } else {
      return users;
    }
  });
  console.log(users);

  // for id search results
  let ids = [];
  posts.map((post) => {
    if (!ids.includes(Number(post.id))) {
      ids.push(post.id);
    }
  });

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
                  id="text"
                  value={userId}
                  placeholder="User:"
                  onChange={(e) => filterHandler(e, "userId")}
                  disabled={searchId}
                />
                {filteredData.length != 0 && (
                  // { userId.length != 0 && (
                  <div className="data-result">
                    {filteredData.map((user) => (
                      <a key={user} className="data-item">
                        <p>{user}</p>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="column">
                <label htmlFor="postSearch">Search by ID</label>
                <input
                  type="number"
                  name="searchId"
                  id="text"
                  value={searchId}
                  placeholder="ID:"
                  onChange={(e) => filterHandler(e, "searchId")}
                  disabled={userId}
                />
                {filteredData.length != 0 && (
                  <div className="data-result">
                    {filteredData
                      // .filter((post) => {
                      //   if (post.userId === Number(userId)) {
                      //     return post;
                      //   }
                      // })
                      .map((id) => (
                        <a key={id} className="data-item">
                          <p>{id}</p>
                        </a>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {togglePostForm && <PostForm />}

          <section className="content">
            {posts.length > 0 ? (
              <div className="posts">
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
