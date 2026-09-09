import React from "react";
import PropTypes from "prop-types";
import Searchbar from "./search";


const homepage = ({ embedId }) => (
  <div>
    <div className="Header">
      <header>
        <Searchbar />
      </header>
    </div>
  </div>
);

homepage.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default homepage;
