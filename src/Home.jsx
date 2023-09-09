import { useNavigate } from "react-router-dom";

import { CustomButton } from "./components/CustomButton";
import bg_menu from "./assets/video/bg_menu.mp4";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="static">
      <video autoPlay muted loop className="w-screen h-screen object-cover">
        <source src={bg_menu} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 w-screen h-screen p-6 flex flex-col gap-6 justify-center">
        <CustomButton
          onTap={() => {
            navigate("/lesson");
          }}
          width="w-1/2"
        >
          <p className="text-6xl font-bold text-kuning">Materi</p>
        </CustomButton>
        <CustomButton
          onTap={() => {
            navigate("/game");
          }}
          width="w-1/2"
        >
          <p className="text-6xl font-bold text-kuning">Permainan</p>
        </CustomButton>
        <CustomButton
          onTap={() => {
            navigate("/");
          }}
          width="w-1/2"
        >
          <p className="text-6xl font-bold text-kuning">Keluar</p>
        </CustomButton>
      </div>
    </div>
  );
}

export default Home;
