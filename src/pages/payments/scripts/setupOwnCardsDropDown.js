// Elements
import { ownCardsDropDown, paySystem } from './elements';

ownCardsDropDown.addEventListener('click', (event) => {
    const { currentTarget } = event;

    currentTarget.classList.toggle('dropdown--open');
    const element = currentTarget.querySelector('.dropdown__toggle');
    const inputImage = currentTarget.querySelector('.dropdown__toggle > img');

    element?.classList.toggle('active');

    const { parentNode } = event.target;
    const p = parentNode.querySelector('p.form__input');
    const img = parentNode.querySelector('img');

    if (p) {
        paySystem.value = p.textContent;
        inputImage.src = img.src;
    }
});
