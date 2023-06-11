require('dotenv').config();

module.exports = {

    /* Owner Secret, to do serious http requests */
    /* Not Needed */
    ownerSecret: process.env.ownersecret,

    /* Nodemailer Email and password */
    auth: {
        user: process.env.user,
        pass: process.env.pass
    },

    /* Mongodb connection string */
    mongoUri: process.env.mongodb
};