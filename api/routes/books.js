const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "Books - GET",
  });
});

router.post("/", (req, res, next) => {
  res.json({
    message: "Books - POST",
  });
});

router.get("/:bookId", (req, res, next) => {
    const bookId = req.params.bookId;
  res.json({
    message: "Books - GET",
    id: bookId
  });
});

router.patch("/:bookId", (req, res, next) => {
    const bookId = req.params.bookId;
  res.json({
    message: "Books - PATCH",
    id: bookId
  });
});

router.delete("/:bookId", (req, res, next) => {
    const bookId = req.params.bookId;
  res.json({
    message: "Books - DELETE",
    id: bookId
  });
});

module.exports = router;
