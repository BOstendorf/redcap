
function validateApiData(apiData){
  if (apiData === undefined) throw "No API configuration";
  if (!apiData.hasOwnProperty('token') || apiData.token === "") {
    throw "No API token specified";
  }
  if (!apiData.hasOwnProperty('host') || apiData.host === ""){
    throw "No host specified";
  }
}


