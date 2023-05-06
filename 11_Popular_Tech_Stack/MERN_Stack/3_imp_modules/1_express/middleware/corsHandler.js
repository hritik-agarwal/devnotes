const whiteList = [
  "https://www.mysite.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
];

const corsOption = {
  origin: (origin, callback) => {
    if (!origin || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOption;
