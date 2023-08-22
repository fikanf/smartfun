import awal from "./assets/video/awal.mp4";
import { CustomButton } from "./components/CustomButton";

function App() {
  return (
    <div className="static">
      <video autoPlay muted loop className="w-screen h-screen object-cover">
        <source src={awal} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0">
        <h1 className="text-3xl text-red-50 font-bold underline">
          Hello world!
        </h1>
        <CustomButton
          title="Halo"
          onTap={() => {
            console.log("first");
          }}
        />
      </div>
    </div>
  );
}

export default App;
