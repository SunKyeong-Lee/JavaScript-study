// 바닐라 자바스크립트 : 순수 자바스크립트로만 작업
// JQuery(자바스크립트 라이브러리)와 함게 사용하는 경우가 많다.
// 외부  소스를 활용하기도 한다.
const title = document.querySelector("#title");

// 클래스를 통째로 바꿈
title.className = "on";
// classList를 사용하면 add, remove를 통해서 
// 원하는 클래스 이름만 변경 가능
title.classList.add = "off";