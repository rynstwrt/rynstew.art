

<template>
    <div id="background"></div>
</template>

<script>
import * as THREE from "three";

export default {
    name: "UwU",
    data() {
        return {
            camera: null,
            scene: null,
            renderer: null,
            mesh: null
        }
    },
    methods: {
        init: function() {
            // let container = document.getElementById('background');
            const WIDTH = window.innerWidth;
            const HEIGHT = window.innerHeight;

            this.camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
            // this.camera.position.z = 1;

            this.scene = new THREE.Scene();

            let geometry = new THREE.BoxGeometry(1, 1, 1);
            let material = new THREE.MeshBasicMaterial({
                color: 0xFF00FF,
                wireframe: true
            });

            this.mesh = new THREE.Mesh(geometry, material);
            this.scene.add(this.mesh);

            this.camera.position = -4;

            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(WIDTH, HEIGHT);
            this.renderer.setClearColor(0xFF6000);
            // document.body.appendChild(this.renderer.domElement);
        },
        animate: function() {
            requestAnimationFrame(this.animate);
            // this.mesh.rotation.x += 0.01;
            // this.mesh.rotation.y += 0.02;
            // console.log(this.scene, this.camera);
            this.renderer.render(this.scene, this.camera);
        }
    },
    mounted() {
        this.init();
        this.animate();
    }

}
</script>

<style scoped>
    #background {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        //background-color: red;
    }
</style>