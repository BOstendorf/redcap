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

function invalidKeySets(keySets){
  return (
    keySets === undefined ||
    (!keySets.hasOwnProperty('required') &&
    !keySets.hasOwnProperty('optional'))
  )
}

// function collects the actual values for each parameter. If a parameter is required, having it's value missing returns early as invalid
// if a parameter is only optional, the value can be missing and the parameter will be omitted from the collcted values.
export function checkKey(params, keySets){
  let body = {
    valid: true,
    errmsg: '',
    keys: {}
  };

  if (invalidKeySets(keySets)) {
    body.valid = false;
    body.errmsg = 'No keys defined';
    return body;
  }

  let validationObject_required = checkPropertyIsArray(keySets, 'required');
  if (!validationObject_required.valid) return validationObject_required;
  else {
    for (key of keySets.required) {
      if (!params.hasOwnProperty(key)){
        body.valid = false;
        body.errmsg = 'Required parameter missing: ${key}';
        return body;
      }
      body.keys[key] = params[key];
    }
  }

  let validationObject_optional = checkPropertyIsArray(keySets, 'optional');
  if (!validationObject_optional.valid) return validationObject_optional;
  else {
    for (key of keySets.optional){
      if (params.hasOwnProperty(key)){
        body.keys[key] = params[key];
      }
    }
  }

  return body;
}
