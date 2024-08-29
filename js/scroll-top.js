document.addEventListener('DOMContentLoaded', () => {
    const scrollTopButton = document.getElementById('scrollTopButton');

    // 스크롤 값 100px이 넘어가면 버튼이 보이도록 활성화(초기에는 비활성화)
    const checkActive = () => {
        scrollTopButton.classList.toggle('active', window.scrollY > 100);
    };

    window.addEventListener('scroll', checkActive);
    // 스크롤탑 버튼 클릭시 최상단 이동
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });// 스크롤 애니메이션 처리
    });

    checkActive();
});
