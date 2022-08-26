const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/NewsController");

router.post("/", NewsController.publish);
router.get("/", NewsController.getAllNews);
router.put("/archive/:_id", NewsController.archiveNews);

module.exports = router;
