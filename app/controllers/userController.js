const model = require('../models/user');

exports.getAllUsers = (req, res) => {
    model.find({}, (err, data) => {
        if (err) {
            res.status(422).send({ err: err });
        } else {
            res.status(200).send({ data: data });
        }
    })
}

exports.addUser = (req, res) => {
    const user = req.body;
    model.create(user, (err, data) => {
        if (err) {
            res.status(422).send({ err: err });
        } else {

            res.status(201).send({ data: data });
        }
    })
}