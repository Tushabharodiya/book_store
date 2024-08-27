let Joi = require("joi");

let author = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        dob: Joi.string(),
        genre: Joi.string().required().trim(),
    }),
};

module.exports = { author };