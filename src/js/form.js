document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('paymentForm');
    const formFields = document.querySelectorAll('.formField');
    const submitButton = document.getElementById('submitButton');

    formFields.forEach(function (field) {
        field.addEventListener('input', function () {
            let allFieldsFilled = true;
            formFields.forEach(function (field) {
                if (field.value.trim() === '') {
                    allFieldsFilled = false;
                }
            });

            if (allFieldsFilled) {
                submitButton.classList.add('active');
            } else {
                submitButton.classList.remove('active');
            }
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Дополнительная проверка формы или отправка данных
    });
});
