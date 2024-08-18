    function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const emailValue = emailInput.value.trim(); // 입력된 이메일 값 가져오기

    // 이메일 필드가 비어있거나 유효하지 않으면 경고창 띄우기
    if (emailValue === '' || !validateEmailFormat(emailValue)) {
    alert('유효한 이메일 주소를 입력해주세요.'); // 경고 메시지
    return false; // 폼 제출 방지
}

    return true; // 폼 제출 허용
}

    function validateEmailFormat(email) {
    // 간단한 이메일 형식 정규 표현식
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); // 이메일 형식이 맞으면 true, 아니면 false
}