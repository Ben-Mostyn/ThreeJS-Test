import React from "react";
import { Sphere, useTexture } from "@react-three/drei";
import sunImg from "./ComponentCSS/imgs/moon.png";
import alpha1 from "./ComponentCSS/imgs/Alpha.png";

export default function Sun() {
  const texture = useTexture(sunImg);
  const texture1 = useTexture(alpha1);

  return (
    <mesh map={texture}>
      <Sphere visible args={[1, 40, 40]} scale={3}>
        <meshBasicMaterial map={texture} alphaMap={texture1} />
      </Sphere>
    </mesh>
  );
}
