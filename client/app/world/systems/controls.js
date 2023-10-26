import { Clock } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const clock = new Clock();

const createControls = (camera, canvas) => {
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.dampingFactor = .01;

    controls.minDistance = 25
    controls.maxDistance = 225

    let cameraSpeed = .3

    controls.tick = () => {
        const delta = clock.getDelta();
        controls.update(delta);
        controls.update(cameraSpeed);

        if (cameraSpeed >= .005)
            cameraSpeed -= .0009

    }
    return controls;
}

export { createControls }