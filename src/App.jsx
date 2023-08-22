import awal from "./assets/video/awal.mp4";
import { CustomButton } from "./components/CustomButton";
import CustomTemplate from "./components/CustomTemplate";

function App() {
  return (
    <div className="static font-league">
      <video autoPlay muted loop className="w-screen h-screen object-cover">
        <source src={awal} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 p-6 w-full h-full flex flex-col items-center justify-between">
        <CustomTemplate title="1" message="Halo" width="w-full" />
        <CustomButton
          onTap={() => {
            console.log("first");
          }}
        >
          <p className="text-6xl font-bold text-kuning mt-3">MULAI</p>
        </CustomButton>
      </div>
    </div>
  );
}

export default App;
