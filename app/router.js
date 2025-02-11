import {Router} from "express";

import * as maincontroller from "./controllers/mainController.js";
import * as shopController from "./controllers/shopController.js";

const router = Router();

router.get('/', maincontroller.renderHomePage);
router.get('/shop', shopController.renderShopPage);
router.get('/article', shopController.renderArticlePage);


export default router;