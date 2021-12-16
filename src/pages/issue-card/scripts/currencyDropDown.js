// Elements
import {
    currencyDropDown,
    currencyDropDownList,
    currencyDropdownValue,
} from './elements';

currencyDropDown?.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('dropdown--open');

    const element = event.currentTarget.querySelector('.dropdown__toggle');

    if (!element) {
        throw new Error('не удалось найти нужный элемент');
    }

    element.classList.toggle('active');
});

currencyDropDownList?.addEventListener('click', (event) => {
    const attributeName = 'data-cur';
    const isListItem = event.target.parentNode.classList.contains('dropdown__list__item');

    if (isListItem) {
        const p = event.target.parentNode.querySelector('p.form__input');
        const text = p.getAttribute(attributeName);

        currencyDropdownValue.value = p.textContent;
        currencyDropdownValue.setAttribute(attributeName, text);
    }
});
