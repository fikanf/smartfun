import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import PropTypes from "prop-types";

import bg from "./assets/illustration/bg_papan_tulis.png";

import { CustomIconButton } from "./components/CustomButton";

const quiz = [
  {
    title: "Puzzle",
    path: "/game/puzzle",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Game() {
  const carouselRef = useRef(null);

  return (
    <div
      className="p-6 h-screen flex flex-col justify-between bg-fixed bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full flex justify-end">
        <CustomIconButton
          onTap={() => {
            window.location.href = "/home";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 fill-kuning"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </CustomIconButton>
      </div>
      <div className="flex flex-row gap-14 items-center">
        <CustomIconButton
          onTap={() => {
            carouselRef.current.previous();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 fill-kuning"
          >
            <path
              fillRule="evenodd"
              d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
              clipRule="evenodd"
            />
          </svg>
        </CustomIconButton>
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          showDots={false}
          infinite={true}
          arrows={false}
          className="w-full"
        >
          {quiz.map((data, index) => {
            return (
              <div key={index} className="mx-20">
                <CardLesson
                  title={data.title}
                  index={++index}
                  onTap={() => {
                    window.location.href = data.path;
                  }}
                />
              </div>
            );
          })}
        </Carousel>
        <div className="mr-1">
          <CustomIconButton
            onTap={() => {
              carouselRef.current.next();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 fill-kuning"
            >
              <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </CustomIconButton>
        </div>
      </div>
      <div className="h-24"></div>
    </div>
  );
}

function CardLesson({ title, index, onTap }) {
  CardLesson.propTypes = {
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onTap: PropTypes.func.isRequired,
  };
  return (
    <button
      type="button"
      onClick={onTap}
      className="p-5 bg-biru rounded-3xl w-full flex flex-col items-center justify-center"
    >
      <div className="relative w-28 h-28">
        <div
          className={`absolute top-0 left-3 w-28 h-28 rounded-full bg-black`}
        />
        <div
          className={`absolute top-0 left-0 w-28 h-28 rounded-full bg-kuning flex items-center justify-center`}
        >
          <p className="text-6xl font-bold">{index}</p>
        </div>
      </div>
      <div className="h-16" />
      <h3 className="uppercase font-black text-5xl text-kuning h-20">
        {title}
      </h3>
      <div className="h-16" />
    </button>
  );
}

export default Game;
