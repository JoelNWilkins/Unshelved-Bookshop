const request = require('request').defaults({ encoding: null });

const encodeImage = (url) => {
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
        resolve(data);
      } else {
        reject(error);
      }
    });
  });
}

module.exports = {
  'encodeImage': encodeImage
}