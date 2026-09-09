import react from "react";
import PropTypes from "prop-types";

const songplay = ({ embedId }) => (
  <div>
    <div className="acolumn">
      <div className="suggested">
        <h2>Suggested for you today: </h2>
      </div>
    </div>
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </div>
);

songplay.propTypes={
    embedId: PropTypes.string.isRequired,
};
export default songplay;
