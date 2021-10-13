import { Boeing747, Boeing777, Turbofans } from "./3DModel";

const AreoSpace = () => {
  return (
    <div>
      <div className="text-3xl text-white font-extralight ml-48 mt-8">
        Areospace
      </div>
      <Boeing747 />
      <Boeing777 />
      <Turbofans />
    </div>
  );
}

export default AreoSpace;