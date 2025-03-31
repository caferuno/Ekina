 import * as THREE from 'three';
  import { MindARThree } from 'mindar-image-three';
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//const THREE=window.MINDAR.IMAGE.THREE;
/*
const loadGLTF = (path)=>{
    return new Promise ((resolve, reject)=>{
        const loader=new GLTFLoader();
        loader.load(path, (gltf)=>{
            resolve(gltf);
        });
        });
    }
};
*/
document.addEventListener('DOMContentLoaded', () => {
    const start=async()=>{
        const mindarThree=new MindARThree({
            container:document.body,
            imageTargetSrc:'./musicband.mind',
        });

const {renderer, scene, camera}=mindarThree;

const light=new THREE.HemisphereLight(0xffffff,0xbbbbff,1);
scene.add(light);
const anchor=mindarThree.addAnchor(0);


const loader=new GLTFLoader();
loader.load('./musicband-raccoon/scene.gltf', (gltf)=>{
    anchor.group.add(gltf.scene);
    gltf.scene.scale.set(0.1,0.1,0.1);
    gltf.scene.position.set(0,-0.4,0);
  
  const raccoonAnchor=mindarThree.addAnchor(0); // This is the raccoon anchor
  raccoonAnchor.group.add(gltf.scene); // Add the raccoon model to the anchor group
  //raccoonAnchor.group.rotation.set(0, Math.PI, 0); // Rotate the raccoon model
    
});

    await mindarThree.start();
    renderer.setAnimationLoop(()=>{
        renderer.render(scene, camera);
    });
}
    start();

});