document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    audio.volume = 0.05; // Volume bas
    // Tente de jouer le son si permis
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // Rejoue dès qu’il y a interaction
            document.addEventListener("click", () => {
                audio.play();
            }, { once: true });
        });
    }
});