import dataMapper from "../dataMapper.js";

export const renderHomePage = async (req, res) => {
  const coffees = await dataMapper.getAllCoffees();
  res.render('home', {coffees});
};