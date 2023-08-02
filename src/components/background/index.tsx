"use client"

import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sparkles, } from '@react-three/drei';
import Campfire from './campfire';



const ParticleBackground = () => {
    const scale32 = Array.from({ length: 100 }, () => 0.5 + Math.random() * 4);
    const scale = new Float32Array(scale32);
    return (
        <div style={{ width: "100vw", height: "100vh", position: "absolute", zIndex: "-1", overflow: "hidden" }}>
            <Canvas>
                <Sparkles count={scale.length} size={scale} position={[0, 1, 0]} scale={[10, 10, 10]} speed={0.65} color={"#ff9c00"} />
                <directionalLight castShadow position={[1.5, 4, 5]} shadow-mapSize={[1024, 1024]} intensity={2} >
                    <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                </directionalLight>
                <Campfire />
                <OrbitControls 
                    enableDamping={false} 
                    enableZoom={false} 
                    enablePan={false}  
                    minAzimuthAngle={-Math.PI/2 }
                    maxAzimuthAngle={Math.PI/2}
                    minPolarAngle={Math.PI/2}
                    maxPolarAngle={Math.PI/2}
                />
            </Canvas>
        </div>
    )
}

/**
 * <mesh rotation={[0, 10, 0]}>
                    <boxGeometry attach="geometry" args={[1, 1, 1]} />
                    <meshStandardMaterial attach="material" color={"#6be092"} />
                </mesh>
 */

export default ParticleBackground;