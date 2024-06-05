const router = require("express").Router();
const entryController = require("../controller/entry_controller");

router.get("/", entryController.entry);

module.exports = router;
