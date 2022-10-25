const request = require("request");
const args = process.argv.slice(2);

request(
  "https://api.thecatapi.com/v1/breeds/search?q=" + args[0], //adjust query based on command line arguments
  (err, response, body) => {
    if (err) {
      console.log(err);
    }
    const data = JSON.parse(body);
    const anything = data[0];
    if (anything) {
      //grab description of cat if cat exists
      console.log(anything.description);
    }
    console.log(`Sorry, we couldn't find ${args[0]}`); //cat doesnt exist
  }
);
