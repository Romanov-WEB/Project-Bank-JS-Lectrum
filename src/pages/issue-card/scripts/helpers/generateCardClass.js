export const generateCardClass = ({ id, title, checked }) => {
    return `
        <div class="radio__button">
            <input type="radio" name="cardClass" id="${id}" ${ checked ? 'checked' : ''}>
            <label for="${id}">${title}</label>
            <div class="select__back"></div>
        </div>`;
};
