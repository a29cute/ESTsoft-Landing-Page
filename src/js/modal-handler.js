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

// 구독을 확인하고 폼을 제출하는 함수
function confirmSubscription(event) {
    event.preventDefault(); // 기본 동작을 방지
    document.querySelector('.form-container').submit(); // 폼 제출
    closeModal(event); // 모달 닫기
}

// 이벤트 리스너를 설정
document.querySelector('.subscribeButton').addEventListener('click', showModal);
document.querySelector('.modalButton').addEventListener('click', closeModal);
document.getElementById('modalConfirmButton').addEventListener('click', confirmSubscription);
