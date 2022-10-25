const request = require("request");
const args = process.argv.slice(2);

request(
  "https://api.thecatapi.com/v1/breeds/search?q=" + args[0],
  (err, response, body) => {
    const data = JSON.parse(body);
    if (err) {
      console.log(err);
    }
    console.log(data[0].description);
  }
);
