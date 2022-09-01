const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/NewsController");
const { uploadNewsImages } = require("../middlewares/multer");

router.post("/", uploadNewsImages.array("images", 3), NewsController.publish);
router.get("/", NewsController.getAllNews);
router.get("/archived", NewsController.getAllArchived);
router.put("/archive/:_id", NewsController.archiveNews);
router.delete("/:_id", NewsController.delete);
router.get("/detail/:_id", NewsController.getById);
router.get("/populate", NewsController.populateDB);


module.exports = router;
