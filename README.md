# ESTsoft 부트캠프 프로젝트➰지역기반 반려묘 케어 서비스😺
## 1️⃣ 프로젝트 개요
### 🚩 목표
### 📒 기능
## 2️⃣ 요구사항정의서 📌 [피그마 링크](https://www.figma.com/design/s9RCnA6dSi3QHHeMDFHKE6/EST-%EC%98%A4%EB%A5%B4%EB%AF%B8(BE)_HTML%2FCSS%2FJS?node-id=104924-12&t=0vh0s3ZVXz8C0ZwI-0) 
  
+ 피그마를 참고하여 페이지 구현을 합니다.
+ 모바일 화면도 고려하여 페이지 구현을 합니다.
+ 스크롤시 헤더가 고정되게 합니다. (단, 처음에는 고정된 상태가 아닙니다.)
+ 스크롤 탑 버튼을 구현합니다.
  + 스크롤 탑 버튼은 스크롤시 나타납니다.
  + 스크롤 탑 버튼은 푸터 아래로 내려가지 않습니다.
  + 스크롤 탑 버튼을 누르면 스크롤이 최상단으로 올라갑니다. (단, 부드럽게 올라가야 합니다.)
+ 구독하기 모달창
  + 이메일을 입력하고 `Subscribe` 버튼을 클릭하면 모달창이 나타납니다.
  + 이메일 유효성 검사를 진행해야 합니다. (값이 들어가지 않거나 이메일 형식이 유효하지 않으면 alert 창으로 경고 문구가 떠야합니다.)
  + 이메일이 잘 입력되었다면 모달창이 뜹니다. 이때 모달창의 `OK! I love HODU` 버튼을 클릭하면 form이 제출되고 모달창이 닫힙니다.
   
## 3️⃣ 화면설계서
### 🖥️ WEB
### 📱 MOBILE


