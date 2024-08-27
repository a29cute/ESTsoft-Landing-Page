# ESTsoft 부트캠프 프로젝트➰지역기반 반려묘 케어 서비스😺
## 1. 프로젝트 개요
### 1-1. 목표

### 1-2. 기능
## 2. 요구사항정의서
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
   
## 3. 화면설계서
### 3-1. WEB
### 3-2. MOBILE
## 4. 클래스 명세서
## 5. 프로젝트 구조
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
## 6. 개발환경 및 배포 URL
## 7. 개발일정
## 8. 참고문헌 및 자료
