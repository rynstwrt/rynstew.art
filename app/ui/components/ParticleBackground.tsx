'use client';


import "@/app/ui/ParticleBackground.css";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";


export default () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async engine => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true)
        });
    }, []);

    const particlesLoaded = async (container?: Container) => {
        if (!init)
            console.log(container);
    }

    const options: ISourceOptions = useMemo(() => ({
        particles: {
            number: {
                value: 160,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                // image: {
                //     src: "img/github.svg"
                //     width: 100,
                //     height: 100
                // }
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: {
                    min: 1.2,
                    max: 3.5
                }
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: MoveDirection.none,
                random: true,
                straight: false,
                out_mode: OutMode.out,
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                }
            }
        },
        retina_detect: true
    }), []);


    if (init) {
        return (
            <Particles
                id={"bg-particles"}
                particlesLoaded={particlesLoaded}
                options={options}/>
        )
    }

    return <></>;
};