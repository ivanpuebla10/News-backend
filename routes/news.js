const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/NewsController");

router.post("/", NewsController.publish);
router.get("/", NewsController.getAllNews);
router.get("/archived", NewsController.getAllArchived);
router.put("/archive/:_id", NewsController.archiveNews);
router.delete("/:_id", NewsController.delete);

module.exports = router;
