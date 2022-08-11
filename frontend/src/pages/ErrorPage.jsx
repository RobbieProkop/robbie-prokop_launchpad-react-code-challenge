import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container">
      <section className="heading">
        <h1>404 Error! Page Not Found!</h1>
        <div className="btn">
          <Link to="/">Go Back!</Link>
        </div>
      </section>
    </div>
  );
};
export default ErrorPage;
