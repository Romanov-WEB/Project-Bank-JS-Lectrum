// Core
import Joi from 'joi';

export const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } })
        .message('Введите корректно почту')
        .required(),
    password: Joi.string().min(8)
        .message('Минимальная длина пароля 8 символов')
        .required(),
});
