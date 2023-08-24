import { useState } from "react";

import quiz from "./assets/illustration/quiz_title.png";
import question from "./assets/illustration/soal.png";
import bg from "./assets/illustration/bg_field.png";
import benar from "./assets/illustration/benar.png";
import salah from "./assets/illustration/salah.png";

import cerita from "./assets/video/cerita.mp4";
import jawaban from "./assets/video/jawaban.mp4";

import { CustomIconButton } from "./components/CustomButton";
import CustomModal from "./components/CustomModal";

function Quiz() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [modalDesc, setmodalDesc] = useState("");

  const handleVideoEnd = () => {
    console.log("Video has ended");
    setShowQuestions(true);
  };

  function toggleModal(title, desc) {
    setmodalTitle(title);
    setmodalDesc(desc);
    setShowModal((prev) => !prev);
  }

  return (
    <div>
      <CustomModal
        show={showModal}
        title={modalTitle}
        desc={modalDesc}
        onClose={() => {
          window.location.href = "/lesson";
        }}
      />
      <video
        autoPlay
        controls
        onEnded={() => handleVideoEnd()}
        className={`${
          showQuestions ? "hidden" : ""
        } w-screen h-screen object-cover`}
      >
        <source src={cerita} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="w-screen h-screen bg-fixed bg-cover p-6 flex flex-col justify-between"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-row justify-between">
          <img src={quiz} alt="Quiz Title" className="w-48 h-24" />
          <img src={question} alt="Question" className="w-[700px] h-48" />
          <CustomIconButton
            onTap={() => {
              window.location.href = "/lesson";
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
        <div className="flex flex-row justify-between">
          <button
            type="button"
            onClick={() => {
              toggleModal("Anda Salah", "Coba lagi yaa tahun depan!!!");
            }}
            className="w-[650px] h-[500px] relative"
          >
            <img src={salah} alt="Answer 2" className="w-[650px] h-[500px]" />
            <video
              autoPlay
              muted
              loop
              className="absolute top-0 h-64 m-10 object-cover"
            >
              <source src={jawaban} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </button>
          <button
            type="button"
            onClick={() => {
              toggleModal(
                "Anda Benar",
                "Selamat anda telah menjawab soal berikut dengan benar"
              );
            }}
            className="w-[650px] h-[500px] relative"
          >
            <img src={benar} alt="Answer 1" className="w-[650px] h-[500px]" />
            <video
              autoPlay
              muted
              loop
              className="absolute top-0 h-64 m-10 object-cover"
            >
              <source src={jawaban} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
