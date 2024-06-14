document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('.submit');
    const clearButton = document.querySelector('.clear');
    const resultParagraph = document.getElementById('result');

    submitButton.addEventListener('click', function () {
        const birthDate = new Date(document.querySelectorAll('.age-input')[0].value);
        const presentDate = new Date(document.querySelectorAll('.age-input')[1].value);

        if (isNaN(birthDate) || isNaN(presentDate)) {
            resultParagraph.textContent = 'Please enter valid dates.';
            return;
        }

        let years = presentDate.getFullYear() - birthDate.getFullYear();
        let months = presentDate.getMonth() - birthDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        } else if (months === 0 && presentDate.getDate() < birthDate.getDate()) {
            years--;
            months = 11;
        }

        resultParagraph.textContent = `Your age is: ${years} years and ${months} months`;
    });

    clearButton.addEventListener('click', function () {
        document.querySelectorAll('.age-input')[0].value = '';
        document.querySelectorAll('.age-input')[1].value = '';
        resultParagraph.textContent = '';
    });
});
