// Elements
import { formSelect } from './elements';

// Other
import { switchFrom } from './switchFrom';

formSelect.addEventListener('click', (event) => {
    const { currentTarget } = event;

    const input = currentTarget.querySelector('input[name=paymentType]:checked');

    if (input) {
        switchFrom(input.id);
    }
});
