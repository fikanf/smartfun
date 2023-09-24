import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import quiz from "../../assets/illustration/quiz_title.png";

import materi_kejujuran from "../../assets/video/kejujuran/materi_kejujuran.mp4";

import kuis_kejujuran_1_cerita from "../../assets/video/kejujuran/kuis_kejujuran_1_cerita.mp4";
import kuis_kejujuran_1_soal from "../../assets/video/kejujuran/kuis_kejujuran_1_soal.mp4";
import kuis_kejujuran_2_cerita from "../../assets/video/kejujuran/kuis_kejujuran_2_cerita.mp4";
import kuis_kejujuran_2_soal from "../../assets/video/kejujuran/kuis_kejujuran_2_soal.mp4";

import CustomModal from "../../components/CustomModal";
import { CustomIconButton } from "../../components/CustomButton";

function Kejujuran() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [modalDesc, setmodalDesc] = useState("");

  const [quizCount, setQuizCount] = useState(0);

  const handleVideoEnd = () => {
    console.log("Video has ended");
    setQuizCount(quizCount + 1);
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
          if (quizCount == 4) {
            navigate("/lesson");
          }

          setQuizCount(quizCount + 1);
          setShowModal((prev) => !prev);
        }}
      />
      <div className="fixed z-50 top-0 right-0 p-6">
        <CustomIconButton
          onTap={() => {
            navigate("/lesson");
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
      {/* // First video */}
      {quizCount == 0 && (
        <video
          autoPlay
          controls
          onEnded={() => handleVideoEnd()}
          className="w-screen h-screen object-cover"
        >
          <source src={materi_kejujuran} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {/* // Second video */}
      {quizCount == 1 && (
        <video
          autoPlay
          controls
          onEnded={() => handleVideoEnd()}
          className="w-screen h-screen object-cover"
        >
          <source src={kuis_kejujuran_1_cerita} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {quizCount == 2 && (
        <div className="w-screen h-screen relative">
          <video
            autoPlay
            muted
            loop
            className={`w-screen h-screen object-cover absolute`}
          >
            <source src={kuis_kejujuran_1_soal} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="w-screen h-screen absolute flex flex-row gap-20">
            <button
              type="button"
              onClick={() => {
                toggleModal("Anda Salah", "Coba lagi yaa tahun depan!!!");
              }}
              className="w-1/2 h-full hover:bg-white/50"
            ></button>
            <button
              type="button"
              onClick={() => {
                toggleModal(
                  "Anda Benar",
                  "Selamat anda telah menjawab soal berikut dengan benar"
                );
              }}
              className="w-1/2 h-full hover:bg-white/50"
            ></button>
          </div>
          <img
            src={quiz}
            alt="Quiz Title"
            className="absolute w-48 h-24 m-6 object-cover"
          />
        </div>
      )}
      {/* // Third video */}
      {quizCount == 3 && (
        <video
          autoPlay
          controls
          onEnded={() => handleVideoEnd()}
          className="w-screen h-screen object-cover"
        >
          <source src={kuis_kejujuran_2_cerita} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {quizCount == 4 && (
        <div className="w-screen h-screen relative">
          <video
            autoPlay
            muted
            loop
            className={`w-screen h-screen object-cover absolute`}
          >
            <source src={kuis_kejujuran_2_soal} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="w-screen h-screen absolute flex flex-row gap-20">
            <button
              type="button"
              onClick={() => {
                toggleModal("Anda Salah", "Coba lagi yaa tahun depan!!!");
              }}
              className="w-1/2 h-full hover:bg-white/50"
            ></button>
            <button
              type="button"
              onClick={() => {
                toggleModal(
                  "Anda Benar",
                  "Selamat anda telah menjawab soal berikut dengan benar"
                );
              }}
              className="w-1/2 h-full hover:bg-white/50"
            ></button>
          </div>
          <img
            src={quiz}
            alt="Quiz Title"
            className="absolute w-48 h-24 m-6 object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default Kejujuran;
