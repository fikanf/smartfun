import { useState } from "react";
import PropTypes from "prop-types";

export function CustomIconButton({ icon, onTap }) {
  CustomIconButton.propTypes = {
    icon: PropTypes.element.isRequired,
    onTap: PropTypes.func.isRequired,
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async () => {
    setIsClicked(true);
    await new Promise((resolve) => setTimeout(resolve, 100));
    setIsClicked(false);
    onTap();
  };

  return (
    <button type="button" className="relative w-24 h-24" onClick={handleClick}>
      <div
        className={`absolute top-${isClicked ? 2 : 0} left-${
          isClicked ? 2 : 0
        } w-24 h-24 rounded-full bg-gray-800`}
      />
      <div
        className={`absolute top-${isClicked ? 2 : 0} left-${
          isClicked ? 2 : 0
        } w-24 h-24 rounded-full bg-biru flex items-center justify-center`}
      >
        {icon}
      </div>
    </button>
  );
}

export function CustomButton({
  children,
  onTap,
  width = "w-96",
  height = "h-24",
}) {
  CustomButton.propTypes = {
    children: PropTypes.element.isRequired,
    onTap: PropTypes.func.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async () => {
    setIsClicked(true);
    await new Promise((resolve) => setTimeout(resolve, 100));
    setIsClicked(false);
    onTap();
  };

  return (
    <button
      type="button"
      className={`relative ${width} ${height}`}
      onClick={handleClick}
    >
      <div
        className={`absolute top-2 left-2 ${width} ${height} rounded-xl bg-gray-800`}
      />
      <div
        className={`absolute top-${isClicked ? 2 : 0} left-${
          isClicked ? 2 : 0
        } ${width} ${height} rounded-xl bg-biru flex items-center justify-center`}
      >
        {children}
      </div>
    </button>
  );
}
