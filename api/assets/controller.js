const models = require("../../models/index");
const Assets = models.asset

const controller = {
    show: async(req,res) => {
        Assets.findAll()
        .then(assets =>{
            res.status(200).send({assets})
        })
    }
}

module.exports = controller