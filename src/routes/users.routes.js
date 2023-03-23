const {Router} = require("express");
const UserController = require("../controllers/UserController");
const uploadConfig = require("../configs/upload")

const ensureAuthenticated = require("../middleware/ensureAuthenticated")
const multer = require("multer")

const usersRoutes = Router();
const Upload = multer(uploadConfig.MULTER)

const userController = new UserController();

usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuthenticated, userController.update)

usersRoutes.patch("/avatar", ensureAuthenticated, Upload.single("avatar"), (request ,response) => {
  console.log(request.file.filename)
  response.json()
})


module.exports = usersRoutes;