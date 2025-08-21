// src/cloudinary.js
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: "du3tkzdhe", // replace with your Cloudinary name
  },
});

export default cld;
