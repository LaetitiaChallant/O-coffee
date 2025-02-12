import dataMapper from "../dataMapper.js";

export const renderHomePage = async (req, res) => {
  try {
    const coffees = await dataMapper.getAllCoffees();
    res.render('home', {coffees});
  } catch (error) {
    console.error(error);
    res.status(500).send("Une erreur s'est produite.");
  }
};

export const renderAboutPage = (req,res) => {
  res.render('about');
};

export const renderContactPage = (req, res) => {
  res.render('contact');
};

export const handleContactForm = (req,res) => {
  const {name, email, message} = req.body;
  console.log(name, email, message);
  
}