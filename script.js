document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const inputs = form.querySelectorAll('input');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', (e) => {
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                input.classList.add('invalid');
                valid = false;
            } else {
                input.classList.remove('invalid');
            }
        });

        if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
            password.classList.add('invalid');
            confirmPassword.classList.add('invalid');
            valid = false;
        } else {
            password.classList.remove('invalid');
            confirmPassword.classList.remove('invalid');
        }

        if (!valid) {
            e.preventDefault();
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('invalid');
        });
    });
});
