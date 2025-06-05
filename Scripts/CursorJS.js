const customCursor = document.getElementById("custom-cursor");

    const offsetX = -8;
    const offsetY = -25;

    document.addEventListener("mousemove", (e) => {
    customCursor.style.left = (e.clientX - offsetX) + "px";
    customCursor.style.top = (e.clientY - offsetY) + "px";
});