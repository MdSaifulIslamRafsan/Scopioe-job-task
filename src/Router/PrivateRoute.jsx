
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({children}) => {
  const location = useLocation();
    const {user , loader} = useAuth();
    if(loader){
        return  <div className="grid place-content-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
      </div>
    }
    if(user){
        return children;
    }

   return <Navigate state={location?.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;