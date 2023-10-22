import { PlantCell, AnimalCell, Skeleton } from "./3DModel";

const Medical = () => {
  return (
    <div>
      <div className="text-3xl text-white font-extralight text-center mt-8">
        Medical
      </div>
      <PlantCell />
      <AnimalCell />
      <Skeleton />
    </div>
  );
};

export default Medical;
