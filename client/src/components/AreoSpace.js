import Boeing747 from "../components/3DModel/Boeing747";
import Boeing777 from "../components/3DModel/Boeing777";
import Turbofans from "../components/3DModel/TurbineTurbofan";

export default function AreoSpace() {
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
