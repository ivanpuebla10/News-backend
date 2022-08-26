const New = require("../models/New");

const NewController ={
    async publish(req,res){
        try {
            const pubNew = await New.create(req.body)
            res.status(201).send(pubNew)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem publishing the new' })
        }
    },
}
module.exports = NewController;