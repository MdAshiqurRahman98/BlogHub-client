import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from './../hooks/useAuth';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return <span className="text-center">
            <Skeleton count={30} />
        </span>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}