const New = require("../models/New");

const NewController ={
    async publish(req,res){
        try {
            const pubNew = await New.create({...req.body, date : new Date(), archived: false})
            res.status(201).send({pubNew, message: "The news was published successfully."})
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem publishing the new' })
        }
    },
}
module.exports = NewController;