document.querySelector('form').addEventListener('submit', function (e) {
    const mobile = document.getElementById('mobile').value;
    const pin = document.getElementById('pin').value;
    if (mobile.length < 10 || mobile.length > 11) {
        e.preventDefault();
        alert('Enter a valid mobile number (10-11 digits).');
        return;
    }
    if (pin.length !== 4) {
        e.preventDefault();
        alert('PIN must be 4 digits.');
        return;
    }
});