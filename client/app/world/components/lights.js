import { AmbientLight, DirectionalLight} from "three";

const createLights = () => {
    const ambientLight = new AmbientLight('white', 1);
    const mainLight = new DirectionalLight('white', 1);

    mainLight.position.set(-300, 0, 0);

    return{ambientLight, mainLight};
}

export {createLights};