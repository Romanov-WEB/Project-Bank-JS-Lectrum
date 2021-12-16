// Core
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

// API
import { api } from '../../../api';

// Helpers
import {
    generateCard, handleCardClick,
} from './helpers';
import { setupMenuCads, upperCaseFirstLetter } from '../../../common';

// Elements
import {
    cardsWrapper, currentMonthWrapper, currentMonthDownloadWrapper, menuCardsWrapper,
} from './elements';

// Other
import { displayTransactions } from './displayTransactions';

(async () => {
    const formattedDate = `${format(new Date(), 'LLLL yyyy', { locale: ru })}`;
    currentMonthWrapper.innerHTML = upperCaseFirstLetter(formattedDate);
    currentMonthDownloadWrapper.innerHTML = upperCaseFirstLetter(formattedDate);

    const data = await api.cards.read();
    const cardsHTML = data.map((item, index) => generateCard(index, item)).join('');
    setupMenuCads(menuCardsWrapper, data);

    cardsWrapper.innerHTML = null;
    cardsWrapper.insertAdjacentHTML('afterbegin', cardsHTML);

    handleCardClick();

    if (!data.length) {
        return;
    }

    await displayTransactions(data[0].card);
})();
