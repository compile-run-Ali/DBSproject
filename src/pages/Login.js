import React from "react";
import logo from "../assets/download.png";
import { Outlet, Link } from "react-router-dom";
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
  render() {
    return (
      <div className="login">
        <img src={logo}></img>
        <form method="POST">
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
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
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <input type="submit" value="Login"class="btn btn-primary"></input>
        </form>
        <br></br>
        <Link to="/register">
            <button type="button"class="btn btn-info">Or register</button>
          </Link>
          <p className="App-intro">;{this.state.apiResponse}</p>
      </div>
    );
  }
}


export default login;
