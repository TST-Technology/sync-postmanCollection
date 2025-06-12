var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* POST create new user */
router.post("/", function (req, res) {
  const { name, email, password } = req.body;
  // In a real application, you would save this to a database
  const newUser = {
    id: Date.now(),
    name,
    email,
    password: "******", // Don't send password back in response
  };
  res.status(201).json(newUser);
});

/* PUT update user */
router.put("/:id", function (req, res) {
  const { id } = req.params;
  const { name, email } = req.body;
  // In a real application, you would update this in a database
  const updatedUser = {
    id: parseInt(id),
    name,
    email,
  };
  res.json({ message: `User ${id} updated`, user: updatedUser });
});

/* DELETE user */
router.delete("/:id", function (req, res) {
  const { id } = req.params;
  // In a real application, you would delete from a database
  res.json({ message: `User ${id} deleted` });
});

module.exports = router;
