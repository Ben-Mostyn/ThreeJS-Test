import React from "react";
import * as THREE from "three";
import { Sphere } from "@react-three/drei";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import { extend, useFrame } from "react-three-fiber";
import { useState, useRef } from "react";
import { Quaternion } from "three";

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
  // const mesh = useRef();
  // useFrame(() => (mesh.current.rotation.x += 0.01));

  return (
    <mesh>
      <Sphere visible args={[1, 40, 40]} scale={3}>
        <waveShaderMaterial uColor={"#F9FF16"} wireframe />
      </Sphere>
    </mesh>
  );
}
