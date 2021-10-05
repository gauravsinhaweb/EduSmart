import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";

const state = proxy({
  current: null,
  items: {}
});

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/boeing777/scene.gltf");
  const [hovered, set] = useState(null);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={e => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={e => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={e => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-10.68, -10.64, 0]} rotation={[0, 0, Math.PI / 2]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-0.09, 0.95, 17.84]}>
              <mesh
                geometry={nodes["KRILO_LEV01-FACES_1"].geometry}
                material={materials["KRILO_LEV01-FACES"]}
              />
            </group>
            <group position={[9.81, 0.43, 4.32]}>
              <mesh
                geometry={nodes["Cone02-FACES_1"].geometry}
                material={materials["Cone02-FACES"]}
              />
            </group>
            <group position={[9.82, 0.41, 2.97]}>
              <mesh
                geometry={nodes["Cylinder02-FACES_1"].geometry}
                material={materials["Cylinder02-FACES"]}
              />
            </group>
            <group position={[9.79, 0.29, -3.86]}>
              <mesh
                geometry={nodes["TURBLEV01-FACES_1"].geometry}
                material={materials["TURBLEV01-FACES"]}
              />
            </group>
            <group position={[9.77, 0.25, -2.53]}>
              <mesh
                geometry={nodes["Sphere03-FACES_1"].geometry}
                material={materials["Sphere03-FACES"]}
              />
            </group>
            <group position={[-0.05, 2.38, 11.51]}>
              <mesh
                geometry={nodes["GIDR_LV01-FACES_1"].geometry}
                material={materials["GIDR_LV01-FACES"]}
              />
            </group>
            <group position={[9.42, 2.03, 4.96]}>
              <mesh
                geometry={nodes["PILON01-FACES_1"].geometry}
                material={materials["PILON01-FACES"]}
              />
            </group>
            <group position={[9.81, 0.33, -3.92]}>
              <mesh
                geometry={nodes["DVIGATEL01-FACES_3"].geometry}
                material={materials["DVIGATEL01-FACES"]}
              />
              <mesh
                geometry={nodes["DVIGATEL01-FACES_4"].geometry}
                material={materials["DVIGATEL01-FACES_0"]}
              />
              <mesh
                geometry={nodes["DVIGATEL01-FACES_5"].geometry}
                material={materials["DVIGATEL01-FACES_1"]}
              />
            </group>
            <group position={[-9.82, 0.43, 4.32]}>
              <mesh
                geometry={nodes["Cone01-FACES_1"].geometry}
                material={materials["Cone01-FACES"]}
              />
            </group>
            <group position={[-9.82, 0.41, 2.97]}>
              <mesh
                geometry={nodes["Cylinder01-FACES_1"].geometry}
                material={materials["Cylinder01-FACES"]}
              />
            </group>
            <group position={[0, 4.02, -22.47]}>
              <mesh
                geometry={nodes["KABINA-FACES_2"].geometry}
                material={materials["KABINA-FACES"]}
              />
              <mesh
                geometry={nodes["KABINA-FACES_3"].geometry}
                material={materials["KABINA-FACES_0"]}
              />
            </group>
            <group position={[-9.85, 0.29, -3.86]}>
              <mesh
                geometry={nodes["TURBLEV-FACES_1"].geometry}
                material={materials["TURBLEV-FACES"]}
              />
            </group>
            <group position={[-9.87, 0.25, -2.53]}>
              <mesh
                geometry={nodes["Sphere02-FACES_1"].geometry}
                material={materials["Sphere02-FACES"]}
              />
            </group>
            <group position={[-0.04, 2.38, 11.51]}>
              <mesh
                geometry={nodes["GIDR_LV-FACES_1"].geometry}
                material={materials["GIDR_LV-FACES"]}
              />
            </group>
            <group position={[0.01, 1.95, -5.37]}>
              <mesh
                geometry={nodes["COREN-FACES_1"].geometry}
                material={materials["COREN-FACES"]}
              />
            </group>
            <group position={[-9.49, 2.03, 4.96]}>
              <mesh
                geometry={nodes["PILON-FACES_1"].geometry}
                material={materials["PILON-FACES"]}
              />
            </group>
            <group position={[-9.82, 0.33, -3.92]}>
              <mesh
                geometry={nodes["DVIGATEL-FACES_3"].geometry}
                material={materials["DVIGATEL-FACES"]}
              />
              <mesh
                geometry={nodes["DVIGATEL-FACES_4"].geometry}
                material={materials["DVIGATEL-FACES_0"]}
              />
              <mesh
                geometry={nodes["DVIGATEL-FACES_5"].geometry}
                material={materials["DVIGATEL-FACES_1"]}
              />
            </group>
            <group position={[0.01, 4.41, 35.54]}>
              <mesh
                geometry={nodes["OPER_GOR-FACES_1"].geometry}
                material={materials["OPER_GOR-FACES"]}
              />
            </group>
            <group position={[0.05, 0.95, 17.84]}>
              <mesh
                geometry={nodes["KRILO_LEV-FACES_1"].geometry}
                material={materials["KRILO_LEV-FACES"]}
              />
            </group>
            <group position={[0, 16.39, 37.31]}>
              <mesh
                geometry={nodes["KIL-FACES_1"].geometry}
                material={materials["KIL-FACES"]}
              />
            </group>
            <group position={[0, 1.98, -24.86]}>
              <mesh
                geometry={nodes["FUZEL-FACES_4"].geometry}
                material={materials["FUZEL-FACES"]}
              />
              <mesh
                geometry={nodes["FUZEL-FACES_5"].geometry}
                material={materials["FUZEL-FACES_0"]}
              />
              <mesh
                geometry={nodes["FUZEL-FACES_6"].geometry}
                material={materials["FUZEL-FACES_1"]}
              />
              <mesh
                geometry={nodes["FUZEL-FACES_7"].geometry}
                material={materials["FUZEL-FACES_2"]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function Details() {
  const snap = useSnapshot(state);
  switch (snap.current) {
    case "FUZEL-FACES":
      return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
          <h1 className="text-3xl uppercase">Fuselage</h1>
          <p className="text-xl text-justify mt-4">
            The internal cabin width is increased from the previous 777 models'
            231 to 235 in (587 to 597 cm) through thinner interior cabin walls
            and better insulation to allow 18.0 in (46 cm) wide seats in
            10-abreast economy.
          </p>
        </div>
      );
    case "FUZEL-FACES_0":
      return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
          <h1 className="text-3xl uppercase">Cockpit</h1>
          <p className="text-xl text-justify mt-4">
            A cockpit or flight deck is the area, usually near the front of an
            aircraft or spacecraft, from which a pilot controls the aircraft.
          </p>
        </div>
      );
    case "DVIGATEL-FACES_1":
      return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
          <h1 className="text-3xl uppercase">Rolls-Royce Trent 800 Engine</h1>
          <p className="text-xl text-justify mt-4">
            The 777 Classics were powered by 77,200–98,000 lbf (343–436 kN)
            General Electric GE90, Pratt & Whitney PW4000, or Rolls-Royce Trent
            800 engines.
          </p>
        </div>
      );
    case "KIL-FACES":
      return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
          <h1 className="text-3xl uppercase">Tail FIn</h1>
          <p className="text-xl text-justify mt-4">
            A vertical stabilizer, vertical stabiliser, or fin, is a structure
            designed to reduce aerodynamic side slip and provide directional
            stability.
          </p>
        </div>
      );
    case "KRILO_LEV01-FACES":
      return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
          <h1 className="text-3xl uppercase">Wings</h1>
          <p className="text-xl text-justify mt-4">
            The 777X has a new longer composite wing with folding wingtips.[68]
            Due to this, the 777x is the first aircraft to have 'Wingtip
            Controls' inside the cockpit.
          </p>
        </div>
      );
    default:
      return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
          <h1 className="text-2xl tracking-wider">
            Click on the plane to know more
          </h1>
        </div>
      );
  }
}

export function Boeing777Explore() {
  return (
    <>
      <div className="md:grid md:grid-cols-3 md:pr-15 pr-1 w-full">
        <div className="w-full h-screen p-16 outline-none cursor-pointer md:col-span-2 lg:block">
          <div className="text-3xl text-white font-extralight ml-48 ">
            Boeing 777
          </div>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [-4, 4, 4], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <spotLight
              intensity={0.5}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Suspense fallback={null}>
              <Model scale={0.07} />
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
            <OrbitControls />
          </Canvas>
        </div>

        <div className="mt-16 h-full grid place-content-center md:mt-0 md:col-span-1 p-4 text-white">
          <Details />
        </div>
      </div>
    </>
  );
}
