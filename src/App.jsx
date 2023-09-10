import { useNavigate } from "react-router-dom";

import bg_utama from "./assets/video/bg_utama.mp4";
import { CustomButton, CustomIconButton } from "./components/CustomButton";

function App() {
  const navigate = useNavigate();

  return (
    <div className="static font-league">
      <video autoPlay muted loop className="w-screen h-screen object-cover">
        <source src={bg_utama} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 p-6 w-full h-full flex flex-col items-center justify-between">
        <div></div>
        <CustomButton
          onTap={() => {
            navigate("/home");
          }}
        >
          <p className="text-6xl font-bold text-kuning mt-3">MULAI</p>
        </CustomButton>
      </div>
      <div className="absolute bottom-0 right-0 p-6">
        <CustomIconButton
          onTap={() => {
            navigate("/account");
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
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </CustomIconButton>
      </div>
    </div>
  );
}

export default App;
