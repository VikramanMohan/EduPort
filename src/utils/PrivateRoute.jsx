import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("token"); // Or use context/state

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
