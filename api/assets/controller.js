const models = require("../../models/index");
const Assets = models.asset

const controller = {
    show: async(req,res) => {
        Assets.findAll()
        .then(assets =>{
            res.status(200).send({assets})
        })
    },
    chartData: async(req,res) =>{
        Assets.findAll({
            attributes: [
                "date","open_price","close_price","highest_price","lowest_price"
            ]
        }).then(assets =>{
            res.status(200).send(assets)
        })

    }
}

module.exports = controller