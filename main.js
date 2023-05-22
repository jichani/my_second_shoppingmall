var header = document.querySelector('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add('slider');
    } else {
        header.classList.remove('slider');
    }
});