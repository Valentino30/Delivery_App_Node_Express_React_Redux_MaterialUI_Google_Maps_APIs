import axios from "axios";
import { LOAD_PICKUPPOINTS } from "./types";

// Fetch pickup points from the backend
export const loadPickupPoints = zipCode => async dispatch => {
  try {
    // Fetch pickup points from the backend
    const response = await axios.get(
      `http://localhost:4000/searchPickupPoints/DK/${zipCode}`
    );
    const pickupPoints = response.data;
    // Throw error if pickupPoints is undefined
    if (!pickupPoints) throw new Error("No pickup points found");
    // Throw error if pickupPoints is an empty array
    if (pickupPoints.length === 0)
      throw new Error("Nothing found, please try with another zip code");
    // Dispatch action to the reducer
    dispatch({
      type: LOAD_PICKUPPOINTS,
      payload: pickupPoints
    });
  } catch (error) {
    if (error.response) {
      // The request was made but the server responded with a status code different from 2xx
      console.log("Response error msg: ", error.response.data.error.message);
      // Send feedback to the user
      alert(error.response.data.error.message);
    } else if (error.request) {
      // The request was made but no response was received
      console.log("Request error: ", error.request);
      // Send feedback to the user
      alert(error.message);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error: ", error.message);
      // Send feedback to the user
      alert(error.message);
    }
  }
};
