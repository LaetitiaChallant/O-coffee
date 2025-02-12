import {Router} from "express";

import * as maincontroller from "./controllers/mainController.js";
import * as shopController from "./controllers/shopController.js";

const router = Router();

router.get('/', maincontroller.renderHomePage);
router.get('/about', maincontroller.renderAboutPage);
router.get('/contact', maincontroller.renderContactPage);
router.post('/contact', maincontroller.handleContactForm);

router.get('/shop', shopController.renderShopPage);
router.get('/article/:id', shopController.renderArticlePage);

router.use((req, res) => {
  res.status(404).render("404");
});

export default router;