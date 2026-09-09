import React from "react";
import logo from "../assets/download.png";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";

class artist extends React.Component {

  render() {
    return (
      <div>
        <div className="header">
          <header>
            <img src={logo} />
            <a href="#default"></a>
            <div class="header-right">
              <Link to="/home">
                <a>Home</a>
              </Link>
              <Link to="/addartist">
                <a className="active">Add Artist</a>
              </Link>
              <Link to="/addsongs">
                <a>addsongs</a>
              </Link>
            </div>
          </header>
        </div>
        <div class="songget">
          <img src={logo}></img>
          <form method="POST" action="http://localhost:8080/artist/addArtist" >
            <div class="form-group">
              <label for="aname">Artist name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                name="aname"
              />
              <div>
                <label for="country">Country of the artist</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Country"
                  name="country"
                />
              </div>
              <button className="button">
              <input
                type="submit"
                value="Add Artist"
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

export default artist;
