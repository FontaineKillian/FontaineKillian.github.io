const infoImage = document.getElementById('Info');
    const verticalMenu = document.querySelector('.vertical-menu');

    infoImage.style.cursor = 'pointer'; // pour montrer que c'est cliquable

    infoImage.addEventListener('click', () => {
        if (verticalMenu.style.display === 'none' || verticalMenu.style.display === '') {
            verticalMenu.style.display = 'block';
        } else {
            verticalMenu.style.display = 'none';
        }
});