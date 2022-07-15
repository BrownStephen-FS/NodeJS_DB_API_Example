const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "Authors - GET",
  });
});

router.post("/", (req, res, next) => {
  res.json({
    message: "Authors - POST",
  });
});

router.get("/:authorId", (req, res, next) => {
    const authorId = req.params.authorId;
  res.json({
    message: "Authors - GET",
    id: authorId
  });
});

router.patch("/:authorId", (req, res, next) => {
    const authorId = req.params.authorId;
  res.json({
    message: "Authors - PATCH",
    id: authorId
  });
});

router.delete("/:authorId", (req, res, next) => {
    const authorId = req.params.authorId;
  res.json({
    message: "Authors - DELETE",
    id: authorId
  });
});

module.exports = router;
