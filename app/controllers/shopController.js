import dataMapper from "../dataMapper.js";

export const  renderShopPage = async (req, res) => {
  try {
    const coffees = await dataMapper.getAllCoffees();
    res.render('shop', {coffees});
  } catch (error) {
    console.error(error);
    res.status(500).send("Une erreur s'est produite");    
  }
};
export const renderArticlePage = async (req, res) => {
  try {
    const coffeeId = parseInt(req.params.id);
    const coffee = await dataMapper.getOneCoffee(coffeeId);
    res.render('article', {coffee});
  } catch (error) {
    console.error(error);
    res.status(500).send("Une erreur s'est produite");    
  }
}; 