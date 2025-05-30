const router = require("express");
const {
  getAllUser,
  createUser,
  updateAUser,
  deleteAUser,
} = require("../controllers/userController");

const Router = router()
  .post("/create-user", createUser)
  .get("/get-all-user", getAllUser)
  .put("/update-user/:userId", updateAUser)
  .delete("/delete-user/:userId", deleteAUser)

module.exports = Router;
