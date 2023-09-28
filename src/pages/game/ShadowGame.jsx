import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import peaches from "../../assets/audio/peaches.mp3";

import puzzle from "../../assets/illustration/puzzle_title.png";
import bg from "../../assets/illustration/bg_field.png";

import butterfly_black from "../../assets/illustration/shadow_game/butterfly_black.png";
import butterfly_color from "../../assets/illustration/shadow_game/butterfly_color.png";
import dog_black from "../../assets/illustration/shadow_game/dog_black.png";
import dog_color from "../../assets/illustration/shadow_game/dog_color.png";
import dolphin_black from "../../assets/illustration/shadow_game/dolphin_black.png";
import dolphin_color from "../../assets/illustration/shadow_game/dolphin_color.png";

import { CustomButton, CustomIconButton } from "../../components/CustomButton";
import CustomModal from "../../components/CustomModal";

const jawaban = ["Anjing", "Kupu-Kupu", "Lumba-Lumba"];

const soal = [
  { jawab: jawaban[1], black: butterfly_black, color: butterfly_color },
  { jawab: jawaban[0], black: dog_black, color: dog_color },
  { jawab: jawaban[2], black: dolphin_black, color: dolphin_color },
];

function ShadowGame() {
  const navigate = useNavigate();

  const [sound, setSound] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [modalDesc, setmodalDesc] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showColor, setShowColor] = useState(false);

  function toggleModal(title, desc) {
    setmodalTitle(title);
    setmodalDesc(desc);
    setShowModal((prev) => !prev);
  }

  function handleGuess(guess) {
    if (guess === soal[currentQuestion].jawab) {
      // Correct guess, show the color image
      setShowColor(true);
      setTimeout(() => {
        // Move to the next question after a delay
        setCurrentQuestion(currentQuestion + 1);
        // If it was the last question, reset the game
        if (currentQuestion === soal.length - 1) {
          toggleModal(
            "Anda Benar",
            "Selamat anda telah menjawab semua gambar yang ada"
          );
        }
        // Hide the color image for the next question
        setShowColor(false);
      }, 2000); // Adjust the delay as needed
    } else {
      // Incorrect guess, show a message
      toggleModal("Anda Salah", "Coba lagi yaa tahun depan!!!");
    }
  }

  return (
    <>
      <audio id="audio" loop muted={sound} autoPlay>
        <source src={peaches} type="audio/mpeg" />
      </audio>
      <CustomModal
        show={showModal}
        title={modalTitle}
        desc={modalDesc}
        onClose={() => {
          setShowModal((prev) => !prev);

          navigate("/game");
        }}
      />
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
                index != currentQuestion ? "hidden" : ""
              } h-full w-full relative`}
            >
              <img
                src={data.black}
                alt={data.jawab}
                className={`${
                  index != currentQuestion ? "hidden" : ""
                } h-full object-cover mx-auto`}
              />
              <img
                src={data.color}
                alt={data.jawab}
                className={`${
                  index != currentQuestion ? "hidden" : ""
                } absolute top-0 bottom-0 left-0 right-0 m-auto h-full object-cover transition-opacity duration-1000 ${
                  showColor ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          );
        })}
        <div className="flex flex-row w-full justify-between">
          {jawaban.map((data, index) => {
            return (
              <CustomButton key={index} onTap={() => handleGuess(data)}>
                <p className="text-5xl font-bold text-kuning">{data}</p>
              </CustomButton>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ShadowGame;
