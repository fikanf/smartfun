import React from "react";

import PropTypes from "prop-types";

function CustomTemplate({ width, height, title, message }) {
  CustomTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
  };
  return (
    <div
      className={`${width} ${height} p-5 border-2 border-black flex items-center justify-center`}
    >
      <p className="text-6xl font-bold mt-2">{title}</p>
    </div>
  );
}

export default CustomTemplate;
