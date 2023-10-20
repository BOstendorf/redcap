function checkPropertyIsArray(obj, property){
  try {
    if(!Array.isArray(obj[property])){
      return {
        valid: false,
        errmsg: `Expected ${property} to be an array`
      };
    }
    else {
      return {
        valid: true
      };
    }

  }
  catch (err){
    return {
      valid: false,
      errmsg: `Passed obj does not seem to be obj with property ${property}. The message of caught error is ${err.message}`
    };
  }
}
