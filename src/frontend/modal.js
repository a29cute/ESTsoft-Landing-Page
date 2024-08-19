function showModal() {
    const email = document.getElementById('emailInput').value;
    if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    document.getElementById('modal').style.display = 'block';
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function submitForm() {
    document.getElementById('subscribeForm').submit();
    document.getElementById('modal').style.display = 'none';
}