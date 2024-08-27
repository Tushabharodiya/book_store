let Joi = require("joi");

let stock = {
    body: Joi.object().keys({
        profile: Joi.string(),
        title: Joi.string().required().trim(),
        author: Joi.string().required().trim(),
        price: Joi.number(),
        genres: Joi.string().required().trim(),
        rating: Joi.number(),
        stock: Joi.boolean(),
    }),
};

module.exports = { stock };