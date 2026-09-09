import React from "react";
import logo from "../assets/download.png";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";

class song extends React.Component {
  
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
                <a>Add Artist</a>
              </Link>
              <Link to="/addsongs">
                <a className="active">addsongs</a>
              </Link>
            </div>
          </header>
        </div>
        <div class="songget">
          <img src={logo}></img>
          <form method="POST" action="http://localhost:8080/song/add">
            <div class="form-group">
              <label for="sname">Song name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                name="sname"
              />
              <div>
                <label for="aname">Artist name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="e.g Post Malone"
                  name="aname"
                />
              </div>
              <div>
                <label for="url">embed id of the song</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="insert url"
                  name="url"
                />
              </div>
              <div class="form-group">
                <label for="track_length">
                  track length(between 0 and 700 seconds)
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="track_length"
                  min="0"
                  max="700"
                />
              </div>
              <button className="button">
              <input
                type="submit"
                value="Add song"
                class="formbutton"
              ></input></button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default song;
