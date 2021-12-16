// Elements
import {
    cardTypeDropdown,
    cardTypeDropDownList,
    cardTypeDropdownValue,
    cardTypeDropdownImg,
    cardClasses,
} from './elements';

// Data
import { visaClasses, masterCardClasses } from './data';

// Helpers
import { generateCardClass } from './helpers/generateCardClass';

const visaClassesHTML = visaClasses?.map((item) => generateCardClass(item)).join('');
const masterCardClassesHTML = masterCardClasses?.map((item) => generateCardClass(item)).join('');

cardTypeDropdown?.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('dropdown--open');

    const element = event.currentTarget.querySelector('.dropdown__toggle');

    if (!element) {
        throw new Error('не удалось найти нужный элемент');
    }

    element.classList.toggle('active');
});

cardTypeDropDownList?.addEventListener('click', (event) => {
    const attributeName = 'data-type';
    const isListItem = event.target.parentNode.classList.contains('dropdown__list__item');

    if (isListItem) {
        const img = event.target.parentNode.querySelector('img.paysystem__icon');
        const p = event.target.parentNode.querySelector('p.form__input');

        if (!img || !p) {
            throw new Error('не удалось найти нужные элементы');
        }
        const cardType = p.getAttribute(attributeName);

        cardTypeDropdownValue.value = p.textContent;
        cardTypeDropdownImg.src = img.src;
        cardTypeDropdownValue.setAttribute(attributeName, cardType);
        cardClasses.innerHTML = null;

        switch (p.textContent) {
            case 'Виза': {
                cardClasses.insertAdjacentHTML('afterbegin', visaClassesHTML);

                break;
            }
            case 'Mastercard': {
                cardClasses.insertAdjacentHTML('afterbegin', masterCardClassesHTML);

                break;
            }
            default: {
                throw new Error('неизвестный тип карты');
            }
        }
    }
});
