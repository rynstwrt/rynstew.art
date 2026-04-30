<script lang="ts">
    import Particles, { particlesInit } from '@tsparticles/svelte';
    import { loadSlim } from '@tsparticles/slim';

    void particlesInit(async (engine) => {
        await loadSlim(engine);
    });
</script>


<Particles id="tsparticles"
           class="w-full h-full backdrop-brightness-25 backdrop-contrast-101 backdrop-blur-xs fixed -z-1"
           options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                detectRetina: true,
                particles: {
                    color: {
                        value: '#fff'
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: {
                            min: 0.1,
                            max: .1
                        },
                        animation: {
                            enable: true,
                            speed: 1
                        }
                    },
                    size: {
                        value: {
                            min: .2,
                            max: 3
                        }
                    },
                    move: {
                        angle: {
                            value: 10,
                            offset: 5
                        },
                        enable: true,
                        speed: 0.5,
                        direction: "top",
                        outModes: "out"
                    },
                    collisions: {
                        enable: false
                    },
                    number: {
                        value: 200,
                        density: {
                            enable: true
                        }
                    }
                }
            }}/>
