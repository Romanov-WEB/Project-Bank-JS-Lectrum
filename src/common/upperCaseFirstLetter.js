export const upperCaseFirstLetter = (str) => {
    if (typeof str !== 'string') {
        throw new Error('параметр должен быть строкой');
    }

    if (str.trim() === '') {
        return str;
    }

    const firstLetter = str.charAt(0).toUpperCase();
    const lastLetters = str.slice(1);

    return `${firstLetter}${lastLetters}`;
};
