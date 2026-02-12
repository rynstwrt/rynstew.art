import { animate } from './lib/anime.js';


animate("#down-chevron-container", {
    bottom: "+=10px",
    loop: true,
    alternate: true,
    easing: "inOutQuad",
    duration: 700
});

