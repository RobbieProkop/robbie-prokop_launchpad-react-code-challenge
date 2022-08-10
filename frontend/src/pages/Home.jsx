import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "../components/PostForm";
import EditPostForm from "../components/EditPostForm";
import PostItem from "../components/PostItem";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { getPosts, setToggleForm, reset } from "../features/posts/postSlice";

const Home = () => {
  const dispatch = useDispatch();
  const toggled = useSelector((state) => state.posts.postForm);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );

  const addPostHandler = (e) => {
    e.preventDefault();
    {
      !toggled && dispatch(setToggleForm());
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
      console.log(message);
    }
    dispatch(getPosts());

    return () => dispatch(reset());
  }, [dispatch, isError, message]);
  if (isLoading) {
    return <Spinner />;
  }

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
          </section>

          {toggled && <PostForm />}

          <section className="content">
            {posts.length > 0 ? (
              <div className="posts">
                {/* after removing the extra outside array, change this to posts.map */}
                {posts[0].map((post) => (
                  <PostItem key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <h3>No posts to show</h3>
            )}
          </section>
        </div>
      )}

      {/* <div class="bg1">
        <h2>Battery</h2>
        <p>Respiration</p>
      </div>
      <div class="bg1">
        <h2>Running</h2>
        <p>Miles</p>
      </div>
      <div class="bg2">
        <h2>36 &deg;</h2>
        <p>Temperature</p>
      </div>
      <div class="bg1">
        <h2>Bed</h2>
        <p>Sleep Keep</p>
      </div>
      <div class="bg1">
        <h2>
          98 <span>bpm</span>
        </h2>
        <p>Heart Rate</p>
      </div>
      <div class="bg2">
        <h2>
          170 <span>lbs</span>
        </h2>
        <p>Weight</p>
      </div>
      <div class="bg1">
        <h2>
          28 <span>%</span>
        </h2>
        <p>Fat Percentage</p>
      </div>
      <div class="bg2">
        <h2>
          118 <span>mgdl</span>
        </h2>
        <p>Blood Glucose</p>
      </div>
      <div class="bg2">
        <h2>
          680 <span>kcal</span>
        </h2>
        <p>AVG Consumption</p>
      </div>
      <div class="bg1">
        <h2>Dumbell</h2>
        <p>Workouts</p>
      </div>
      <div class="bg1">
        <h2>
          85 <span>%</span>
        </h2>
        <p>Body Hydration</p>
      </div> */}
    </>
  );
};
export default Home;
