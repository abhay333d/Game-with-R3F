import Lights from "./Lights.jsx";
import Level from "./Level.jsx";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import Player from "./Player.jsx";

export default function Experience() {
  return (
    <>
      <Perf />

      <Physics debug={false}>
        <Lights />
        <Level />
        <Player />
      </Physics>
    </>
  );
}
