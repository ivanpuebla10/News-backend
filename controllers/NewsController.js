const News = require("../models/News");

const NewsController = {
  async publish(req, res) {
    try {
      const news = await News.create({
        ...req.body,
        date: new Date(),
        archiveDate: "",
        archived: false,
      });
      res
        .status(201)
        .send({ news, message: "The news was published successfully." });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem publishing the news" });
    }
  },

  async getAllNews(req, res) {
    try {
      const news = await News.find({archived: false}).sort([['date', -1]]);
      res.send(news);
    } catch (error) {
      console.error(error);
    }
  },

  async archiveNews(req, res) {
    try {
      const found = await News.findById(req.params._id);
      if (!found.archived) {
        const news = await News.findByIdAndUpdate(
          req.params._id,
          { $set: { archiveDate: new Date(), archived: true } },
          { new: true }
        );
        res.send({ news, message: "News archived" });
      } else {
        res.status(400).send({ message: "This news was already archived" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem trying to archive this news" });
    }
  },
};
module.exports = NewsController;