## 4️⃣ 클래스 명세서
| 카테고리                        | 항목                          | 설명                                    |
|---------------------------------|-------------------------------|---------------------------------------|
| **헤더(header)**                 | `header-container`            | 헤더의 기본 컨테이너로, 로고와 내비게이션을 포함       |
|                                 | `header-nav-container`        | 웹 및 모바일 내비게이션을 포함한 컨테이너       |
|                                 | `header-nav-mobile-container` | 웹 버전의 내비게이션을 포함                   |
|                                 | `header-nav-mobile-list`      | 모바일 버전의 내비게이션 메뉴에서 메뉴 목록       |
|                                 | `header-nav-web-container`    | 모바일 버전의 내비게이션을 포함               |
|                                 | `header-sticky`               | 헤더 고정                                  |
|                                 | `downloadButtonHeader`        | 웹 내비게이션에서 다운로드 기능을 제공하는 버튼  |
|                                 | `downloadButtonMenu`          | 모바일 내비게이션에서 다운로드 기능을 제공    |
|                                 | `menuOpenButton`              | 모바일 메뉴를 여는 버튼                    |
|                                 | `menuCloseButton`             | 모바일 메뉴를 닫는 버튼                    |
| **섹션 1**                      | `home-main-top`               | 홈페이지 메인 상단 영역                   |
|                                 | `home-main-top-desc`          | 메인 상단에서 사용되는 텍스트와 이미지를 포함한 레이아웃 |
|                                 | `home-main-top-text`          | 메인 상단의 텍스트 배치                     |
|                                 | `home-main-top-image`         | 메인 상단 이미지 배치                     |
|                                 | `downloadButtonMain`          | 페이지 상단에서 다운로드 기능을 제공하는 버튼  |
| **섹션 2**                      | `home-main-information`       | 홈페이지 정보를 제공하는 영역              |
|                                 | `home-main-information-desc`  | 정보 영역에서 사용되는 텍스트와 이미지를 포함한 레이아웃 |
|                                 | `home-main-information-text`  | 정보 영역의 텍스트 배치                    |
| **섹션 3**                      | `home-main-explanation`       | 홈페이지의 정보에 대한 설명을 제공하는 영역     |
|                                 | `home-main-explanation-desc`  | 설명 영역에서 사용되는 텍스트 레이아웃        |
| **섹션 4**                      | `home-main-gallery`           | 갤러리 형태의 이미지를 포함하는 영역        |
|                                 | `home-main-gallery-image`     | 갤러리의 개별 이미지                      |
| **섹션 5**                      | `home-main-gallery-more`      | 갤러리의 추가 콘텐츠를 표시하는 영역       |
|                                 | `showMoreButton`              | 더 많은 콘텐츠를 로드하는 버튼            |
| **섹션 6**                      | `home-main-map`               | 지도 관련 콘텐츠를 포함하는 영역           |
|                                 | `home-main-map-text`          | 약도 텍스트 배치                          |
|                                 | `map-wrap`                    | 지도를 포함한 영역                        |
|                                 | `map-style`                   | 지도의 스타일 및 크기를 설정              |
|                                 | `radius_border`              | 지도 테두리 스타일                        |
|                                 | `map_icon_plus`              | 지도 확대 아이콘                          |
|                                 | `map_icon_minus`             | 지도 축소 아이콘                          |
|                                 | `map_icon_reset`             | 지도 마커 초기화 아이콘                    |
|                                 | `map_icon_level`             | 지도 확대 및 축소 레벨 아이콘              |
|                                 | `custom_zoomcontrol`         | 지도 줌(확대, 축소) 컨트롤                |
|                                 | `custom_mapcontrol`          | 지도 확대 및 축소 레벨 컨트롤              |
|                                 | `custom_markercontrol`       | 지도 마커 초기화 컨트롤                    |
|                                 | `custom_typecontrol`         | 지도 타입(roadmap, skyview 등) 컨트롤       |
| **섹션 7**                      | `home-main-subscribe`         | 사용자 구독 관련 콘텐츠를 포함하는 영역     |
|                                 | `home-main-subscribe-desc`    | 구독 관련 이미지와 텍스트를 포함한 레이아웃   |
|                                 | `home-main-subscribe-text`    | 구독 관련 텍스트 배치                     |
|                                 | `subscribe-form-container`    | 구독 폼을 감싸는 영역                    |
|                                 | `subscibe-form`               | 구독 폼 정의                             |
|                                 | `subscribeButton`            | 구독하기 버튼                            |
| **푸터(footer)**                | `footer-web-container`        | 웹 버전의 푸터 컨텐츠를 포함하는 영역        |
|                                 | `footer-mobile-container`     | 모바일 버전의 푸터 컨텐츠를 포함하는 영역    |
|                                 | `footer-nav-mobile-container` | 모바일 화면에서 보여지는 내비게이션 메뉴를 포함 |
|                                 | `footer-nav-web-container`    | 웹 화면에서 보여지는 내비게이션 메뉴를 포함하는 컨테이너 |
|                                 | `footer-nav-web-list`         | 웹 버전의 푸터 내비게이션 링크나 항목의 스타일 |
|                                 | `footer-nav-mobile-list`      | 모바일 버전의 푸터 내비게이션 링크나 항목의 스타일 |
|                                 | `sns_icon_wrap`              | 소셜 미디어 아이콘을 감싸는 컨테이너        |
|                                 | `sns_icon_image`             | 소셜 미디어 아이콘 이미지를 스타일링       |
| **기타**                        | `a11y-hidden`                 | 화면에 보이지 않지만 접근성 도구에 의해 읽힐 수 있는 요소를 숨김 |
|                                 | `hidden`                     | 텍스트 줄바꿈 시 표시 여부를 조정         |
|                                 | `container`                  | 여러 섹션에서 사용되는 공통 컨테이너 클래스로, 전체적인 레이아웃을 설정 |
| **폰트**                        | `font-size-14`                | 폰트 크기를 14픽셀로 설정                 |
|                                 | `font-size-16`                | 폰트 크기를 16픽셀로 설정                 |
|                                 | `font-size-responsive`        | 화면 크기에 따라 폰트 크기를 조정         |
|                                 | `text-color-white`            | 텍스트 색상을 흰색으로 설정                |
|                                 | `text-color-yellow`           | 텍스트 색상을 노란색으로 설정              |
|                                 | `text-color-orange`           | 텍스트 색상을 주황색으로 설정             |
| **모달**                        | `scrollTopButton`             | 페이지 상단으로 스크롤하는 버튼을 스타일링  |
|                                 | `modal-container`            | 모달 창의 기본 스타일을 설정              |
|                                 | `modal-content-wrap`         | 모달 창의 내부 콘텐츠를 스타일링          |
|                                 | `modal-image`                | 모달 창 내에서 고양이 이미지를 스타일링     |
|                                 | `modal-text`                 | 모달 창 내의 감사 메시지를 스타일링        |
|                                 | `modalButton`                | 모달 창의 버튼을 스타일링                |
| **로고**                        | `header_logo`                 | 헤더에 표시되는 로고 이미지               |
|                                 | `footer_logo`                 | 푸터에 표시되는 로고 이미지               |


