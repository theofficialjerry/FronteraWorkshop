import { PerspectiveCamera } from "three";

const createCamera = () => {
    const camera = new PerspectiveCamera();

    camera.position.z = 5;
    camera.position.x = -225

    return camera;
}

export { createCamera }