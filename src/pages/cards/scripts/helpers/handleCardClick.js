// Elements
import { getCardInfoItems } from '../elements';
import { displayTransactions } from '../displayTransactions';

export const handleCardClick = () => {
    const cardItems = getCardInfoItems();
    let current = null;

    cardItems.forEach((el) => {
        el.addEventListener('click', async (event) => {
            cardItems.forEach((item) => {
                item.classList.add('collapsed');
            });

            const { currentTarget } = event;

            currentTarget.classList.remove('collapsed');
            const cardNumber = currentTarget.getAttribute('data-card');

            if (current !== cardNumber) {
                await displayTransactions(cardNumber);
                current = cardNumber;
            }
        });
    });
};
