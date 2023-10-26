import { MathUtils, Mesh, MeshStandardMaterial } from "three";
import { BoxGeometry } from "three";

const createShape = (color = null) => {
    const geometry = new BoxGeometry();
    const material = new MeshStandardMaterial({ color: color });

    const cube = new Mesh(geometry, material);

    const radiansPerSecond = MathUtils.degToRad(5);

    cube.tick = (delta) => {
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
        cube.rotation.z += radiansPerSecond * delta;
    }

    return cube;
}

export { createShape };