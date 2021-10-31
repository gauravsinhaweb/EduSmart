import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/boeing_747/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.65} />
    </>
  );
};

export function Boeing747() {
  return (
    <>
      <div className="py-8">
        <div className="grid-cols-1 md:grid md:grid-cols-2 lg:mx-20 sm:mx-4">
          <div className="w-full h-1/2 md:h-full px-4 outline-none cursor-pointer lg:block">
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
                Boeing 747
              </h2>

              <p className="self-center mx-8 text-lg font-medium tracking-wide text-justify text-white">
                The Boeing 747 is a large, long-range wide-body airliner
                manufactured by Boeing Commercial Airplanes in the United
                States. After introducing the 707 in October 1958, Pan Am wanted
                a jet 2+1⁄2 times its size, to reduce its seat cost by 30% to
                democratize air travel.
              </p>

              <p className="self-center mx-8 text-lg tracking-wide text-center mt-2 text-white">
                To view the 3D model in AR, scan the QR code or click on the
                button below.
              </p>

              <div className="grid justify-center text-center grid-cols-1 gap-6 pb-8 mx-8 xl:grid-cols-2">
                <img
                  className="flex mx-auto p-6 text-6xl rounded-xl h-60 w-60"
                  src="https://storage.echoar.xyz/wispy-violet-4999/c6c12f53-b87b-44bd-be78-3300b57a6462"
                  alt="Boeing 747 QR"
                />
                <a
                  href="https://go.echoar.xyz/7sFk"
                  target="_blank"
                  rel="noreferrer">
                  <button className="h-12 px-8 text-base font-semibold tracking-wider text-secondary border rounded-full shadow-sm lg:mt-20 sm:mt-4 hover:shadow-lg bg-white">
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
