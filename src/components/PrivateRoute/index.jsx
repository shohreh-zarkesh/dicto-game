import {Navigate, Outlet, useLocation} from "react-router-dom";
import {checkIsLoggedIn} from "../../utils/check-is-logged-in.utils";

export function PrivateRoute(props) {

    const location = useLocation();
    const isLoggedIn = checkIsLoggedIn();

    return isLoggedIn ? <Outlet/> : <Navigate to={`auth/login?callbackURI=${location.pathname}`}/>;
}