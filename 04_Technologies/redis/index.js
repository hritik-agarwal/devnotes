const redis = require("redis");
const express = require("express");

const app = express();
const redisClient = redis.createClient();
redisClient.connect();

const getOrSetData = async (key, callback) => {
  const data = await redisClient.get(key);
  if (data) return JSON.parse(data);
  const newData = await callback();
  await redisClient.setEx(key, 3600, JSON.stringify(newData));
  return newData;
};

app.get("/photos", async (req, res) => {
  const {albumId} = req.query;
  const key = `photos?albumId=${albumId}`;
  const fetchPhotos = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    ).then((res) => res.json());
    return data;
  };
  const photos = await getOrSetData(key, fetchPhotos);
  res.json(photos);
});

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
