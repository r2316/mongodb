/*const express = require("express");
const cityController = require("../Controllers/cityController");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        console.log("Request body:", req.body); 
        const newCity = await cityController.addCity(req.body);
        res.send(newCity);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.get("/citybyname/:name", async (req, res) => {
    try {
        const city = await cityController.getCityByName(req.params.name);
        res.send(city);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get("/citybystate/:state", async (req, res) => {
    try {
        const cities = await cityController.getCityByState(req.params.state);
        res.send(cities);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get("/citybylanguage/:language", async (req, res) => {
    try {
        const cities = await cityController.getCitiesByLanguage(req.params.language);
        res.send(cities);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const newCity = await cityController.addCity(req.body);
        res.send(newCity);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.put("/", async (req, res) => {
    try {
        const updatedCity = await cityController.updateCity(req.body.id, req.body);
        res.send(updatedCity);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await cityController.deleteCityById(req.params.id);
        res.send("City deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
*/



/*const express = require("express");
const cityController = require("../controllers/cityController"); 
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const city = await cityController.addCity(req.body);
        res.send("City added");
    } catch (err) {
        res.status(400).send(err.message);
    }
});


router.get("/", async (req, res) => {
    try {
        const cities = await cityController.getAllCities(); 
        res.send({ city:cities });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get("/citybyname/:name", async (req, res) => {
    try {
        const city = await cityController.getCityByName(req.params.name);
        res.send(city);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


router.get("/citybystate/:state", async (req, res) => {
    try {
        const cities = await cityController.getCityByState(req.params.state);
        res.send(cities);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get("/citybylanguage/:language", async (req, res) => {
    try {
        const cities = await cityController.getCitiesByLanguage(req.params.language);
        res.send(cities);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


router.put("/", async (req, res) => {
    try {
        const updatedCity = await cityController.updateCity(req.body.id, req.body);
        res.send(updatedCity);
    } catch (err) {
        res.status(400).send(err.message);
    }
});


router.delete("/:id", async (req, res) => {
    try {
        await cityController.deleteCityById(req.params.id);
        res.send("City deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
*/
/*

const express = require("express");
const cityController = require("../Controllers/cityController");
const router = express.Router();

// Add new city
router.post("/", async (req, res) => {
    try {
        let city = req.body;
        let result = await cityController.addCity(city);
        res.send({ msg: "City added", data: result });
    } catch (err) {
        res.status(400).send({ msg: err.message });
    }
});

// Get city by name
router.get("/citybyname/:name", async (req, res) => {
    try {
        let name = req.params.name;
        let city = await cityController.getCityByName(name);
        res.send({ data: city });
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
});

// Get cities by state
router.get("/citybystate/:state", async (req, res) => {
    try {
        let state = req.params.state;
        let cities = await cityController.getCityByState(state);
        res.send({ data: cities });
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
});

// Get cities by language
router.get("/citybylanguage/:language", async (req, res) => {
    try {
        let language = req.params.language;
        let cities = await cityController.getCitiesByLanguage(language);
        res.send({ data: cities });
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
});

// Update a city
router.put("/", async (req, res) => {
    try {
        let cityId = req.body.id;
        let updatedCityData = req.body;
        let updatedCity = await cityController.updateCity(cityId, updatedCityData);
        res.send({ msg: "City updated", data: updatedCity });
    } catch (err) {
        res.status(400).send({ msg: err.message });
    }
});

// Delete a city
router.delete("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        await cityController.deleteCityById(id);
        res.send({ msg: "City deleted" });
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
});

module.exports = router;
*/
/*

const express = require("express");
const cityController = require("../Controllers/cityController");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let city = req.body;
    let result = await cityController.addCity(city);
    res.send({ msg: "City added", data: result });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    let cities = await cityController.getAllCities();
    res.send({ citys: cities });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
});
module.exports = router;

*/
const express = require("express");
const cityController = require("../Controllers/cityController");
const router = express.Router();

// Add city
router.post("/", async (req, res) => {
  try {
    const city = req.body;
    const result = await cityController.addCity(city);
    res.send({ msg: "City added", data: result });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Get all cities
router.get("/", async (req, res) => {
  try {
    const cities = await cityController.getAllCities();
    res.send({ citys: cities });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
});

// Get city by name
router.get("/citybyname/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const city = await cityController.getCityByName(name);
    res.send(city);
  } catch (err) {
    res.status(404).send({ msg: err.message });
  }
});

// Delete city
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await cityController.deleteCity(id);
    res.send({ msg: "City deleted", data: result });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Update city
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedCity = req.body;
    const result = await cityController.updateCity(id, updatedCity);
    res.send({ msg: "City updated", data: result });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = router;




