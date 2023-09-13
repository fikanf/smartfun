import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { JigsawPuzzle } from "react-jigsaw-puzzle";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

import "./puzzle.css";

import puzzle from "../../assets/illustration/puzzle_title.png";
import bg from "../../assets/illustration/bg_field.png";

import puzzle1 from "../../assets/illustration/puzzle/puzzle1.jpg";
import puzzle2 from "../../assets/illustration/puzzle/puzzle2.jpg";
import puzzle3 from "../../assets/illustration/puzzle/puzzle3.jpg";
import puzzle4 from "../../assets/illustration/puzzle/puzzle4.jpg";
import puzzle5 from "../../assets/illustration/puzzle/puzzle5.jpg";

import { CustomIconButton } from "../../components/CustomButton";
import CustomModal from "../../components/CustomModal";

const soal = [puzzle1, puzzle2, puzzle3, puzzle4, puzzle5];

function Puzzle() {
  const navigate = useNavigate();

  const [puzzleIndex, setPuzzleIndex] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [modalDesc, setmodalDesc] = useState("");

  function toggleModal(title, desc) {
    setmodalTitle(title);
    setmodalDesc(desc);
    setShowModal((prev) => !prev);
  }

  return (
    <>
      <CustomModal
        show={showModal}
        title={modalTitle}
        desc={modalDesc}
        onClose={() => {
          // navigate("/game");
          setPuzzleIndex(puzzleIndex + 1);
        }}
      />
      <div
        className="w-screen h-screen bg-fixed bg-cover p-6 flex flex-col gap-6 justify-between"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-row justify-between">
          <img src={puzzle} alt="Puzzle Title" className="w-60 h-24" />
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
              className={`${index == puzzleIndex ? "" : "hidden"} h-full`}
            >
              <JigsawPuzzle
                imageSrc={data}
                rows={puzzleIndex == 0 || puzzleIndex == 1 ? 2 : 3}
                columns={3}
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
