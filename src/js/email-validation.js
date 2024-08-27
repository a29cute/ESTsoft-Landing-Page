// 이메일 유효성 검사 함수
function validateEmail(email) {
    // 이메일 형식을 검사하는 정규 표현식
    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return pattern.test(email);
}

// 입력값을 검증하는 함수
function inputCheck() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim(); // 양쪽 공백 제거
    if (!email || !validateEmail(email)) { // 빈 문자열이거나 이메일 형식이 유효하지 않은 경우
        alert('입력란이 공백이거나 이메일 주소가 유효하지 않습니다.');
        return false;
    }
    return true;
}