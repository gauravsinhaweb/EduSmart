import { PlantCell, AnimalCell, Skeleton } from "./3DModel";

const Medical = () => {
  return (
    <div>
      <div className="text-3xl text-white font-extralight ml-48 mt-8">
        Medical
      </div>
      <PlantCell />
      <AnimalCell />
      <Skeleton />
    </div>
  );
};

export default Medical;
