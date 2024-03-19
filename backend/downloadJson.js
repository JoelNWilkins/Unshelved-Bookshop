const { getDataBatch } = require('./firebase.js');
const fs = require('fs');

(async () => {
  let collections = ['authors', 'genres', 'books'];
  for (let col of collections) {
    let data = await getDataBatch(col);
    fs.writeFile(`backend/public/${col}.json`, JSON.stringify(data, null, 2), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log('The file was saved!');
    }); 
  }
})();