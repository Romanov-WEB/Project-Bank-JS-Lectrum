// Elements
import {
    cardDropDown, cardDropDownItems, cardDropDownInput, cardDropDownImage, cardPaySystem,
} from './elements';

// Storage
import { storage } from './storage';

// eslint-disable-next-line consistent-return
cardDropDown.addEventListener('click', (event) => {
    const attributeKey = 'data-card';
    const { currentTarget } = event;

    currentTarget.classList.toggle('dropdown--open');
    cardDropDownItems.classList.toggle('active');

    const p = event.target.parentNode.querySelector('p.form__input');
    const img = event.target.parentNode.querySelector('img.paysystem__icon');

    if (!p) {
        return null;
    }

    const cardNum = p.getAttribute('data-card-num');
    const card = p.getAttribute(attributeKey);

    storage.set('card', cardNum);
    cardDropDownInput.value = p.innerHTML;
    cardDropDownInput.setAttribute(attributeKey, card);
    cardPaySystem.setAttribute('data-card-num', cardNum);
    cardDropDownImage.src = img.src;

    // generateOwnCardTransferList();
});