## 5️⃣ 프로젝트 구조
```
📦Landing-Page
┣ 📜index.html
┣ 📂src
┃ ┣ 📂css
┃ ┃ ┣ 📂mobile
┃ ┃ ┣ 🎨base.css
┃ ┃ ┣ 🎨font.css
┃ ┃ ┣ 🎨footer.css
┃ ┃ ┣ 🎨header.css
┃ ┃ ┣ 🎨main-explanation.css
┃ ┃ ┣ 🎨main-gallery.css
┃ ┃ ┣ 🎨main-gallery-more.css
┃ ┃ ┣ 🎨main-information.css
┃ ┃ ┣ 🎨main-map.css
┃ ┃ ┣ 🎨main-subscribe.css
┃ ┃ ┣ 🎨main-top.css
┃ ┃ ┣ 🎨modal.css
┃ ┃ ┣ 🎨scroll.css
┃ ┃ ┣ 📂web
┃ ┃ ┣ 🎨base.css
┃ ┃ ┣ 🎨font.css
┃ ┃ ┣ 🎨footer.css
┃ ┃ ┣ 🎨header.css
┃ ┃ ┣ 🎨main-explanation.css
┃ ┃ ┣ 🎨main-gallery.css
┃ ┃ ┣ 🎨main-gallery-more.css
┃ ┃ ┣ 🎨main-information.css
┃ ┃ ┣ 🎨main-map.css
┃ ┃ ┣ 🎨main-subscribe.css
┃ ┃ ┣ 🎨main-top.css
┃ ┃ ┣ 🎨modal.css
┃ ┃ ┣ 🎨scroll.css
┃ ┣ 📂js
┃ ┣ 📜email-validation.js
┃ ┣ 📜map.js
┃ ┣ 📜modal-handler.js
┃ ┣ 📜scroll-top.js
┃ ┣ 📜side-menu.js
┃ ┣ 📜sticy-header.js
┃ ┣ 📂image
┃ ┣ 🖼️arrow-right.svg
┃ ┣ 🖼️close-menu.svg
┃ ┣ 🖼️facebook.svg
┃ ┣ 🖼️img_0.svg
┃ ┣ 🖼️img_1.svg
┃ ┣ 🖼️img_2.svg
┃ ┣ 🖼️img_3.svg
┃ ┣ 🖼️img_4.svg
┃ ┣ 🖼️img_5.svg
┃ ┣ 🖼️img_6.svg
┃ ┣ 🖼️img_7.svg
┃ ┣ 🖼️instagram.svg
┃ ┣ 🖼️level.png
┃ ┣ 🖼️logo.svg
┃ ┣ 🖼️mail.svg
┃ ┣ 🖼️main-cat.svg
┃ ┣ 🖼️menu.svg
┃ ┣ 🖼️minus.png
┃ ┣ 🖼️modal-background.svg
┃ ┣ 🖼️modal-background-mobile.svg
┃ ┣ 🖼️modal-cat.svg
┃ ┣ 🖼️plus.png
┃ ┣ 🖼️reset.png
┃ ┣ 🖼️scroll-btn-N.svg
┃ ┣ 🖼️scroll-btn-Y.svg
┃ ┣ 🖼️youtube.svg
┣ 📜.gitignore
┗ 📜README.md
```
## 6️⃣ 개발환경 및 배포 URL
### ⚙️ 개발환경
+ **Integrated Development Environment(IDE)**
  + Intellij IDEA 2024.1.2
