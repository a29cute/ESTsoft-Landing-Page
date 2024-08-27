// 모달을 표시하는 함수
function showModal(event) {
    event.preventDefault(); // 기본 동작을 방지
    if (inputCheck()) { // 입력값이 유효한 경우
        document.getElementById('modal').style.display = 'flex'; // 모달 표시
    }
}

// 모달을 닫는 함수
function closeModal(event) {
    event.preventDefault(); // 기본 동작을 방지
    document.getElementById('modal').style.display = 'none'; // 모달 숨기기
}

// 이벤트 리스너를 설정
document.querySelector('.subscribeButton').addEventListener('click', showModal);
document.querySelector('.modalButton').addEventListener('click', closeModal);
