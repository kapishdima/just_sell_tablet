const languageElement = document.querySelector('.language');
let isLeft = false;

languageElement.addEventListener('click', () => {
    const currentLeft = isLeft ? -11 : -1;
    languageElement.style.left = `${currentLeft}vw`;
    isLeft = !isLeft;
});