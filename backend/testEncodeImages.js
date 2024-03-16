const { encodeImage } = require('./encodeImages.js');

encodeImage('https://i.harperapps.com/hcuk/covers/9780008279554/x400.jpg')
  .then(data => console.log(data))
  .catch(err => console.log(err));