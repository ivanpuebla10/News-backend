const News = require("../models/News");

const NewsController = {
  async publish(req, res, next) {
    try {
      if (req.files) {
        const images = req.files.map((elem) => elem.filename);
        req.body.images = images;
      }
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
      error.origin = 'news'
      next(error)
    }
  },

  async getAllNews(req, res) {
    try {
      const news = await News.find({ archived: false }).sort([["date", -1]]);
      res.status(200).send(news);
    } catch (error) {
      console.error(error);
      res.status(500).send("There was a problem fetching the news");
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
        res.status(200).send({ news, message: "News archived" });
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

  async getAllArchived(req, res) {
    try {
      const news = await News.find({ archived: true }).sort([
        ["archiveDate", -1],
      ]);
      res.status(200).send(news);
    } catch (error) {
      console.error(error);
      res.status(500).send("There was a problem fetching the archived news");
    }
  },

  async delete(req, res) {
    try { 
      const found = await News.findById(req.params._id);
      if(!found) {
        res.status(400).send("This news was already deleted");
      }else{
      const news = await News.findByIdAndDelete(req.params._id);
      res.status(200).send({ news, message: "News deleted" });}
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem trying to delete the news" });
    }
  },
};

module.exports = NewsController;
