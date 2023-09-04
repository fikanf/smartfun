import { useState } from "react";

import quiz from "../../assets/illustration/quiz_title.png";
import bg from "../../assets/illustration/bg_field.png";

import materi_tanggung_jawab from "../../assets/video/tanggung_jawab/materi_tanggung_jawab.mp4";

import kuis_tanggung_jawab from "../../assets/video/tanggung_jawab/kuis_tanggung_jawab.mp4";

import soal1_tanggung_jawab from "../../assets/illustration/tanggung_jawab/soal1.jpg";
import soal2_tanggung_jawab from "../../assets/illustration/tanggung_jawab/soal2.jpg";
import soal3_tanggung_jawab from "../../assets/illustration/tanggung_jawab/soal3.jpg";

import tanggung_jawab_1_a from "../../assets/video/tanggung_jawab/kuis1_a.mp4";
import tanggung_jawab_1_b from "../../assets/video/tanggung_jawab/kuis1_b.mp4";
import tanggung_jawab_2_a from "../../assets/video/tanggung_jawab/kuis2_a.mp4";
import tanggung_jawab_2_b from "../../assets/video/tanggung_jawab/kuis2_b.mp4";
import tanggung_jawab_3_a from "../../assets/video/tanggung_jawab/kuis3_a.mp4";
import tanggung_jawab_3_b from "../../assets/video/tanggung_jawab/kuis3_b.mp4";

import CustomModal from "../../components/CustomModal";
import { CustomIconButton } from "../../components/CustomButton";

const soal = [
  {
    pertanyaan: soal1_tanggung_jawab,
    jawaban_a: tanggung_jawab_1_a,
    jawaban_b: tanggung_jawab_1_b,
  },
  {
    pertanyaan: soal2_tanggung_jawab,
    jawaban_a: tanggung_jawab_2_a,
    jawaban_b: tanggung_jawab_2_b,
  },
  {
    pertanyaan: soal3_tanggung_jawab,
    jawaban_a: tanggung_jawab_3_a,
    jawaban_b: tanggung_jawab_3_b,
  },
];

function TanggungJawab() {
  const [materiVideoEnded, setMateriVideoEnded] = useState(false);
  const [quizVideoEnded, setQuizVideoEnded] = useState(true);

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
          // window.location.href = "/lesson";
          setQuizCount(quizCount + 1);
          setShowModal((prev) => !prev);
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
        <source src={materi_tanggung_jawab} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* // Second video */}
      <video
        autoPlay={materiVideoEnded}
        controls
        onEnded={() => handleQuizVideoEnd()}
        className={`${
          quizVideoEnded ? "hidden" : ""
        } w-screen h-screen object-cover`}
      >
        <source src={kuis_tanggung_jawab} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={`${
          quizVideoEnded ? "flex" : "hidden"
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
                } w-[700px] h-48`}
              />
            );
          })}
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
        {soal.map((data, index) => {
          return (
            <div
              key={index}
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
                  className="w-[650px] h-[500px] object-cover"
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
                className="w-[650px] h-[500px] relative"
              >
                <video
                  autoPlay
                  muted
                  loop
                  className="w-[650px] h-[500px] object-cover"
                >
                  <source src={data.jawaban_b} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TanggungJawab;
