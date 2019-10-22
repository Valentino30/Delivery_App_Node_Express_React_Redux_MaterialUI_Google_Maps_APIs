const axios = require("axios");

// Fetch pickup points from API
exports.fetchPickupPoints = async (req, res, next) => {
  const countryCode = req.params.countryCode;
  const zipCode = req.params.zipCode;
  try {
    // Attempt to fetch data from API
    const response = await axios.get(
      `https://api.bring.com/pickuppoint/api/pickuppoint/${countryCode}/postalCode/${zipCode}.json`
    );
    const pickupPoints = response.data.pickupPoint;
    // Throw error if pickupPoints is undefined
    if (!pickupPoints)
      throw new Error("The API has responded with the wrong data format");
    // Throw error if pickupPoints is an empty array
    if (pickupPoints.length === 0)
      throw new Error("Nothing found, please try with another zip code");
    // Send response back to the frontend if no errors occurred
    res.json(pickupPoints);
  } catch (error) {
    if (error.response) {
      const message = error.response.data.error[0];
      // The request was made and the api responded with a status code different from 2xx
      console.log("Response error status: ", error.response.status);
      console.log("Response error message: ", error.response.statusText);
      if (message) console.log(`${message.parameter} ${message.error}`);
    } else {
      console.log("Error: " + error.message);
    }
    next(error);
  }
};
