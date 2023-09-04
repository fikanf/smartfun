import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import PropTypes from "prop-types";

import { CustomIconButton } from "./components/CustomButton";
import CustomTemplate from "./components/CustomTemplate";

const quiz = [
  {
    path: "/quiz/tanggung_jawab",
  },
  {
    path: "/quiz/kontrol_emosi",
  },
  {
    path: "/quiz/kejujuran",
  },
  {
    path: "/quiz/disiplin",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

function Lesson() {
  const carouselRef = useRef(null);

  return (
    <div className="p-6 h-screen flex flex-col justify-between">
      <div className="flex flex-row gap-4">
        <CustomTemplate title="1" message="Halo" width="w-full" />
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
            <path
              fillRule="evenodd"
              d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
              clipRule="evenodd"
            />
          </svg>
        </CustomIconButton>
      </div>
      <div className="flex flex-row gap-6 items-center">
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
              <CardLesson
                key={index}
                onTap={() => {
                  window.location.href = data.path;
                }}
              />
            );
          })}
        </Carousel>
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
      <div className="h-24"></div>
    </div>
  );
}

function CardLesson({ onTap }) {
  CardLesson.propTypes = {
    onTap: PropTypes.func.isRequired,
  };
  return (
    <button
      type="button"
      onClick={onTap}
      className="p-5 border-2 border-black w-full flex flex-col items-center justify-center"
    >
      <div
        className="w-28 h-28 border-2 border-black rounded-full flex items-center justify-center"
        title="Gambar"
      >
        <p className="text-6xl font-bold">1</p>
      </div>
      <div className="h-6" />
      <CustomTemplate title="2" message="3 bintang" width="w-full" />
      <div className="h-6" />
      <CustomTemplate title="3" message="Judul materi" width="w-full" />
    </button>
  );
}

export default Lesson;
