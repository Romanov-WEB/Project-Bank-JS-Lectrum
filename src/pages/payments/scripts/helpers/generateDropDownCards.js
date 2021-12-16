export const generateDropDownCards = (data) => {
    const { system, card } = data;

    return `
        <div class="dropdown__list__item">
            <img src="img/icon/${system === 'visa' ? 'visa-icon.svg' : 'mastercard-icon.svg'}" class="paysystem__icon visa__icon" alt="${system}">
            <p data-card-num="${card}" data-card="${system}" class="form__input">${system === 'visa' ? 'Виза' : 'Mastercard'}</p>
        </div>`;
};
