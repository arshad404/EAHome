const db = require("../models");
const Users = db.users;

module.exports.addUser = async (req, res) => {
    let data = await Users.create({
        "name": "abc",
        "email": "abc@gmail.com",
        "password": "123456"
    });
    return res.status(200).json({"status": data});
}