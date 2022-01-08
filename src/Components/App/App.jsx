import React, { lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import Contacts from "../Contacts/Contacts";
// import Register from "../Register/Register";
// import Login from "../Login/Login";
import UserMenu from "../UserMenu/UserMenu";
// import StartPage from "../StartPage/StartPage";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import { getCurrentUser } from "../../redux/contacts/contscts-operations";

const Contacts = lazy(() =>
  import("../Contacts/Contacts" /* webpackChunkName: "ContactsPage"*/)
);
const Register = lazy(() =>
  import("../Register/Register" /* webpackChunkName: "RegisterPage"*/)
);
const Login = lazy(() =>
  import("../Login/Login" /* webpackChunkName: "LoginPage"*/)
);
// const UserMenu = lazy(() =>
//   import("../UserMenu/UserMenu" /* webpackChunkName: "UserMenu"*/)
// );
const StartPage = lazy(() =>
  import("../StartPage/StartPage" /* webpackChunkName: "StartPage"*/)
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const isLogIn = useSelector((state) => state.account.isLogin);
  const loading = useSelector((state) => state.showContacts);
  // console.log(loading);
  return (
    <>
      {!loading && (
        <nav>
          <NavLink to="/">StartPage</NavLink>
          {!isLogIn && (
            <NavLink to="/Login" exact>
              Login
            </NavLink>
          )}
          {!isLogIn && (
            <NavLink to="/Register" exact>
              Register
            </NavLink>
          )}
          {isLogIn && <NavLink to="/Contacts">Contacts</NavLink>}
          {isLogIn && <UserMenu />}
        </nav>
      )}
      {!loading && (
        <Suspense fallback={<h1>Загрузка</h1>}>
          <Switch>
            <PublicRoute restricted redirectTo="/Contacts" path="/Login">
              <Login />
            </PublicRoute>
            <PublicRoute restricted path="/Register">
              <Register />
            </PublicRoute>
            <PrivateRoute restricted redirectTo="/Login" path="/Contacts">
              <Contacts />
            </PrivateRoute>
            <Route path="/">
              <StartPage />
            </Route>
          </Switch>
        </Suspense>
      )}
    </>
  );
};
export default App;
