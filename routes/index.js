const { Router } = require("express");
const { linksController } = require("../controlllers")

const router = Router();

router.post ("/gradually", linksController.getLinksGradually)
router.post ("/parallel", linksController.getLinksParallel)

module.exports = router