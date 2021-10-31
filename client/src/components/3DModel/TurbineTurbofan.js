import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/turbine__turbofan_engine/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.5} />
    </>
  );
};

export function Turbofans() {
  return (
    <>
      <div className="py-8">
        <div className="md:grid md:grid-cols-2 lg:mx-20 sm:mx-4">
          <div className="w-full h-1/2 md:h-full px-4 outline-none cursor-pointer lg:block">
            <Canvas
              shadows
              dpr={[1, 2]}
              camera={{ position: [-4, 2, -4], fov: 50 }}>
              <ambientLight intensity={0.8} />
              <spotLight
                intensity={1}
                angle={0.1}
                penumbra={1}
                position={[10, 10, 10]}
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
                Turbofans
              </h2>

              <p className="self-center mx-8 text-lg font-medium tracking-wide text-justify text-white">
                The turbofan or fanjet is a type of airbreathing jet engine that
                is widely used in aircraft propulsion. The word "turbofan" is a
                portmanteau of "turbine" and "fan": the turbo portion refers to
                a gas turbine engine which achieves mechanical energy from
                combustion, and the fan, a ducted fan that uses the mechanical
                energy from the gas turbine to force air rearwards.
              </p>
              <div className="text-center my-6">
                <Link to="turbofanExplore">
                  <button className="h-12 px-2 my-4 text-base font-semibold tracking-wider text-white w-44 border rounded-full shadow-sm hover:shadow-lg bg-secondary">
                    Explore More
                  </button>
                </Link>
              </div>

              <p className="self-center mt-2 mx-8 text-lg tracking-wide text-center text-white">
                To view the 3D model in AR, scan the QR code or click on the
                button below.
              </p>

              <div className="grid align-center center justify-center grid-cols-1 gap-6 pb-8 mx-8 text-center xl:grid-cols-2">
                <img
                  className="flex p-6 text-6xl mx-auto rounded-xl h-60 w-60"
                  src="https://storage.echoar.xyz/wispy-violet-4999/a22931ba-5f94-4c3c-9e13-a382db8045f7"
                  alt="Turbofans QR"
                />
                <a
                  href="https://go.echoar.xyz/PQkD"
                  target="_blank"
                  rel="noreferrer">
                  <button className="h-12 px-8  text-base font-semibold tracking-wider text-secondary border rounded-full shadow-sm lg:mt-20 sm:mt-4 hover:shadow-lg bg-white">
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
