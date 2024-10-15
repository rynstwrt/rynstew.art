const EMAIL = "ryn@rynstew.art";
const POPUP_DURATION_MS = 1000;


const emailCopiedPopup = document.querySelector("#email-copied-popup");


document.querySelector("#email-button").addEventListener("click", () =>
{
    if (!emailCopiedPopup.classList.contains("hidden"))
        return;

    navigator.clipboard.writeText(EMAIL).then(() =>
    {
        emailCopiedPopup.classList.remove("hidden");

        setTimeout(() => emailCopiedPopup.classList.add("hidden"), POPUP_DURATION_MS);
    });
});