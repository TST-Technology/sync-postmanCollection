var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, name: "John Doe" }]);
});

router.post("/", (req, res) => {
  const user = req.body;
  res.status(201).json(user);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `User ${id} updated.` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `User ${id} deleted.` });
});

module.exports = router;
