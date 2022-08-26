const New = require("../models/New");

const NewController ={
    async publish(req,res){
        try {
            const news = await New.create({...req.body, date : new Date(), archived: false})
            res.status(201).send({news, message: "The news was published successfully."})
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem publishing the new' })
        }
    },

        async getAllNews(req, res) {
        try {
           const news = await New.find()
           res.send(news)
        } catch (error) {
            console.error(error);
        }
    },

}
module.exports = NewController;