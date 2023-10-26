import {
    createControls,
    createRenderer,
    Resizer,
    Loop
} from "./systems";

import {
    createCamera,
    createLights,
    createScene,
    createShape,
    createMeshGroup,
    loadCard,
    setupHDRMap,
} from "./components";

import { AxesHelper, GridHelper } from "three";

import * as THREE from 'three';

// module scoped variables
const axesHelper = new AxesHelper(25);
const gridHelper = new GridHelper(50, 10);

let camera;
let renderer;
let scene;
let loop;
let controls;
let cube;
let image_link;

class World {
    constructor(image_link, container) {

        scene = createScene();
        camera = createCamera();
        renderer = createRenderer();
        controls = createControls(camera, renderer.domElement);
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.image_link = image_link;
        container.appendChild(renderer.domElement);

        
        loop = new Loop(camera, scene, renderer);
        loop.updatables.push(controls);
        
        const { ambientLight, mainLight } = createLights();
        scene.add(ambientLight, mainLight);

        const resizer = new Resizer(container, camera, renderer);

        scene.add(axesHelper, gridHelper);
    }

    async _init() {
        const envMap = await setupHDRMap(renderer);

        // TODO: add the envMap to the background and environment

        const { card } = await loadCard(this.image_link);
        
        // TODO: add the card to the scene and move the card down a bit

        card.position.y = -25

        loop.start();
    }

    render() {
        // renderer.render(scene.camera);
        renderer.render(scene, camera)
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }


}

export { World };