# UMBRO 쇼핑몰 웹사이트 
부트스트랩을 이용한 반응형 쇼핑몰 웹페이지를 구축. 
![이미지_모음](https://user-images.githubusercontent.com/123962013/236788418-ae8574f6-15eb-484f-98de-d300abd8e9a3.png)

* Demo: https://jichani.github.io/my_second_shoppingmall/

### 개발 목표 
부트스트랩의 다양한 컴포넌트와 클래스 사용 및 부트스트랩 Grid 이해. 미디어쿼리를 이용한 반응형 웹페이지 구축
### 사용 기술
* HTML
* CSS
* Bootstrap
* Media Query
### Advanced Feature
* 미디어 쿼리를 이용한 footer 개발 <br>
 _(web 버전)_
![pc버전_footer](https://user-images.githubusercontent.com/123962013/236789283-805b1dc6-9db8-401b-853c-ca8b7363ec2c.png)
 _(모바일 버전)_ <br>
![모바일버전_footer](https://user-images.githubusercontent.com/123962013/236789293-e546bffd-57f6-412e-8eaa-d5f91e819919.png)
```css=
@media screen and (max-width:48rem) {
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
* 부트스트랩 Grid를 이용한 반응형 레이아웃 구축<br>
 _(web 버전)_
![그리드_웹](https://user-images.githubusercontent.com/123962013/236790116-fc336d03-d9bc-4bb6-bf6a-be8afc44ec9e.png)
 _(모바일 버전)_ <br>
![그리드_모바일](https://user-images.githubusercontent.com/123962013/236790132-3da4aa7e-a724-402f-861f-27537481c0a3.png)
```html=
 <div class="container">
    <div class="row row-cols-2 row-cols-md-4 g-4">
      <div class="col">
        <div class="card .h-100">
          <a href="#">
            <img src="https://images.descentekorea.co.kr/product/U/O2/UO223CRS61/620/UO223CRS61_BLK0_N01.JPG"
              class="card-img-top" alt="...">
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
            <img src="https://images.descentekorea.co.kr/product/U/O1/UO123ESA30/620/UO123ESA30_BEI0_N01.JPG"
              class="card-img-top" alt="...">
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
            <img src="https://images.descentekorea.co.kr/product/U/O2/UO221CWT42/620/UO221CWT42_LVD0_N01.JPG"
              class="card-img-top" alt="...">
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
            <img src="https://images.descentekorea.co.kr/product/U/O2/UO221CJK41/620/UO221CJK41_WGR0_N01.JPG"
              class="card-img-top" alt="...">
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

* 부트스트랩에서 제공하는 클래스들을 사용해 CSS 코드의 불필요한 중복을 없애는 연습을 함


### 개선사항
* 각각 사진에 a 태그 넣기
* 이미지 로딩 속도 해결 필요

### 참고 : 코딩 알려주는 누나 HTML/CSS 3번째 프로젝트


