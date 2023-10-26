import { World } from "./World";

const createWorld = async (image_link, container) => {

    const world = new World(image_link, container);

    await world._init();
    world.start();

}

export {createWorld};