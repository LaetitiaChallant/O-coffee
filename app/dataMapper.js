import database from "../data/database-client.js";

const dataMapper = {
  async getAllCoffees() {
    const result = await database.query(`SELECT * FROM "coffee"`);
    const coffees = result.rows;
    return coffees;
  },
  async getOneCoffee(coffeeId) {
    const result = await database.query(`SELECT * FROM "coffee" WHERE "id"=$1`, [coffeeId]);
    const coffee = result.rows[0];
    return coffee;
  }
};

export default dataMapper;