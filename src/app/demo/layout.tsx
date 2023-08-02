"use client"

import NavBar from "@/components/nav";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { BoxGeometry, Vector3 } from "three";

const DemoLayout: React.FC = () => {

    const [boxes, setBoxes] = useState<JSX.Element[]>([]);
    const lightRef = useRef();

    useEffect(() => {
        let newBoxes: JSX.Element[] = [];
        for (let i = 0; i < 50; i++) {
            let newPos = getRandomPos(-10, 10);

            let newPosition = new Vector3(getRandomPos(-5, 15), getRandomPos(-5, 15), getRandomPos(-5, 10));
            let newBox =
                <mesh
                    position={newPosition}>
                    <boxGeometry attach="geometry" args={[1, 1, 1]} />
                    <meshStandardMaterial attach={"material"} color={'white'} />
                </mesh>
            newBoxes.push(newBox);
        }
        setBoxes(newBoxes);
    }, []);

    const getRandomPos = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    }


    return (
        <>
            <NavBar />
            <main className="flex max-h-screen flex-col items-center justify-between p-12 ">
                <div className="flex-col items-center justify-self-center">
                    <h1 className="mt-10 text-4xl font-thin">Demos</h1>
                </div>
            </main>
            <div className="justify-items-center items-center" style={{ width: "80vw", height: "40rem", left: "10vw", minHeight: "40rem", position: "relative", overflow: "hidden", background: "white" }}>
                <Canvas camera={{ position: [0, 0, 8] }}>
                    <directionalLight position={[1, 1, 1]} color={"#B887ED"} intensity={1.5} />
                    {boxes}
                    <OrbitControls
                        enableDamping={false}
                        enablePan={false}
                        minAzimuthAngle={-Math.PI / 2}
                        maxAzimuthAngle={Math.PI / 2}
                        minPolarAngle={-Math.PI / 2}
                        maxPolarAngle={Math.PI / 2}
                    />
                </Canvas>
            </div>
        </>
    );
}

export default DemoLayout;