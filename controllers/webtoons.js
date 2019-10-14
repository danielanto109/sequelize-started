const models = require('../models')
const Webtoon = models.webtoons
const User = models.users

exports.index = (req, res) => {
    Webtoon.findAll({
        include: [{
            model: User,
            as: "createdBy"
        }]
    }).then(result=>res.send(result))
}

exports.show = (req, res) => {
    Webtoon.findOne({where:{id: req.params.id}}).then(result=> res.send(result))
}

exports.store = (req, res) => {
    Webtoon.create(req.body).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
}

exports.update = (req, res) => {
    Webtoon.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
}

exports.delete = (req, res) => {
    Webtoon.destroy({where: {id: req.params.id}}).then(webtoon=> {
        res.send({
            message: "success",
            webtoon
        })
    })
}
