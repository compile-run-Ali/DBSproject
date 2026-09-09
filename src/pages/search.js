import axios from "axios";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

class searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sname: "",
      URL: "",
    };
  }
  handleChange = (event) => {
    this.setState({ sname: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`http://localhost:8080/song/details`, this.state).then((res) => {
      console.log(res);
      console.log(res.data[0].URL);
      this.setState({ URL: res.data[0].URL });
    });
  };

  render() {
    return (
      <div>
        <div className="header">
        <header>
          <div class="header-left">
          <Link to="/">
              <a className="active">
              Home
              </a>
          </Link>
            <Link to="/addsongs">
              <a>
              Add Songs
              </a>
          </Link>
          <Link to="/addartist">
              <a>
              Add Artist
              </a>
          </Link>
          </div>
        </header>
          <div className="header-right">
            <nav>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Song"
                  name="sname"
                  onChange={this.handleChange}
                />
                <button type="submit">Search by song</button>
              </form>
            </nav>
          </div>
          <div className="header-right">
            <nav>
              <form method="POST" action="http://localhost:8080/artist/details">
                <input type="text" placeholder="Artist" name="aname" />
                <button type="submit">Search by artist name</button>
              </form>
            </nav>
            <div></div>
          </div>
        </div>
        <div className="acolumn">
          {/* <div className="suggested">
            <h2>Suggested for you today: </h2>
          </div> */}
        </div>
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${this.state.URL}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    );
  }
}
export default searchbar;
