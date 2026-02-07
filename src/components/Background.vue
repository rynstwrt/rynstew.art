<script setup>
const props = defineProps([
    'particleColor',
    'particleOpacity'
]);
</script>


<template>
    <vue-particles
        id="bg-particles"
        :options="{
                    clear: true,
                    // fullscreen: {
                    //     enable: true
                    // },
                    detectRetina: true,
                    fpsLimit: 120,
                    particles: {
                        color: {
                            value: props.particleColor
                        },
                        opacity: {
                            value: parseFloat(props.particleOpacity)
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            // outModes: 'none',
                            random: true,
                            speed: 1,
                            gravity: {
                                acceleration: 9.81,
                                enable: false,
                                inverse: false,
                                maxSpeed: 50
                            },
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 300,
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: .5, max: 3 }
                        }
                    }
    }" />
</template>


<style scoped>
#bg-particles {
    z-index: -1;
}
</style>