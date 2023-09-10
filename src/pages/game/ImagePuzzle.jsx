import { useState } from "react";
import { useNavigate } from "react-router-dom";

import puzzle from "../../assets/illustration/puzzle_title.png";
import bg from "../../assets/illustration/bg_field.png";

import butterfly_black from "../../assets/illustration/tebak_gambar/butterfly_black.png";
import butterfly_color from "../../assets/illustration/tebak_gambar/butterfly_color.png";
import dog_black from "../../assets/illustration/tebak_gambar/dog_black.png";
import dog_color from "../../assets/illustration/tebak_gambar/dog_color.png";
import dolphin_black from "../../assets/illustration/tebak_gambar/dolphin_black.png";
import dolphin_color from "../../assets/illustration/tebak_gambar/dolphin_color.png";

import { CustomButton, CustomIconButton } from "../../components/CustomButton";
import CustomModal from "../../components/CustomModal";

const jawaban = ["Anjing", "Kupu-Kupu", "Lumba-Lumba"];

const soal = [
  { jawab: jawaban[1], black: butterfly_black, color: butterfly_color },
  { jawab: jawaban[0], black: dog_black, color: dog_color },
  { jawab: jawaban[2], black: dolphin_black, color: dolphin_color },
];

function ImagePuzzle() {
  const navigate = useNavigate();

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
          setCurrentQuestion(0);
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
      <CustomModal
        show={showModal}
        title={modalTitle}
        desc={modalDesc}
        onClose={() => {
          setShowModal((prev) => !prev);
          // navigate("/game");
        }}
      />
      <div
        className="w-screen h-screen bg-fixed bg-cover p-6 flex flex-col gap-6 justify-between"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-row justify-between">
          <img src={puzzle} alt="Puzzle Title" className="h-24" />
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

export default ImagePuzzle;
