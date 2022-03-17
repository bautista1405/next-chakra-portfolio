import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Box(props) {
  
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial  color={"white"} />
    </mesh>
  );
}
export default Box;
