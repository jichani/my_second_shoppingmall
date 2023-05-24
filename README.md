# UMBRO 쇼핑몰 웹사이트

반응형 웹사이트를 만들기 위한 영진직업전문학교 미니 프로젝트

- 클론 코딩 사이트 : https://shop.descentekorea.co.kr/UMBRO

> _(메인 페이지)_ > ![반응형 웹페이지1](https://github.com/jichani/my_second_shoppingmall/assets/123962013/a4480636-e1fb-4a79-9ecc-b365ab26598a) > _(로그인 페이지)_ > ![로그인 페이지](https://github.com/jichani/my_second_shoppingmall/assets/123962013/e30b247f-96e2-4278-a96f-74b45feb99d7)

- Demo\_메인 : https://jichani.github.io/my_second_shoppingmall/
- Demo\_로그인: https://jichani.github.io/my_second_shoppingmall/LoginPage/index.html

### 개발 목표

> 부트스트랩의 다양한 컴포넌트와 클래스 사용 및 부트스트랩 Grid 이해.
> 미디어쿼리를 이용한 반응형 웹페이지 구축.
> 자바스크립트 이용한 반응 구현.

### 사용 기술

- HTML
- CSS
- JS
- Bootstrap
- Media Query

### Advanced Feature

> - 미디어 쿼리를 이용한 footer 개발 <br> > _(web 버전)_ > ![pc버전_footer](https://user-images.githubusercontent.com/123962013/236789283-805b1dc6-9db8-401b-853c-ca8b7363ec2c.png) > _(모바일 버전)_ <br> >![모바일버전_footer](https://user-images.githubusercontent.com/123962013/236789293-e546bffd-57f6-412e-8eaa-d5f91e819919.png)

```css
@media screen and (max-width: 48rem) {
  .first-line {
    text-align: center;
  }
  .second-line {
    padding-left: 2rem;
    padding-right: 2rem;
    border-bottom: 1px solid #999;
  }
  .third-line {
    display: block;
  }
}
```

> - 부트스트랩 Grid를 이용한 반응형 레이아웃 구축<br> > _(web 버전)_ > ![그리드_웹](https://user-images.githubusercontent.com/123962013/236790116-fc336d03-d9bc-4bb6-bf6a-be8afc44ec9e.png) > _(모바일 버전)_ <br> >![그리드_모바일](https://user-images.githubusercontent.com/123962013/236790132-3da4aa7e-a724-402f-861f-27537481c0a3.png)

```html
<div class="container">
  <div class="row row-cols-2 row-cols-md-4 g-4">
    <div class="col">
      <div class="card .h-100">
        <a href="#">
          <img src="https://images.descentekorea.co.kr/product/U/O2/UO223CRS61/620/UO223CRS61_BLK0_N01.JPG" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title brand">UMBRO</h5>
            <p class="card-text item_title">[얼리버드쿠폰]로즈팩 그래픽 업데이트 티셔츠</p>
            <p class="item_price">59,000원</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col">
      <div class="card .h-100">
        <a href="#">
          <img src="https://images.descentekorea.co.kr/product/U/O1/UO123ESA30/620/UO123ESA30_BEI0_N01.JPG" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title brand">UMBRO</h5>
            <p class="card-text item_title">TOPI (토피)</p>
            <p class="item_price">69,000원</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col">
      <div class="card .h-100">
        <a href="#">
          <img src="https://images.descentekorea.co.kr/product/U/O2/UO221CWT42/620/UO221CWT42_LVD0_N01.JPG" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title brand">UMBRO</h5>
            <p class="card-text item_title">클래식 반팔 스탠넥 아노락</p>
            <p class="item_price">79,000원</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col">
      <div class="card .h-100">
        <a href="#">
          <img src="https://images.descentekorea.co.kr/product/U/O2/UO221CJK41/620/UO221CJK41_WGR0_N01.JPG" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title brand">UMBRO</h5>
            <p class="card-text item_title">클래식 스텐넥 바람막이 웜업 자켓</p>
            <p class="item_price">139,000원</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
```

- after 이용하여 nav menu를 hover시 underline이 왼쪽에서부터 오른쪽으로 생기는 애니메이션 연출<br>

> ![호버](https://github.com/jichani/my_second_shoppingmall/assets/123962013/f22632a6-f712-4835-9f8d-e0e183ba3f6a)
> ->
> ![호버2](https://github.com/jichani/my_second_shoppingmall/assets/123962013/d941e1c0-88c3-42b6-9b9c-bae05fec246c)

```css
.navbar__menu li a {
  color: #000;
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
}
li a:hover:after {
  transform: scaleX(1);
}
li a:after {
  display: block;
  content: "";
  border-bottom: solid 2px #000;
  transform: scaleX(0);
  transition: transform 600ms ease-in-out;
}
li a:after {
  transform-origin: 0% 50%;
}
```

- toggle 버튼 구현 및 active 상태에서 x 로 변경되게 구현<br>

> ![토글 버튼 구현](https://github.com/jichani/my_second_shoppingmall/assets/123962013/e6ae2de0-9210-4850-bee8-22e70567fe41)

```javascript
const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});
```

```css
/* 843px부터 깨지기 시작해서 843px로 설정 */
@media screen and (max-width: 843px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;
  }

  .navbar__menu {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .navbar__menu li {
    width: 100%;
    text-align: center;
  }

  .navbar__icons {
    display: none;
    justify-content: center;
    width: 100%;
  }

  .navbar__toggleBtn {
    padding-top: 14px;
    display: flex;
  }

  header.slider .navbar__toggleBtn {
    padding-top: 11px;
  }

  header div.active.search {
    display: none;
    padding-top: 20px;
  }

  header.slider div.active.search {
    padding-top: 10px;
  }

  .navbar__menu.active,
  .navbar__icons.active {
    display: flex;
  }

  <-- 토글이 active시 x자로 변경되게 구현 -- > .navbar__toggleBtn i:last-child {
    display: none;
    font-size: 25px;
    padding-right: 1px;
  }

  .navbar__toggleBtn.active i:last-child {
    display: block;
  }

  .navbar__toggleBtn.active i:first-child {
    display: none;
  }
}
```

- Search 버튼 누르면 숨겨진 인풋 박스와 버튼이 나타나게 구현<br>

> ![서치버튼](https://github.com/jichani/my_second_shoppingmall/assets/123962013/6e6d558e-6d17-4cbf-b81e-5083b563b3b1)

```javascript
const searchBtn = document.querySelector(".navbar__search__Btn");
const searchContainer = document.querySelector(".search");

searchBtn.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
});
```

```css
header .navbar .navbar__search__Btn {
  color: black;
  cursor: pointer;
}

header {
  position: relative;
  transition: 0.8s;
}

header .search {
  margin-right: 40px;
  position: absolute;
  right: 0;
  z-index: 99;
  background: #ffffff;
  padding: 10px 24px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

header .search i {
  margin-left: 10px;
}

header div.search {
  display: none;
}

header div.active.search {
  display: block;
}

header .search input {
  padding: 3px 5px;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

@media screen and (max-width: 843px) {
  header .search {
    top: 0;
    padding: 18px 0px;
    background: none;
    margin-right: 80px;
    border: none;
  }
}
```

- slide 내릴 시 header가 상단에 고정되게 구현<br>

> ![헤더 상단 고정](https://github.com/jichani/my_second_shoppingmall/assets/123962013/6e504c4d-3f11-470d-93fb-64e72e56d1e1)

```javascript
var header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("slider");
  } else {
    header.classList.remove("slider");
  }
});
```

```css
header.slider {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  top: 0;
}

header.slider nav.navbar {
  padding: 0px 40px;
}

header.slider nav.navbar .navbar__logo img {
  height: 45px;
}

header.slider nav.navbar li {
  padding-top: 14px;
}

@media screen and (max-width: 843px) {
  header a.banner {
    display: none;
  }
}
```

- 로그인 페이지에서 input에 focus와 valid한 상태에서 텍스트가 위로 올라가는 애니메이션 구현<br>

![로그인 페이지](https://github.com/jichani/my_second_shoppingmall/assets/123962013/556d8d0f-0ccd-4a19-a6e5-a05243331a59)

```css
.inputbox label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1em;
  pointer-events: none;
  transition: 0.5s;
}

input:focus ~ label,
input:valid ~ label {
  top: -5px;
}
```

### 개선사항

- search 버튼을 누른 상태로 화면을 줄일 시 toggle이 나타났는데도 search 버튼이 숨겨지지 않는 문제가 있음
- 사이즈를 조정시 푸터의 글자가 깨짐.

### 참고 사이트

- 코딩 알려주는 누나 3번째 프로젝트
- Animated Login Form Using HTML & CSS : https://youtu.be/1H-vSHVOxoU
- 웹사이트 따라만들기, 반응형 헤더편 | 프론트엔드 개발자 입문편: HTML, CSS, Javascript : https://youtu.be/X91jsJyZofw
- jQuery 28 [ WAXOM JQUERY Part 1/2 ] 상단고정하기, 스크롤 애니메이션 How to Fix header Navigation, Scroll Animation : https://youtu.be/sXHPhhrQSV4
