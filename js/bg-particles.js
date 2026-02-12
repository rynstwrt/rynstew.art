const WINDOW_RESIZE_DEBOUNCE_MS = 1000;


function onParticlesLoad() {
    // const canvas = document.querySelector("#bg-particles canvas");
    //
    // let lastWindowResizeTime = 0;
    // window.addEventListener("resize", () => {
    //     const now = Date.now();
    //
    //     if (now - lastWindowResizeTime < WINDOW_RESIZE_DEBOUNCE_MS) return;
    //     else lastWindowResizeTime = now;
    //
    //     console.log("resized");
    //
    //
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight
    // });
}


particlesJS.load("bg-particles", "/assets/json/particles-config.json", onParticlesLoad);