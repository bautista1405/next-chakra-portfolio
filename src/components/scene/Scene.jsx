import React from "react";
import { Canvas } from "@react-three/fiber";
import Floor from "./Floor";
import Box from "./Box";
import LightBulb from "./LightBulb";
import Controls from "./OrbitControls";
import Draggable from "./Draggable";
import {Suspense} from "react";

export default function Scene() {
    return (
      <div >
        <Canvas
          shadows={true}
          camera={{
            position: [-6, 7, 7],
          }}
          style={{height: '500px', width: '500px'}}
        >
            <ambientLight color={"white"} intensity={0.3} />
            <LightBulb position={[0, 3, 0]}/>
            <Draggable>
              <Suspense fallback={null}>
                <Box rotateX={3} rotateY={0.2}/>
              </Suspense>  
            </Draggable>
            <Controls />
            {/* <Floor position={[0, -1, 0]}/> */}
   
        </Canvas>
      </div>
    );
  }