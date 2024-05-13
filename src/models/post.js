const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({

});
module.exports = mongoose.model("post", PostSchema);