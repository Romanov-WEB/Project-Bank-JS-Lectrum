const utilityAddress = document.getElementById('utilityAddress');
const utilityService = document.getElementById('utilityService');
const utilityInput = utilityAddress.querySelector('input');
const utilityServiceInput = utilityService.querySelector('input');

utilityAddress.addEventListener('click', (event) => {
    const { currentTarget } = event;

    currentTarget.classList.toggle('dropdown--open');
    const element = currentTarget.querySelector('.dropdown__toggle');

    element?.classList.toggle('active');

    const p = event.target.parentNode.querySelector('p.form__input');

    if (p) {
        utilityInput.value = p.textContent;
    }
});

utilityService.addEventListener('click', (event) => {
    const { currentTarget } = event;

    currentTarget.classList.toggle('dropdown--open');
    const element = currentTarget.querySelector('.dropdown__toggle');

    element?.classList.toggle('active');

    const p = event.target.parentNode.querySelector('p.form__input');

    if (p) {
        utilityServiceInput.value = p.textContent;
    }
});
