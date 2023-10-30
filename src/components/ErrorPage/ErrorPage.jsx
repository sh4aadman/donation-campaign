import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-3xl text-center m-10">
            <h2>Sorry for the inconvenience!</h2>
            <Link to='/'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;