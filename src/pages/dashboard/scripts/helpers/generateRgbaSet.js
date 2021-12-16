import { generateRandomNumber } from './generateRandomNumber';

export const generateRgbaSet = (opacity = '0.2') => {
    const numbers = `${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)}`;
    const mainColor = `rgba(${numbers}, ${opacity})`;
    const secondColor = `rgba(${numbers}, 1)`;

    return {
        mainColor,
        secondColor,
    };
};
