import { CustomButton } from "./components/CustomButton";

function Home() {
  return (
    <div className="w-screen h-screen p-6 flex flex-col gap-6 justify-center">
      <CustomButton
        onTap={() => {
          window.location.href = "/home";
        }}
        width="w-1/2"
      >
        <p className="text-6xl font-bold text-kuning">Tutorial</p>
      </CustomButton>
      <CustomButton
        onTap={() => {
          window.location.href = "/lesson";
        }}
        width="w-1/2"
      >
        <p className="text-6xl font-bold text-kuning">Materi</p>
      </CustomButton>
      <CustomButton
        onTap={() => {
          window.location.href = "/";
        }}
        width="w-1/2"
      >
        <p className="text-6xl font-bold text-kuning">Keluar</p>
      </CustomButton>
    </div>
  );
}

export default Home;
