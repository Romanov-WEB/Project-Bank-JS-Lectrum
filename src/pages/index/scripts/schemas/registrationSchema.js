// Core
import Joi from 'joi';
export const registrationSchema = Joi.object({
    name: Joi.string().min(8).message('Минимальная длина имени и фамилии 8 символов')
        .required(),
    email: Joi.string().email({ tlds: { allow: false } })
        .message('Введите корректно почту')
        .required(),
    phone: Joi.string().pattern(new RegExp('^\\+[0-9]{12,14}$')).message('Введите телефон в формате +380975556677'),
    password: Joi.string().min(8)
        .message('Минимальная длина пароля 8 символов')
        .required(),
});
