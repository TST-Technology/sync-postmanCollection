"use strict";

const fs = require("fs");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const POSTMAN_API_KEY = process.env.POSTMAN_API_KEY;
const WORKSPACE_ID = process.env.WORKSPACE_ID;
const COLLECTION_UID = process.env.COLLECTION_UID;

const collection = JSON.parse(
  fs.readFileSync("postman_collection.json", "utf8")
);

const headers = {
  "X-Api-Key": POSTMAN_API_KEY,
  "Content-Type": "application/json",
};

async function uploadCollection() {
  try {
    if (COLLECTION_UID) {
      // Update
      await axios.put(
        `https://api.getpostman.com/collections/${COLLECTION_UID}`,
        {
          collection,
        },
        { headers }
      );
      console.log("Collection updated in Postman");
    } else {
      // Create new
      await axios.post(
        "https://api.getpostman.com/collections",
        {
          collection,
          workspace: WORKSPACE_ID,
        },
        { headers }
      );
      console.log("Collection created in Postman");
    }
  } catch (err) {
    console.error("Failed to sync with Postman:", err.response?.data || err);
  }
}

uploadCollection();
