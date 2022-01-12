import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) => {
  const isLoggedIn = useSelector((state) => state.account.isLogin);
  // const user = useSelector((state) => state?.account?.user?.name);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
