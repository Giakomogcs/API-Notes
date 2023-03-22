const {Router} = require("express");
const UserController = require("../controllers/UserController");
const usersRoutes = Router();

const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const userController = new UserController();

usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuthenticated, userController.update)


module.exports = usersRoutes;