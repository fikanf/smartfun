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
import { CustomIconButton } from "../../components/CustomButton";

const soal = [
  {
    cerita: cerita_1,
    pertanyaan: soal1_disiplin,
  },
  {
    cerita: cerita_2,
    pertanyaan: soal2_disiplin,
    jawaban_a: disiplin_2_a,
    jawaban_b: disiplin_2_b,
  },
  {
    cerita: cerita_3,
    pertanyaan: soal3_disiplin,
    jawaban_a: disiplin_3_a,
    jawaban_b: disiplin_3_b,
  },
];

function Disiplin() {
  const navigate = useNavigate();

  const [materiVideoEnded, setMateriVideoEnded] = useState(false);
  const [quizVideoEnded, setQuizVideoEnded] = useState(true);
  const [quizVideo2Ended, setQuizVideo2Ended] = useState(false);
  const [quizVideo3Ended, setQuizVideo3Ended] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [modalDesc, setmodalDesc] = useState("");

  const [quizCount, setQuizCount] = useState(0);

  const handleMateriVideoEnd = () => {
    console.log("Video has ended");
    setMateriVideoEnded(true);
    setQuizVideoEnded(false);
  };

  const handleQuizVideoEnd = () => {
    console.log("Video has ended");
    setQuizVideoEnded(true);
  };

  const handleQuizVideo2End = () => {
    console.log("Video has ended");
    setQuizVideo2Ended(true);
  };

  const handleQuizVideo3End = () => {
    console.log("Video has ended");
    setQuizVideo3Ended(true);
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
          setQuizCount(quizCount + 1);
          if (quizCount == 1) {
            setQuizVideo3Ended(false);
          }
          setShowModal((prev) => !prev);
          if (quizCount == 2) {
            navigate("/lesson");
          }
        }}
      />
      {/* // First video */}
      <video
        autoPlay
        controls
        onEnded={() => handleMateriVideoEnd()}
        className={`${
          materiVideoEnded ? "hidden" : ""
        } w-screen h-screen object-cover`}
      >
        <source src={materi_disiplin} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* // Second video */}
      {soal.map((data, index) => {
        if (index == 0) {
          return (
            <div
              key={index}
              className={`${index == quizCount ? "" : "hidden"}`}
            >
              <video
                controls
                onEnded={() => handleQuizVideoEnd()}
                className={`${
                  quizVideoEnded ? "hidden" : ""
                } w-screen h-screen object-cover`}
              >
                <source src={data.cerita} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                className={`${
                  quizVideoEnded && materiVideoEnded ? "flex" : "hidden"
                } w-screen h-screen bg-fixed bg-cover p-6 flex-col justify-between`}
                style={{ backgroundImage: `url(${bg})` }}
              >
                <div className="flex flex-row justify-between">
                  <img src={quiz} alt="Quiz Title" className="w-48 h-24" />
                  <img
                    src={soal1_disiplin}
                    alt="Question"
                    className={`${
                      index == quizCount ? "" : "hidden"
                    } w-[700px] h-48`}
                  />
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
                    <p className="text-4xl">
                      Bersikap tidak tegas pada diri sendiri
                    </p>
                    <div></div>
                  </button>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div key={index} className={`${index == quizCount ? "" : "hidden"}`}>
            <video
              controls
              onEnded={() => handleQuizVideo2End()}
              className={`${
                quizVideo2Ended ? "hidden" : ""
              } w-screen h-screen object-cover`}
            >
              <source src={data.cerita} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              controls
              onEnded={() => handleQuizVideo3End()}
              className={`${
                quizVideo3Ended ? "hidden" : ""
              } w-screen h-screen object-cover`}
            >
              <source src={data.cerita} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              className={`${
                quizVideo2Ended && quizVideo3Ended ? "flex" : "hidden"
              } w-screen h-screen bg-fixed bg-cover p-6 flex-col justify-between`}
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="flex flex-row justify-between">
                <img src={quiz} alt="Quiz Title" className="w-48 h-24" />
                {soal.map((data, index) => {
                  return (
                    <img
                      key={index}
                      src={data.pertanyaan}
                      alt="Question"
                      className={`${
                        index == quizCount ? "" : "hidden"
                      } w-[700px] h-40`}
                    />
                  );
                })}
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
              <div
                className={`${
                  index == quizCount ? "flex" : "hidden"
                } flex-row justify-between`}
              >
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
                    <source src={data.jawaban_a} type="video/mp4" />
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
                    <source src={data.jawaban_b} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Disiplin;
