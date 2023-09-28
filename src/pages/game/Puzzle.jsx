import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import peaches from "../../assets/audio/peaches.mp3";

import { JigsawPuzzle } from "react-jigsaw-puzzle";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

import "./puzzle.css";

import bg from "../../assets/illustration/bg_field.png";

import puzzle1 from "../../assets/illustration/puzzle/puzzle1.png";
import puzzle2 from "../../assets/illustration/puzzle/puzzle2.jpg";
import puzzle3 from "../../assets/illustration/puzzle/puzzle3.png";
import puzzle4 from "../../assets/illustration/puzzle/puzzle4.png";
import puzzle5 from "../../assets/illustration/puzzle/puzzle5.png";

import { CustomIconButton } from "../../components/CustomButton";

const soal = [puzzle1, puzzle2, puzzle3, puzzle4, puzzle5];

function Puzzle() {
  const navigate = useNavigate();

  const [puzzleIndex, setPuzzleIndex] = useState(0);

  const [sound, setSound] = useState(false);

  return (
    <>
      <audio id="audio" loop muted={sound} autoPlay>
        <source src={peaches} type="audio/mpeg" />
      </audio>
      <div
        className="w-screen h-screen bg-fixed bg-cover p-6 flex flex-col gap-6 justify-between"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-row justify-between">
          <CustomIconButton
            onTap={() => {
              setSound((prev) => !prev);
            }}
          >
            {sound ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 fill-kuning"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 fill-kuning"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                />
              </svg>
            )}
          </CustomIconButton>
          <CustomIconButton
            onTap={() => {
              navigate("/game");
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
        {soal.map((data, index) => {
          return (
            <div
              key={index}
              className={`${
                index == puzzleIndex ? "" : "hidden"
              } h-full flex items-center`}
            >
              <JigsawPuzzle
                imageSrc={data}
                rows={puzzleIndex == 0 || puzzleIndex == 1 ? 2 : 3}
                columns={puzzleIndex == 0 || puzzleIndex == 1 ? 3 : 4}
                onSolved={() => {
                  setPuzzleIndex(puzzleIndex + 1);
                }}
                className="jigsaw-puzzle"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Puzzle;
