// Styles
import '../../../css/style.scss';

// Elements
import {
    login, loginLink, registration, registrationLink,
} from './elements';

// Other
import './checkToken';
import './login';
import './registration';

loginLink.addEventListener('click', (event) => {
    event.preventDefault();

    login.style.display = 'none';
    registration.style.display = 'block';
});

registrationLink.addEventListener('click', (event) => {
    event.preventDefault();

    login.style.display = 'block';
    registration.style.display = 'none';
});
