import React from "react";
import logo from "../assets/download.png";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
class login extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
        <header>
          <a href="#default" src={logo}></a>
          <div class="header-right">
          <Link to="/">
              <a className="active">
              Login
              </a>
          </Link>
            <Link to="/register">
              <a>
              Register
              </a>
          </Link>
          <Link to="/aboutus">
              <a>
              About us
              </a>
          </Link>
          </div>
        </header>
        </div>
        <div className="login">
          <img src={logo}></img>
          <form method="POST" action="http://localhost:8080/user/ulogin">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
              />
            </div>
            <button className="button">
            <input type="submit" value="Login" className="formbutton"></input>
            </button>
          </form>
          <br></br>
          <Link to="/register">
            <button className="button">
              Or register
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default login;
