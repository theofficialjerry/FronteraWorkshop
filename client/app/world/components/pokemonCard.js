import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { TextureLoader } from 'three';

const loadCard = async (image_link) => {



    const loader = new GLTFLoader();
    const cardData = await loader.loadAsync('/assets/pokemon/pokemon_card.gltf');

    console.log(cardData.scene.children[0]);

    const textureLoader = new TextureLoader();
    const texture = await textureLoader.loadAsync(image_link);
    texture.flipY = false

    const card = cardData.scene.children[0];
    console.log(card);

    card.children[2].material.map = texture

    

    return { card }
}

export { loadCard }