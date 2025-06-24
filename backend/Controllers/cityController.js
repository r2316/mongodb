/*const City = require("../models/cityModel");

exports.getAllCities = async () => {
    return await City.find();
};

exports.getCityByName = async (name) => {
    return await City.find({ name: new RegExp(name, 'i') });
};

exports.getCityByState = async (state) => {
    return await City.find({ state: new RegExp(state, 'i') });
};

exports.getCitiesByLanguage = async (language) => {
    return await City.find({ officiallanguage: new RegExp(language, 'i') });
};

exports.addCity = async (cityData) => {
   
    const exists = await City.findOne({ name: cityData.name, state: cityData.state });
    if (exists) throw new Error("City already exists in this state");
    const city = new City(cityData);
    return await city.save();
};

exports.updateCity = async (id, newData) => {
   
    const exists = await City.findOne({ name: newData.name, state: newData.state, _id: { $ne: id } });
    if (exists) throw new Error("Another city with this name already exists in the state");
    return await City.findByIdAndUpdate(id, newData, { new: true });
};

exports.deleteCityById = async (id) => {
    return await City.findByIdAndDelete(id);
};
*/
/*
const City = require("../models/cityModel");

exports.addCity = async (cityData) => {
    let msg = "";
    let data = [];

    const exists = await City.findOne({ name: cityData.name, state: cityData.state });
    if (exists) {
        msg = "City already exists in this state";
        return { msg, data };
    }

    const city = new City(cityData);

    await city.save()
        .then(async () => {
            msg = "City added successfully";
            await City.find().then(d => data = d);
        })
        .catch(err => {
            msg = err.message;
        });

    return { msg, data };
};

exports.getAllCities = async () => {
    let cities = [];
    await City.find().then(d => cities = d);
    return cities;
};

exports.getCityByName = async (name) => {
    let result;
    await City.find({ name: new RegExp(name, 'i') })
        .then(d => result = d)
        .catch(err => result = "err");
    return result;
};

exports.getCityByState = async (state) => {
    let result;
    await City.find({ state: new RegExp(state, 'i') })
        .then(d => result = d)
        .catch(err => result = "err");
    return result;
};

exports.getCitiesByLanguage = async (language) => {
    let result;
    await City.find({ officiallanguage: new RegExp(language, 'i') })
        .then(d => result = d)
        .catch(err => result = "err");
    return result;
};

exports.updateCity = async (id, newData) => {
    let msg = "";
    let data = [];

    const exists = await City.findOne({
        name: newData.name,
        state: newData.state,
        _id: { $ne: id }
    });

    if (exists) {
        msg = "Another city with this name already exists in the state";
        return { msg, data };
    }

    await City.findByIdAndUpdate(id, newData)
        .then(async () => {
            msg = "City updated successfully";
            await City.find().then(d => data = d);
        })
        .catch(err => msg = err.message);

    return { msg, data };
};

exports.deleteCityById = async (id) => {
    let msg = "";
    let data = [];

    await City.findByIdAndDelete(id)
        .then(async () => {
            msg = "City deleted";
            await City.find().then(d => data = d);
        })
        .catch(err => msg = err.message);

    return { msg, data };
};
*/
const City = require("../Models/CityModel"); // replace with your actual model

exports.addCity = async (cityData) => {
  const city = new City(cityData);
  return await city.save();
};

exports.getAllCities = async () => {
  return await City.find();
};

exports.getCityByName = async (name) => {
  const city = await City.findOne({ name: name });
  if (!city) throw new Error("City not found");
  return city;
};

exports.deleteCity = async (id) => {
  return await City.findByIdAndDelete(id);
};

exports.updateCity = async (id, cityData) => {
  const updated = await City.findByIdAndUpdate(id, cityData, { new: true });
  if (!updated) throw new Error("City not found");
  return updated;
};

