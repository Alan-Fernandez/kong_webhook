const { models } = require('../libs/sequelize');

class CountryService {
  constructor() {}

  async find() {
    const countries = await models.Country.findAll();
    return countries;
  }

  async findOne(id) {
    const country = await models.Country.findByPk(id);
    if (!country) {
      throw new Error('Country not found');
    }
    return country;
  }

  async create(data) {
    const newCountry = await models.Country.create(data);
    return newCountry;
  }

  async update(id, changes) {
    const country = await this.findOne(id);
    const updatedCountry = await country.update(changes);
    return updatedCountry;
  }

  async delete(id) {
    const country = await this.findOne(id);
    await country.destroy();
    return { id };
  }
}

module.exports = CountryService;
