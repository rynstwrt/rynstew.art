import { animate } from './lib/anime.js';



document.querySelector("#learn-more-btn").addEventListener("click", () => {
    document.querySelector("section:nth-of-type(2)").scrollIntoView();
});



animate("#down-chevron-container", {
    bottom: "+=10px",
    loop: true,
    alternate: true,
    easing: "inOutQuad",
    duration: 700
});




function setActivePortfolioTab(btn) {
    const portfolioId = btn.id.replaceAll("-tab", "");

    document.querySelectorAll("#portfolio-content .active")
            .forEach(active => active.classList.remove("active"));

    btn.classList.add("active");

    const portfolio = document.querySelector(`.portfolio#${portfolioId}`);
    portfolio.classList.add("active");
}

document.querySelectorAll("#tabs-row button").forEach(btn => {
    btn.addEventListener("click", () => {
        setActivePortfolioTab(btn);
    });
});
setActivePortfolioTab(document.querySelector("button.active"));