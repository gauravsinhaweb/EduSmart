import Planet from "./3DModel/Planets";
import Planetmars from "./3DModel/PlanetMars";
import PlanetJupiter from "./3DModel/PlanetJupiter";

export default function Planets() {
  return (
    <div>
      <div className="text-3xl text-white font-extralight ml-48 mt-8">
        Planets
      </div>
      <Planet />
      <Planetmars />
      <PlanetJupiter />
      
    </div>
  );
}
