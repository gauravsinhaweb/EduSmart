import PlantCell from "../components/3DModel/PlantCell";
import AnimalCell from "../components/3DModel/AnimalCell";
import Skeleton from "../components/3DModel/Skeleton";

export default function Medical() {
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
}
