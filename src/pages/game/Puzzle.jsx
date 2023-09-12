import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import puzzle from "../../assets/illustration/puzzle_title.png";
import bg from "../../assets/illustration/bg_field.png";

import img1 from "../../assets/illustration/puzzle/1.jpg";
import img2 from "../../assets/illustration/puzzle/2.jpg";
import img3 from "../../assets/illustration/puzzle/3.jpg";
import img4 from "../../assets/illustration/puzzle/4.jpg";
import img5 from "../../assets/illustration/puzzle/5.jpg";

import { CustomIconButton } from "../../components/CustomButton";
import CustomModal from "../../components/CustomModal";

const images = [
  { id: 1, uniqueId: 1, image: img1 },
  { id: 1, uniqueId: 2, image: img1 },
  { id: 2, uniqueId: 3, image: img2 },
  { id: 3, uniqueId: 4, image: img3 },
  { id: 3, uniqueId: 5, image: img3 },
  { id: 4, uniqueId: 6, image: img4 },
  { id: 4, uniqueId: 7, image: img4 },
  { id: 5, uniqueId: 8, image: img5 },
  { id: 5, uniqueId: 9, image: img5 },
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

  const [shuffledImages, setShuffledImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [matchedImages, setMatchedImages] = useState([]);

  function shuffleImages(images) {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  }

  useEffect(() => {
    setShuffledImages(shuffleImages(images));
  }, []);

  useEffect(() => {
    if (selectedImages.length === 2) {
      if (selectedImages[0].id === selectedImages[1].id) {
        setMatchedImages((prev) => [...prev, selectedImages[0].id]);
      }
      setTimeout(() => {
        setSelectedImages([]);
      }, 1000);
    }
  }, [selectedImages]);

  useEffect(() => {
    if (matchedImages.length === 4) {
      toggleModal(
        "Anda Benar",
        "Selamat anda telah menemukan semua gambar yang sama"
      );
    }
  }, [matchedImages]);

  function handleImageClick(id, uniqueId, image) {
    if (selectedImages.length === 2) {
      return;
    }

    setSelectedImages((prev) => [...prev, { id, uniqueId, image }]);
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
        className="w-screen h-screen bg-fixed bg-cover p-6 flex flex-col justify-between"
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
        <div className="grid grid-rows-3 grid-flow-col place-content-center gap-4 mt-6">
          {shuffledImages.map((data, index) => {
            return (
              <button
                key={index}
                type="button"
                onClick={() =>
                  handleImageClick(data.id, data.uniqueId, data.image)
                }
                className="w-60 h-48 bg-biru"
              >
                <img
                  src={data.image}
                  alt={`Puzzle Image ${index}`}
                  className={`w-60 h-48 object-fill object-top ${
                    selectedImages.find(
                      (image) => image.uniqueId === data.uniqueId
                    ) || matchedImages.includes(data.id)
                      ? ""
                      : "hidden"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Puzzle;
