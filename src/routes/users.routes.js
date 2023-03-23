const {Router} = require("express");
const UserController = require("../controllers/UserController");
const UserAvatarController = require("../controllers/UserAvatarController");
const uploadConfig = require("../configs/upload")

const ensureAuthenticated = require("../middleware/ensureAuthenticated")
const multer = require("multer")

const usersRoutes = Router();
const Upload = multer(uploadConfig.MULTER)

const userController = new UserController();
const userAvatarController = new UserAvatarController()

usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuthenticated, userController.update)

usersRoutes.patch("/avatar", ensureAuthenticated, Upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;