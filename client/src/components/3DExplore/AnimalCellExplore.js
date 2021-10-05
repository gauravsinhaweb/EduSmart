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
  const { nodes, materials } = useGLTF(
    "/animal_cell_-_downloadable/scene.gltf"
  );
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
        <group position={[0.2, 0.29, 0]} scale={[1.19, 1.27, 1.27]}>
          <mesh
            geometry={nodes.Sphere001_0.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          position={[-0.38, -3.27, 0.02]}
          rotation={[0, -0.06, 3.06]}
          scale={[0.05, 0.05, 0.05]}>
          <mesh
            geometry={nodes.Sphere002_0.geometry}
            material={materials["Material.008"]}
          />
        </group>
        <group position={[-0.39, 0.61, -0.01]} scale={1.14}>
          <mesh
            geometry={nodes.Icosphere_0.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group position={[-0.39, 0.61, -0.01]} scale={1.14}>
          <mesh
            geometry={nodes.BezierCurve_0.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <group
          position={[1.15, -2.2, -0.37]}
          rotation={[0, 0, 0.76]}
          scale={[0.41, 0.41, 0.41]}>
          <mesh
            geometry={nodes.BezierCurve002_0.geometry}
            material={materials["Material.006"]}
          />
        </group>
        <group position={[0.2, 0.2, -0.13]} scale={[1.13, 1.2, 1.2]}>
          <mesh
            geometry={nodes.Sphere_0.geometry}
            material={materials.Material}
          />
        </group>
        <group
          position={[1.92, 0.2, -0.21]}
          rotation={[0.01, -0.04, 1.65]}
          scale={[0.19, 0.19, 0.19]}>
          <mesh
            geometry={nodes.Roundcube000_0.geometry}
            material={materials["Material.011"]}
          />
        </group>
        <group position={[-0.38, 0.55, 0.2]} scale={0.26}>
          <mesh
            geometry={nodes.Roundcube001_0.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group position={[-0.38, 0.62, 0]} scale={0.98}>
          <mesh
            geometry={nodes.Roundcube_0.geometry}
            material={materials["Material.010"]}
          />
        </group>
        <group position={[-0.39, 0.61, -0.01]} scale={1.14}>
          <mesh
            geometry={nodes.Icosphere002_0.geometry}
            material={materials["Material.003"]}
          />
        </group>
        <group
          position={[-0.38, -3.27, 0.02]}
          rotation={[0, -0.06, 3.06]}
          scale={[0.05, 0.05, 0.05]}>
          <mesh
            geometry={nodes.Sphere005_0.geometry}
            material={materials["Material.007"]}
          />
        </group>
      </group>
    </group>
  );
}

function Details() {
  const snap = useSnapshot(state);

  switch (snap.current) {
    case "Material.010":
      return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
          <h1 className="text-3xl uppercase">Nucleolus</h1>
          <p className="text-xl text-justify mt-4">
            The nucleolus is a membrane-less organelle within the nucleus that
            manufactures ribosomes, the cell's protein-producing structures.
            Through the microscope, the nucleolus looks like a large dark spot
            within the nucleus.
          </p>
        </div>
      );
    case "Material.006":
      return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
          <h1 className="text-3xl uppercase">Golgi Apparatus</h1>
          <p className="text-xl text-justify mt-4">
            A Golgi body, also known as a Golgi apparatus, is a cell organelle
            that helps process and package proteins and lipid molecules,
            especially proteins destined to be exported from the cell.
          </p>
        </div>
      );
    case "Material.011":
      return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
          <h1 className="text-3xl uppercase">Lysosome</h1>
          <p className="text-xl text-justify mt-4">
            A lysosome is a membrane-bound cell organelle that contains
            digestive enzymes. They break down excess or worn-out cell parts.
            They may be used to destroy invading viruses and bacteria.
          </p>
        </div>
      );
    case "Material.005":
      return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
          <h1 className="text-3xl uppercase">Endoplasmic Reticulum</h1>
          <p className="text-xl text-justify mt-4">
            Endoplasmic Reticulum (ER), in biology, a continuous membrane system
            that forms a series of flattened sacs within the cytoplasm of
            eukaryotic cells and serves multiple functions, being important
            particularly in the synthesis, folding, modification, and transport
            of proteins.
          </p>
        </div>
      );
    case "Material.004":
      return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
          <h1 className="text-3xl uppercase">Cytoplasm</h1>
          <p className="text-xl text-justify mt-4">
            The cytoplasm is the gel-like fluid inside the cell. It is the
            medium for chemical reaction. It provides a platform upon which
            other organelles can operate within the cell. All of the functions
            for cell expansion, growth and replication are carried out in the
            cytoplasm of a cell.
          </p>
        </div>
      );
    default:
      return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
          <h1 className="text-2xl tracking-wider">
            Click on the plant cell to know more
          </h1>
        </div>
      );
  }
}

export function AnimalCellExplore() {
  return (
    <>
      <div className="md:grid md:grid-cols-3 md:pr-15 pr-1 w-full">
        <div className="w-full h-screen p-16 outline-none cursor-pointer md:col-span-2 lg:block">
          <div className="text-3xl text-white font-extralight ml-48 ">
            Animal Cell
          </div>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 4], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <spotLight
              intensity={0.5}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Suspense fallback={null}>
              <Model scale={0.2} />
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
