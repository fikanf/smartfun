import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import bg from "../../assets/illustration/bg_field.png";
import quiz from "../../assets/illustration/quiz_title.png";
import question from "../../assets/illustration/kontrol_emosi/soal.png";

import materi_mengontrol_emosi from "../../assets/video/kontrol_emosi/materi_mengontrol_emosi.mp4";

import kuis_mengontrol_emosi from "../../assets/video/kontrol_emosi/kuis_mengontrol_emosi.mp4";

import benar from "../../assets/illustration/kontrol_emosi/benar.png";
import salah from "../../assets/illustration/kontrol_emosi/salah.png";

import jawaban_a from "../../assets/video/kontrol_emosi/jawaban_a.mp4";
import jawaban_b from "../../assets/video/kontrol_emosi/jawaban_b.mp4";

import CustomModal from "../../components/CustomModal";
import { CustomButton, CustomIconButton } from "../../components/CustomButton";

function KontrolEmosi() {
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
          navigate("/lesson");
          setShowModal((prev) => !prev);
        }}
      />
      <div className="fixed z-50 top-0 flex flex-row-reverse w-full justify-between p-6">
        {quizCount < 2 ? (
          <CustomButton
            width="w-60"
            onTap={() => {
              setQuizCount(quizCount + 1);
            }}
          >
            <p className="text-6xl font-bold text-kuning mt-3 ">SKIP</p>
          </CustomButton>
        ) : (
          <></>
        )}
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
          <source src={materi_mengontrol_emosi} type="video/mp4" />
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
          <source src={kuis_mengontrol_emosi} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {quizCount == 2 && (
        <div
          className="flex w-screen h-screen bg-fixed bg-cover p-6 flex-col justify-between"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="flex flex-row justify-between">
            <img src={quiz} alt="Quiz Title" className="w-48 h-24" />
            <img src={question} alt="Question" className="w-[700px] h-48" />
            <div className="w-48" />
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
                <source src={jawaban_a} type="video/mp4" />
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
                <source src={jawaban_b} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default KontrolEmosi;
