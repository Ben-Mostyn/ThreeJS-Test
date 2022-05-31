import React from "react";
import * as THREE from "three";
import { Sphere, useTexture } from "@react-three/drei";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import { extend, useFrame } from "react-three-fiber";
import { useState, useRef } from "react";
import { MeshStandardMaterial, Quaternion, TextureLoader } from "three";
import sunImg from "./ComponentCSS/imgs/soon.png";
import alpha1 from "./ComponentCSS/imgs/Alpha.png";

const WaveShaderMaterial = shaderMaterial(
  //Uniform
  { uColor: new THREE.Color(0.0, 0.0, 0.0) },
  //Vertex Shader
  glsl`
    varying vec2 vUv;

  void main() {
     
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  //Fragment Shader
  glsl`
  uniform vec3 uColor;
  
  void main(){
      gl_FragColor = vec4( uColor, 0.8);
  }
  `
);

extend({ WaveShaderMaterial });

export default function Sun() {
  const texture = useTexture(sunImg);
  const texture1 = useTexture(alpha1);

  return (
    <mesh map={texture}>
      <Sphere visible args={[1, 40, 40]} scale={3}>
        {/* <waveShaderMaterial uColor={"#F9FF16"} /> */}
        <meshBasicMaterial map={texture} alphaMap={texture1} />
      </Sphere>
    </mesh>
  );
}
