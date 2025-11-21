import Bg from "./background.svg";

function Overlay() {
  return (
    <div className="h-screen w-full flex justify-between items-center fixed z-[-1] top-0">
        <img className="w-full h-full object-cover" src={Bg} alt="background" />
    </div>
  );
}

export default Overlay;
