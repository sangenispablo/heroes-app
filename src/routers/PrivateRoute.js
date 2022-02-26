import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../auth/authContext";

export const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    const lastPath = {
        pathname: useLocation().pathname,
        search: useLocation().search
    }

    localStorage.setItem('lastPath', JSON.stringify(lastPath));

    return user.logged ? children : <Navigate to={"/login"} />
}