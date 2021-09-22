import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import Signup from "components/Signup/Signup";

import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "PrivateRoute";
import UpdateProfile from "components/UpdateProfile/UpdateProfile";
import Dashboard from "components/Dashboard/Dashboard";
import Login from "components/Login/Login";
import ForgotPassword from "components/ForgetPassword/ForgetPassword";

ReactDOM.render(
  <Router>
    <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />

        <PrivateRoute
          path="/admin"
          render={(props) => <AdminLayout {...props} />}
        />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
