'use strict';

const https = require('https');
const fs = require('fs');
const FormData = require('form-data');

module.exports = function(apiData) {
  if (apiData == undefined) {
    throw "No API configuration";
  }
  if (!("token" in apiData) || apiData.token === "") {
    throw "No API token specified";
  }
  if (!("host" in apiData) || apiData.host === "") {
    throw "No host specified";
  }


  var apiData = apiData;
  return function(postData, callback) {
    postData.token = apiData.token;
    postData.format = 'json';

    postData.file = fs.createReadStream(postData.directory + postData.file);

    const form = new FormData();
    for (const key in postData) {
      if (key === 'file') {
        const filePath = postData.directory + postData.file;
        form.append(key, fs.createReadStream(filePath));
      } else {
        form.append(key, postData[key]);
      }
    }

    var dataBuffers = [];

    var request_options = {
      hostname: apiData.host,
      path: apiData.path,
      method: 'POST',
      headers: form.getHeaders()
    }

    const post_request = https.request(
      request_options,
      (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const data = Buffer.concat(dataBuffers);
          try {
            const response = JSON.parse(data);
            if (typeof response === 'object' && 'error' in response) {
              return callback(response, null);
            }
            else {
              return callback(null, response);
            }
          } catch (err) {
            return callback(null, data);
          }
        })
      }
    );
  }
};
