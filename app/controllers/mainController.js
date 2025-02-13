import dataMapper from "../dataMapper.js";
import {sendEmail} from "../services/email-service.js";

export const renderHomePage = async (req, res) => {
  try {
    const coffees = await dataMapper.getAllCoffees();
    res.render('home', {coffees, success: req.query.success});
  } catch (error) {
    console.error(error);
    res.status(500).send("Une erreur s'est produite.");
  }
};

export const renderAboutPage = (req,res) => {
  res.render('about', { map: true });
};

export const renderContactPage = (req, res) => {
  res.render('contact');
};

export const handleContactForm = async (req,res) => {
  const {name, email, message} = req.body;
  
  try {
    await sendEmail(name, email, message);
    res.redirect("/?success=" + encodeURIComponent("Email envoyé avec succès!"));

  } catch (error) {
    console.error(error);
    res.status(500).send("Une erreur est survenue lors de l'envoie de l'email.");
    
  }

};