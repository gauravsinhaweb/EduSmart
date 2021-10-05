import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { Switch } from "react-router-dom";

const state = proxy({
  current: null,
  items: {}
});

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/turbine__turbofan_engine/scene.gltf");
  const [hovered, set] = useState(null);
  console.log(hovered);

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
        <group position={[0, 3.13, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.tube_front_0.geometry}
            material={nodes.tube_front_0.material}
          />
        </group>
        <group position={[0, 2.94, 0]}>
          <mesh
            geometry={nodes.blades_0.geometry}
            material={nodes.blades_0.material}
          />
        </group>
        <group position={[0, -0.02, -0.05]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.turbine_hull_0.geometry}
            material={nodes.turbine_hull_0.material}
          />
        </group>
        <group position={[0, -3.55, 0]}>
          <mesh
            geometry={nodes.flaps_ring_0.geometry}
            material={nodes.flaps_ring_0.material}
          />
        </group>
        <group position={[0, -3.71, 0]} rotation={[-0.39, -0.19, -0.08]}>
          <mesh
            geometry={nodes.flaps_stabiliser_0.geometry}
            material={nodes.flaps_stabiliser_0.material}
          />
        </group>
        <group position={[0, -1.84, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.fins_outside_0.geometry}
            material={nodes.fins_outside_0.material}
          />
        </group>
        <group position={[0, -0.46, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.containers_0.geometry}
            material={nodes.containers_0.material}
          />
        </group>
        <group position={[0, -0.29, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.containers_spacers_0.geometry}
            material={nodes.containers_spacers_0.material}
          />
        </group>
        <group position={[0, 0.29, 0]} rotation={[0, Math.PI / 6, 0]}>
          <mesh
            geometry={nodes.tubes_0.geometry}
            material={materials.metal_brighter}
          />
        </group>
        <group position={[0, 0.87, 0.41]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.electonics_side_1_0.geometry}
            material={nodes.electonics_side_1_0.material}
          />
        </group>
        <group position={[0, 1.28, -0.49]} rotation={[0, 0, Math.PI / 2]}>
          <mesh
            geometry={nodes.pipe_big_0.geometry}
            material={nodes.pipe_big_0.material}
          />
        </group>
        <group position={[0, 0.87, 0.12]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.containers_small_0.geometry}
            material={nodes.containers_small_0.material}
          />
        </group>
        <group
          position={[0, 0.9, 0]}
          rotation={[-0.96, 0.37, 0.47]}
          scale={[0.18, 0.18, 0.18]}>
          <mesh
            geometry={nodes.pistons_0.geometry}
            material={nodes.pistons_0.material}
          />
        </group>
        <group position={[0, 0.88, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.turbine_hull_middle_0.geometry}
            material={nodes.turbine_hull_middle_0.material}
          />
        </group>
        <group
          position={[0, 0.76, -0.12]}
          rotation={[-Math.PI, 1.35, Math.PI / 2]}
          scale={[0.09, 0.09, 0.09]}>
          <mesh
            geometry={nodes.electronics_side_0.geometry}
            material={nodes.electronics_side_0.material}
          />
        </group>
        <group
          position={[0, 0.81, -0.39]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-1, 1, 1]}>
          <mesh
            geometry={nodes.name_plate_0.geometry}
            material={nodes.name_plate_0.material}
          />
        </group>
        <group
          position={[0, 0.81, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.3}>
          <mesh
            geometry={nodes.bolts_0.geometry}
            material={nodes.bolts_0.material}
          />
          <mesh
            geometry={nodes.bolts_0_1.geometry}
            material={nodes.bolts_0_1.material}
          />
        </group>
        <group position={[0, 2.99, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.grid_0.geometry}
            material={nodes.grid_0.material}
          />
        </group>
        <group position={[0, -3.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.flaps_0.geometry}
            material={nodes.flaps_0.material}
          />
        </group>
        <group position={[0, -3.11, 0.02]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.plates_back_0.geometry}
            material={nodes.plates_back_0.material}
          />
        </group>
        <group
          position={[0.04, -2.75, 0.1]}
          rotation={[0.29, 0.38, -1.68]}
          scale={[0.22, 0.22, 0.22]}>
          <mesh
            geometry={nodes.clamps_0.geometry}
            material={nodes.clamps_0.material}
          />
        </group>
        <group position={[0, 2.26, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.plates_0.geometry}
            material={nodes.plates_0.material}
          />
        </group>
        <group position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.fins_0.geometry}
            material={nodes.fins_0.material}
          />
        </group>
        <group position={[0, 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.tube_middle_0.geometry}
            material={nodes.tube_middle_0.material}
          />
        </group>
        <group
          position={[0, -2.16, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.68}>
          <mesh
            geometry={nodes.tube_0.geometry}
            material={nodes.tube_0.material}
          />
        </group>
        <group position={[0, 0.29, 0]} rotation={[0, Math.PI / 6, 0]}>
          <mesh
            geometry={nodes.tubes001_0.geometry}
            material={nodes.tubes001_0.material}
          />
        </group>
        <group position={[0, 0.29, 0]} rotation={[0, Math.PI / 6, 0]}>
          <mesh
            geometry={nodes.tubes002_0.geometry}
            material={nodes.tubes002_0.material}
          />
        </group>
      </group>
    </group>
  );
}

function Details() {
  const snap = useSnapshot(state);

  switch (snap.current) {
    case "hull":
      return (
        <div className="h-full md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl uppercase">Turboprop</h1>
          <p className="text-xl text-justify mt-4">
            A turboprop consists of an intake, reduction gearbox, compressor,
            combustor, turbine, and a propelling nozzle. Air is drawn into the
            intake and compressed by the compressor. Fuel is then added to the
            compressed air in the combustor, where the fuel-air mixture then
            combusts.
          </p>
        </div>
      );
    case "grid":
      return (
        <div className="h-full md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl uppercase">Turbine</h1>
          <p className="text-xl text-justify mt-4">
            A turbine is a device that harnesses the kinetic energy of some
            fluid - such as water, steam, air, or combustion gases - and turns
            this into the rotational motion of the device itself.
          </p>
        </div>
      );
    default:
      return (
        <div className="h-full md:flex md:flex-col md:justify-center">
          <h1 className="text-2xl tracking-wider">
            Click on the Turbine Engine to know more
          </h1>
        </div>
      );
  }
}

export function TurbofanExplore() {
  return (
    <>
      <div className="md:grid md:grid-cols-3 md:pr-15 pr-1 w-full h-screen">
        <div className="w-full h-screen p-12 outline-none cursor-pointer md:col-span-2 lg:block">
          <div className="text-3xl text-white font-extralight ml-48 ">
            Aircraft Engine
          </div>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [-4, 2, -4], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <spotLight
              intensity={0.5}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Suspense fallback={null}>
              <Model scale={0.6} />
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

        <div className="mt-16 h-full grid place-content-center md:mt-0 md:col-span-1 p-4 text-white">
          <Details />
        </div>
      </div>
    </>
  );
}
