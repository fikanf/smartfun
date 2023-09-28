import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import quiz from "../../assets/illustration/quiz_title.png";
import bg from "../../assets/illustration/bg_lab.png";

import materi_disiplin from "../../assets/video/disiplin/materi_disiplin.mp4";

import cerita_1 from "../../assets/video/disiplin/cerita_1.mp4";
import cerita_2 from "../../assets/video/disiplin/cerita_2.mp4";
import cerita_3 from "../../assets/video/disiplin/cerita_3.mp4";

import soal1_disiplin from "../../assets/illustration/disiplin/soal1.png";
import soal2_disiplin from "../../assets/illustration/disiplin/soal2.png";
import soal3_disiplin from "../../assets/illustration/disiplin/soal3.png";

import disiplin_2_a from "../../assets/video/disiplin/kuis2_a.mp4";
import disiplin_2_b from "../../assets/video/disiplin/kuis2_b.mp4";
import disiplin_3_a from "../../assets/video/disiplin/kuis3_a.mp4";
import disiplin_3_b from "../../assets/video/disiplin/kuis3_b.mp4";

import CustomModal from "../../components/CustomModal";
import { CustomButton, CustomIconButton } from "../../components/CustomButton";

function Disiplin() {
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
          if (quizCount == 6) {
            navigate("/lesson");
          }

          setQuizCount(quizCount + 1);
          setShowModal((prev) => !prev);
        }}
      />
      <div className="fixed z-50 top-0 flex flex-row-reverse w-full justify-between p-6">
        {quizCount < 2 || quizCount === 3 || quizCount === 5 ? (
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
          <source src={materi_disiplin} type="video/mp4" />
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
          <source src={cerita_1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {quizCount == 2 && (
        <div
          className={`flex w-screen h-screen bg-fixed bg-cover p-6 flex-col justify-between`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="flex flex-row justify-between">
            <img src={quiz} alt="Quiz Title" className="w-48 h-24" />
            <img
              src={soal1_disiplin}
              alt="Question"
              className="w-[700px] h-48"
            />
            <div className="w-48" />
          </div>
          <div className="flex flex-col gap-8">
            <button
              type="button"
              onClick={() => {
                toggleModal(
                  "Anda Benar",
                  "Selamat anda telah menjawab soal berikut dengan benar"
                );
              }}
              className="w-full h-20 bg-yellow-400 rounded-full px-12 flex items-center justify-between"
            >
              <b className="text-4xl">A</b>
              <p className="text-4xl">Memulai dari hal-hal kecil</p>
              <div></div>
            </button>
            <button
              type="button"
              onClick={() => {
                toggleModal("Anda Salah", "Coba lagi yaa tahun depan!!!");
              }}
              className="w-full h-20 bg-yellow-400 rounded-full px-12 flex items-center justify-between"
            >
              <b className="text-4xl">B</b>
              <p className="text-4xl">Melakukan hal-hal negatif</p>
              <div></div>
            </button>
            <button
              type="button"
              onClick={() => {
                toggleModal("Anda Salah", "Coba lagi yaa tahun depan!!!");
              }}
              className="w-full h-20 bg-yellow-400 rounded-full px-12 flex items-center justify-between"
            >
              <b className="text-4xl">C</b>
              <p className="text-4xl">Bersikap tidak tegas pada diri sendiri</p>
              <div></div>
            </button>
          </div>
        </div>
      )}
      {/* // Second video */}
      {quizCount == 3 && (
        <video
          autoPlay
          controls
          onEnded={() => handleVideoEnd()}
          className="w-screen h-screen object-cover"
        >
          <source src={cerita_2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {quizCount == 4 && (
        <div
          className={`flex w-screen h-screen bg-fixed bg-cover p-6 flex-col justify-between`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="flex flex-row justify-between">
            <img src={quiz} alt="Quiz Title" className="w-48 h-24" />
            <img
              src={soal2_disiplin}
              alt="Question"
              className={`w-[700px] h-40`}
            />
            <div className="w-48" />
          </div>
          <div className={`flex flex-row justify-between`}>
            <button
              type="button"
              onClick={() => {
                toggleModal("Anda Salah", "Coba lagi yaa tahun depan!!!");
              }}
            >
              <video
                autoPlay
                muted
                loop
                className="w-[650px] h-[400px] object-cover"
              >
                <source src={disiplin_2_a} type="video/mp4" />
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
            >
              <video
                autoPlay
                muted
                loop
                className="w-[650px] h-[400px] object-cover"
              >
                <source src={disiplin_2_b} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </button>
          </div>
        </div>
      )}

      {/* // Third video */}
      {quizCount == 5 && (
        <video
          autoPlay
          controls
          onEnded={() => handleVideoEnd()}
          className="w-screen h-screen object-cover"
        >
          <source src={cerita_3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {quizCount == 6 && (
        <div
          className={`flex w-screen h-screen bg-fixed bg-cover p-6 flex-col justify-between`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="flex flex-row justify-between">
            <img src={quiz} alt="Quiz Title" className="w-48 h-24" />
            <img
              src={soal3_disiplin}
              alt="Question"
              className={`w-[700px] h-40`}
            />
            <div className="w-48" />
          </div>
          <div className={`flex flex-row justify-between`}>
            <button
              type="button"
              onClick={() => {
                toggleModal("Anda Salah", "Coba lagi yaa tahun depan!!!");
              }}
            >
              <video
                autoPlay
                muted
                loop
                className="w-[650px] h-[400px] object-cover"
              >
                <source src={disiplin_3_a} type="video/mp4" />
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
            >
              <video
                autoPlay
                muted
                loop
                className="w-[650px] h-[400px] object-cover"
              >
                <source src={disiplin_3_b} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Disiplin;
