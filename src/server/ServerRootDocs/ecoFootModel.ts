const mongoose = require("mongoose");

const authShema = mongoose.Schema({
    jwt: String,
    auth: Boolean,
});

exports.AuthModel = mongoose.model("ecoAuths", authShema);