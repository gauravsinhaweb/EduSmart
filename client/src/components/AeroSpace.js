import { Boeing747, Boeing777, Turbofans } from "./3DModel";

const AeroSpace = () => {
  return (
    <div>
      <div className="text-3xl text-white font-extralight text-center mt-8">
        AeroSpace
      </div>
      <Boeing747 />
      <Boeing777 />
      <Turbofans />
    </div>
  );
};

export default AeroSpace;
