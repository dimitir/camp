const mongoose = require("mongoose");

const authShema = mongoose.Schema({
    jwt: String,
    email: String,
    auth: Boolean,
});


module.exports.AuthModel = mongoose.model("ecoAuths", authShema);