+ **Java Development Kit(JDK)**
  + 22.0.1
+ **Deployment Environment**
  + GitHub Pages
+ **Tech Stack**
  + HTML, CSS, JAVAScript

### 🔧 배포 URL
+ https://a29cute.github.io/Landing-Page/

### 🛠️ URL 구조
| App | URL | HTML File Name | Note |
| --- | --- | --- |--- |
| landing-page |'/' | index.html | 홈화면 | 

## 7️⃣ 개발일정
+ **🗓️ DAY1(2024.08.19)**
  + 랜딩페이지 구조 분석
  + 랜딩페이지 HTML 작성

+ **🗓️ DAY2(2024.08.20)**
  + 헤더 작업 완료
  + 메인 페이지 웹 CSS 4of7 진행 완료
  + 미디어 쿼리로 모바일 버전 초기 작업
  + 헤더 고정 및 스크롤 탑 버튼 구현

+ **🗓️ DAY3(2024.08.21)**
  + 메인 페이지 웹 및 모바일 버전 CSS 7of7 진행 완료
  + 헤더 사이드 메뉴바
  + 푸터 CSS 작업 완료
  + `br` 태그로 모바일 줄바꿈 조정
  + 카카오 API - 마커, 맵 레벨 초기화, 아이콘 변경
  + 구독하기 버튼의 위치 조정 (웹 및 모바일)
  + 이메일 유효성 검사 및 모달창 표시

+ **🗓️ DAY4(2024.08.22)**
  + 카카오 지도 API 키값 숨기기
  + 이메일 입력 창 디자인 개선

+ **🗓️ DAY5(2024.08.23)**
  + HTML, CSS에서 불필요한 요소 및 중복 코드 정리

+ **🗓️ DAY6(2024.08.26)**
  + 클래스 명세서 작성
  + 실제 코드 내 클래스명 변경

+ **🗓️ DAY7(2024.08.27)**
  + 클래스 명세서를 바탕으로 스타일시트 분리
  + 랜딩 페이지 배포
  + 프로젝트 구조 작성
  + README 페이지 작성

## 8️⃣ 에러사항 및 해결방안
+ **⚠️ 화면 로드 느림**
  + 이미지 형식 PNG → SVG로 최적화(느려짐 감소)
+ **⚠️ 반응형 화면 오작동**
  + 컨테이너 margin, max-width 적용하여 해결
+ **⚠️ 이미지 하단 잘림**
  + home-main-top 컨테이너에 overflow 속성으로 해결
+ **⚠️ 모달창 버튼 클릭 시 화면 이동**
  + preventDefault 메서드로 해결
+ **⚠️ 웹 및 모바일 폼 배치 에러**
  + relative, absolute로 해결
+ **⚠️ API 키값 문제**
  + 키 파일 gitignore로 인한 카카오 지도 미노출 → 프론트에서는 키값 숨기지 않기로 변경(추후 백엔드 DB로 숨길 예정)

## 9️⃣ 프로젝트 회고
## 🔟 참고문헌 및 자료
