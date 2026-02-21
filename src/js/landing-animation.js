import { createTimeline, splitText, stagger } from "animejs";

export function createNameAnimation() {
    const { words, chars } = splitText("#landing h1", {
        words: true,
        chars: true
    });


    createTimeline({
        defaults: {
            duration: 600,
            ease: 'inOut', // ease applied between each keyframes if no ease defined
        },
        delay: 150,
    })
    .add(words, {
        y: "-=0.3lh",
        ease: 'outCubic'
    }, stagger(100))
    .add(chars, {
        duration: 650,
        scale: [
            { to: 1.123, ease: "in" },
            { to: 1, ease: "out" }
        ],
        rotateX: {
            to: "-1turn",
            ease: "inOutSine",
            delay: stagger(35),
        }
    }, 0)
    .add(words, {
        y: 0,
        ease: 'outQuad',
        duration: 400
    }, stagger(150, { reversed: true }));
}