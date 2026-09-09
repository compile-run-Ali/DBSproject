import React from "react";
import logo from "../assets/download.png";
import axios from "axios"
import { Outlet, Link } from "react-router-dom";

class register extends React.Component {

  render() {
    return (
      <div>
        <div className="header">
          <header>
            <a href="#default"></a>
            <div class="header-right">
              <Link to="/">
                <a>Login</a>
              </Link>
              <Link to="/register">
                <a className="active">Register</a>
              </Link>
              <Link to="/aboutus">
                <a>About us</a>
              </Link>
            </div>
          </header>
        </div>
        <div className="reg">
          <img src={logo}></img>
          <form method="POST" action="http://localhost:8080/user/reg">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              <div>
                <label for="username">Username</label>
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  placeholder="Enter Username"
                  name="username"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div class="form-group">
                <label for="user_age">Age</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Your age"
                  name="user_age"
                />
              </div>
              <div class="form-group">
                <label for="user_country">Country</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your country"
                  name="user_country"
                />
              </div>
              <div class="form-group">
                <label for="creditcard_info">Creditcard Information</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="creditcard information"
                  name="creditcard_info"
                />
              </div>
              <button className="button">
              <input
                type="submit"
                value="Register"
                class="formbutton"
              ></input>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default register;
