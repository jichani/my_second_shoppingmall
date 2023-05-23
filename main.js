var header = document.querySelector('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add('slider');
    } else {
        header.classList.remove('slider');
    }
});

// 토글 메뉴 클릭했을 때
const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
    toggleBtn.classList.toggle("active");
});

// 검색 메뉴 클릭했을 때
const searchBtn = document.querySelector(".navbar__search__Btn")
const searchContainer = document.querySelector(".search");

searchBtn.addEventListener("click", () => {
    searchContainer.classList.toggle("active")
})