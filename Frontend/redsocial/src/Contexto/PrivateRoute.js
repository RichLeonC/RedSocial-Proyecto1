import React, { useContext } from "react";
import { AuthContext } from "./auth";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;