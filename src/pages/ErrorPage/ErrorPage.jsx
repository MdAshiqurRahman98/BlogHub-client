import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-52">
            <h3 className="text-3xl my-5">Oops!!!</h3>
            <p className="mb-9 text-lg">The page doesn`t exist</p>
            <Link to='/'><button className="btn bg-orange-500 font-semibold text-white normal-case hover:bg-orange-500">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;