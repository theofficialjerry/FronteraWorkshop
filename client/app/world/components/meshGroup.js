import {
    Mesh,
    MathUtils,
    Group,
    BoxGeometry,
    SphereGeometry,
    MeshStandardMaterial
} from "three";

const createMeshGroup = () => {
    const group = new Group();

    const geometry = new BoxGeometry();
    const material = new MeshStandardMaterial({ color: 'grey' });

    const sphere = new Mesh(geometry, material);

    group.add(sphere);

    for (let i = 0; i < 1; i += 0.05) {
        const clone = sphere.clone();

        clone.position.x = Math.cos(2 * Math.PI * i);
        clone.position.y = Math.sin(2 * Math.PI * i);
        clone.z = -i / 5;

        clone.scale.multiplyScalar(0.01 + i);

        group.add(clone);
    }

    const radiansPerSecond = MathUtils.degToRad(30);
    group.tick = (delta) => {
        group.rotation.z -= delta * radiansPerSecond;
    }

    return group;
}

export { createMeshGroup }