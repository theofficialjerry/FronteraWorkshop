import { FloatType, PMREMGenerator } from "three";
import { RGBELoader } from "three/addons/loaders/RGBELoader"

const setupHDRMap = async (renderer) => {
    let loader = new RGBELoader();
    loader.setDataType(FloatType);

    try{
        const texture = await loader.loadAsync('assets/hdr/little_paris_eiffel_tower_4k.hdr');
        const pmremGen = new PMREMGenerator(renderer);

        pmremGen.compileEquirectangularShader();

        const envMap = pmremGen.fromEquirectangular(texture).texture;

        texture.dispose();
        pmremGen.dispose();

        return envMap;
    }catch(err){
        throw err;
    }
}

export {setupHDRMap};