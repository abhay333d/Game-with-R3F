import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import Level from "./Level.jsx";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />
      <Perf />

      <Physics debug={true}>
        <Lights />
        <Level />
      </Physics>
    </>
  );
}
