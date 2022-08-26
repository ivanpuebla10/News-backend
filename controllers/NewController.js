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

    async archiveNews(req, res) {
        try {
            const found = await New.findById(req.params._id);
            if (!found.archived) {
              const news = await New.findByIdAndUpdate(
                  req.params._id,
                  { $set: { archived: true } },
                  { new: true }
                );
            res.send({news, message:"News archived"});
              }
              else {
                res.status(400).send({ message: "This news was already archived" });
              }
          } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem trying to archive this news" });
          }
      },
}
module.exports = NewController;