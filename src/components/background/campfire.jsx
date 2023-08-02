import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Campfire = () => {
    const materials = useLoader(MTLLoader, '/PUSHILIN_campfire.mtl');
    const obj = useLoader(OBJLoader, '/PUSHILIN_campfire.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });
    console.log(obj);
    return (
        <primitive object={obj} scale={1} position={[0, -2, 0]} rotation={[0, 0, 0]} />
    )
}

export default Campfire;