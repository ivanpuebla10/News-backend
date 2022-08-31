const News = require("../models/News");
const axios = require('axios');

const NewsController = {
  
  async publish(req, res, next) {
    try {
        const images = req.files.map((elem) => elem.filename);
        req.body.images = images;

      const news = await News.create({
        ...req.body,
        date: new Date(),
        archiveDate: "",
        archived: false,
        fetched: false
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

  async getById(req, res) {
    try {
      const news = await News.findById(req.params._id);
      res.send(news);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem trying to fetch the news" });
    }
  },

  async populateDB(req, res, next) {
    try {
      const resp = await axios.get('https://gnews.io/api/v4/search?q=example&lang=en&max=20&token=30478e61fa7d9ef38373fd98a5c04d90')
      resp.data.articles.map(async (elem) =>
      {
        await News.create({
        title: elem.title ? elem.title : 'No title provided',
        description: elem.description ? elem.description : 'No description provided',
        content: elem.content ? elem.content : 'No content provided',
        author: elem.source?.name ? elem.source.name : 'No source provided',
        date: new Date(),
        archiveDate: "",
        archived: false,
        images: [elem.image? elem.image : 'https://images.ctfassets.net/mk9nps9h607g/5DnT6NoTCguwc4egkiGcIg/b3f22bef3f59efa5b8711c8268cde80a/news-placeholder.jpg'],
        fetched: true
      });
    }
      )
      res
        .status(201)
        .send("Database populated.");
    } catch (error) {
      console.error(error)
    }
  },

};

module.exports = NewsController;
