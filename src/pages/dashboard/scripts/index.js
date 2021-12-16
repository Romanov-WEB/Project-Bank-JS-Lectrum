// Styles
import '../../../css/style.scss';

// API
import { api } from '../../../api';

// Other
import './loadCards';
import './setupMenu';
import '../../../common/socket';
import '../../../common/setupProfile';

// Helpers
import { buildIncomeOutcomeChart } from './buildIncomeOutcomeChart';
import { loadCardTransactions } from './helpers';
import { setupMenuCads } from '../../../common';

// Elements
import { downloadPlaceholder, incomeOutcome, menuCardsWrapper } from './elements';

(async () => {
    const data = await api.cards.read();
    const transactions = await loadCardTransactions(data);
    buildIncomeOutcomeChart(transactions, data);
    await setupMenuCads(menuCardsWrapper, data);

    downloadPlaceholder.style.display = 'none';
    incomeOutcome.style.display = 'block';
})();
