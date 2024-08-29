function showModal(event) {
    event.preventDefault();
    if (inputCheck()) {
        document.getElementById('modal').style.display = 'flex';
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
}


function closeModal(event) {
    event.preventDefault();
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = '';
}


document.querySelector('.subscribeButton').addEventListener('click', showModal);
document.querySelector('.modalButton').addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal(event);
    }
});
