
<script setup>
    // import Background from "./Background.vue";
    import { ref } from "vue";

    // const background = ref(null);
</script>

<template>
    <!--<Background />-->
    <canvas ref="background"></canvas>
    <h1>App</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-view />
</template>



<script>
import * as THREE from "three";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 100);
camera.position.z = -5;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 0xFF0000
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// const canvas = document.querySelector("#background");
// console.log(canvas);

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: this.querySelector("canvas")
});
renderer.setSize(WIDTH / HEIGHT);
renderer.setAnimationLoop(animate);
// document.body.appendChild(renderer.domElement);

function animate(time) {
    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 2000;
    renderer.render(scene, camera);
}
</script>


<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
