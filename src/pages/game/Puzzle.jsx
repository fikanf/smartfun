import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import puzzle from "../../assets/illustration/puzzle_title.png";
import bg from "../../assets/illustration/bg_field.png";

import puzzle1 from "../../assets/illustration/puzzle/puzzle1.jpg";

import puzzle1_answer1 from "../../assets/illustration/puzzle/puzzle1_answer1.jpeg";
import puzzle1_answer2 from "../../assets/illustration/puzzle/puzzle1_answer2.jpeg";
import puzzle1_answer3 from "../../assets/illustration/puzzle/puzzle1_answer3.jpeg";
import puzzle1_answer4 from "../../assets/illustration/puzzle/puzzle1_answer4.jpeg";
import puzzle1_answer5 from "../../assets/illustration/puzzle/puzzle1_answer5.jpeg";
import puzzle1_answer6 from "../../assets/illustration/puzzle/puzzle1_answer6.jpeg";

import { CustomIconButton } from "../../components/CustomButton";
import CustomModal from "../../components/CustomModal";

const soal = [
  {
    puzzle: puzzle1,
    answer: [
      puzzle1_answer1,
      puzzle1_answer2,
      puzzle1_answer3,
      puzzle1_answer4,
      puzzle1_answer5,
      puzzle1_answer6,
    ],
  },
];

function Puzzle() {
  const navigate = useNavigate();

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
          navigate("/game");
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
        <div className="h-[400px]">
          {soal.map((data, index) => {
            return (
              <img
                key={index}
                src={data.puzzle}
                alt="Puzzle Output"
                className={`${index == 0 ? "" : "hidden"} h-[400px] mx-auto`}
              />
            );
          })}
        </div>
        <div className="flex flex-row h-[200px] justify-between">
          {soal[0].answer.map((data, index) => {
            return <img key={index} src={data} className="h-full" />;
          })}
        </div>
      </div>
    </>
  );
}

export default Puzzle;
