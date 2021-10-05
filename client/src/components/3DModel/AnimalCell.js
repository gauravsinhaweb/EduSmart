import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Link } from "react-router-dom";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/animal_cell_-_downloadable/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.6} />
    </>
  );
};

export function AnimalCell() {
  return (
    <>
      <div className="py-8">
        <div className="md:grid md:grid-cols-2 lg:mx-20 sm:mx-4">
          <div className="w-full h-full px-4 outline-none cursor-pointer lg:block">
            <Canvas
              shadows
              dpr={[1, 2]}
              camera={{ position: [4, 4, 4], fov: 50 }}>
              <ambientLight intensity={0.7} />
              <spotLight
                intensity={0.5}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <Suspense fallback={null}>
                <Model />
                <Environment preset="city" />
                <ContactShadows
                  rotation-x={Math.PI / 2}
                  position={[0, -0.8, 0]}
                  opacity={0.25}
                  width={10}
                  height={10}
                  blur={1.5}
                  far={0.8}
                />
              </Suspense>
              <OrbitControls autoRotate />
            </Canvas>
          </div>

          <div className="mt-5 md:mt-0">
            <div className="md:flex md:flex-col md:justify-center ">
              <h2 className="self-center mx-8 mb-4 text-3xl font-medium tracking-wide text-white">
                Animal Cell
              </h2>

              <p className="self-center mx-8 text-lg font-medium tracking-wide text-justify text-white">
                Animal cells are typical of the eukaryotic cell, enclosed by a
                plasma membrane and containing a membrane-bound nucleus and
                organelles. Unlike the eukaryotic cells of plants and fungi,
                animal cells do not have a cell wall.
              </p>

              <Link to="animalCellExplore">
                <button className="h-12 px-2 my-4 ml-12 text-base font-semibold tracking-wider text-white w-44 border rounded-full shadow-sm hover:shadow-lg bg-secondary">
                  Explore More
                </button>
              </Link>

              <p className="self-center mx-8 text-lg tracking-wide text-center mt-2 text-white">
                To view the 3D model in AR, scan the QR code or click on the
                button below.
              </p>

              <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                <img
                  className="flex p-6 text-6xl rounded-xl h-60 w-60"
                  src="https://storage.echoar.xyz/wispy-violet-4999/5aeeccb7-4186-4d71-9dde-4f06e35c5d83"
                  alt="Animal Cell QR"
                />
                <a
                  href="https://go.echoar.xyz/QdET"
                  target="_blank"
                  rel="noreferrer">
                  <button className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-secondary border rounded-full shadow-sm lg:mt-20 sm:mt-4 hover:shadow-lg bg-white">
                    View in AR
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
