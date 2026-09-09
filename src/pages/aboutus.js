import React from "react";
import logo from "../assets/download.png";
import { Outlet, Link } from "react-router-dom";


class aboutus extends React.Component {
  render() {
    return (
      <div>
       <div className="header">
        <header>
            <img src={logo}/>
          <a href="#default"></a>
          <div class="header-right">
          <Link to="/">
              <a>
              Login
              </a>
          </Link>
            <Link to="/register">
              <a>
              Register
              </a>
          </Link>
          <Link to="/aboutus">
              <a className="active">
              About us
              </a>
          </Link>
          </div>
          </header>
      </div>
      <div className="ourteam">
      <h2>OUR TEAM</h2>
      <div className="column">
      <div className="card">
          <div className="acontainer">
              <h2>Ali Abdullah</h2>
              <p className="title">CMS:335428</p>
              <p><button class="button">aabdullah.bscs20seecs@seecs.edu.pk</button></p>
          </div>
      </div>
      </div>
      <div className="column">
      <div className="card">
          <div className="acontainer">
              <h2>Haider Muhammad Wazir</h2>
              <p className="title">CMS:333657</p>
              <p><button class="button">hwazir.bscs20seecs@seecs.edu.pk</button></p>
          </div>
      </div>
      </div>
      <div className="column">
      <div className="card">
          <div className="acontainer">
              <h2>Hareem Bilal Malik</h2>
              <p className="title">CMS:344043</p>
              <p><button class="button">hmalik.bscs20seecs@seecs.edu.pk</button></p>
          </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default aboutus;