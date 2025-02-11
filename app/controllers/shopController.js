import dataMapper from "../dataMapper.js";

export const  renderShopPage = async (req, res) => {
  const coffees = await dataMapper.getAllCoffees();
  res.render('shop', {coffees});
};
export const renderArticlePage = async (req, res) => {
  const coffeeId = parseInt(req.params.id);
  const coffee = await dataMapper.getOneCoffee(coffeeId);
  res.render('article', {coffee});
}; 