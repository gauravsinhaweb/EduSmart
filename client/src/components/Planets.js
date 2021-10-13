import { Planet, PlanetMars, PlanetJupiter } from "./3DModel";

const Planets = () => {
  return (
    <div>
      <div className="text-3xl text-white font-extralight ml-48 mt-8">
        Planets
      </div>
      <Planet />
      <PlanetMars />
      <PlanetJupiter />
    </div>
  );
};

export default Planets;
