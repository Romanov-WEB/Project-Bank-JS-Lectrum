// Core
import Joi from 'joi';

export const cardSchema = Joi.object({
    issuer: Joi.string()
        .min(3)
        .message('Введите корректно имя владельца карты')
        .required(),
    system: Joi
        .string()
        .valid('visa', 'mastercard')
        .messages({ 'any.only': 'Необходимо передать одно из допустимых значений: visa, mastercard.' }),
    currency: Joi
        .any()
        .valid('usd', 'uah', 'eur', 'rub')
        .messages({ 'any.only': 'Необходимо передаь одно из допустимых значений: usd, uah, eur, rub.' })
        .required(),
    class: Joi
        .any()
        .valid('gold', 'world', 'platinum', 'signature')
        .messages({ 'any.only': 'Необходимо передаь одно из допустимых значений: gold, world, platinum, signature.' })
        .required(),
    description: Joi.string().min(3)
        .message('Минимальная длина описания 3 символа')
        .required(),
});
