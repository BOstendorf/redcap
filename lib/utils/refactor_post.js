
function validateApiData(apiData) {
  if (apiData === undefined) throw "No API configuration";
  if (!apiData.hasOwnProperty('token') || apiData.token === "") {
    throw "No API token specified";
  }
  if (!apiData.hasOwnProperty('host') || apiData.host === "") {
    throw "No host specified";
  }
}

export function post(apiData, postData, callback) {
  validateApiData(apiData);
  postData.token = apiData.token;
  postData.format = 'json';
  const postBody = querystring.stringify(postData);
  const options = {
    hostname: apiData.host,
    path: apiData.path,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postBody.length
    }
  };

  let dataBuffers = [];

  const post_request = https.request(
    options,
    (res) => {
      res.on('data', (data) => {
        dataBuffers.push(data);
      })

      res.on('end', () => {
        const data = Buffer.concat(dataBuffers);

        try {
          let response = ''
          if (data !== '') {
            response = JSON.parse(data);
          }
          if (typeof response === 'object' && 'error' in response) {
            return callback(new Error(response.error));
          }
          return callback(null, response);
        } catch (err) {
          return callback(null, data);
        }
      })
    }
  );

  post_request.on('error', (error) => {
    return callback(error);
  })

  post_request.write(postBody);
  post_request.end();
}
