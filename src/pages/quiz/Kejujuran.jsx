import { useState } from "react";

import quiz from "../../assets/illustration/quiz_title.png";

import materi_kejujuran from "../../assets/video/kejujuran/materi_kejujuran.mp4";

import kuis_kejujuran_1_cerita from "../../assets/video/kejujuran/kuis_kejujuran_1_cerita.mp4";
import kuis_kejujuran_1_soal from "../../assets/video/kejujuran/kuis_kejujuran_1_soal.mp4";
import kuis_kejujuran_2_cerita from "../../assets/video/kejujuran/kuis_kejujuran_2_cerita.mp4";
import kuis_kejujuran_2_soal from "../../assets/video/kejujuran/kuis_kejujuran_2_soal.mp4";

import CustomModal from "../../components/CustomModal";
import { CustomIconButton } from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";

function Kejujuran() {
  const navigate = useNavigate();

  const [materiVideoEnded, setMateriVideoEnded] = useState(false);
  const [quiz1VideoEnded, setQuiz1VideoEnded] = useState(true);
  const [quiz2VideoEnded, setQuiz2VideoEnded] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [modalDesc, setmodalDesc] = useState("");

  const [quizCount, setQuizCount] = useState(0);

  const handleMateriVideoEnd = () => {
    console.log("Video has ended");
    setMateriVideoEnded(true);
    setQuiz1VideoEnded(false);
  };

  const handleQuiz1VideoEnd = () => {
    console.log("Video 1 has ended");
    setQuiz1VideoEnded(true);
  };

  const handleQuiz2VideoEnd = () => {
    console.log("Video 2 has ended");
    setQuiz2VideoEnded(true);
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
          setShowModal((prev) => !prev);

          console.log(quizCount);
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
        <source src={materi_kejujuran} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* // Second video */}
      <div className={`${quizCount == 0 ? "" : "hidden"}`}>
        <video
          autoPlay={materiVideoEnded}
          controls
          onEnded={() => handleQuiz1VideoEnd()}
          className={`${
            quiz1VideoEnded ? "hidden" : ""
          } w-screen h-screen object-cover`}
        >
          <source src={kuis_kejujuran_1_cerita} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className={`${
            quiz1VideoEnded && materiVideoEnded ? "" : "hidden"
          } w-screen h-screen relative`}
        >
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
          <div className="flex flex-row justify-between p-6 w-full absolute">
            <img src={quiz} alt="Quiz Title" className="w-48 h-24" />
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
        </div>
      </div>
      <div className={`${quizCount != 0 ? "" : "hidden"}`}>
        <video
          autoPlay={materiVideoEnded}
          controls
          onEnded={() => handleQuiz2VideoEnd()}
          className={`${
            quiz2VideoEnded ? "hidden" : ""
          } w-screen h-screen object-cover`}
        >
          <source src={kuis_kejujuran_2_cerita} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className={`${
            quiz2VideoEnded ? "" : "hidden"
          } w-screen h-screen relative`}
        >
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
          <div className="flex flex-row justify-between p-6 w-full absolute">
            <img src={quiz} alt="Quiz Title" className="w-48 h-24" />
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
        </div>
      </div>
    </div>
  );
}

export default Kejujuran;
