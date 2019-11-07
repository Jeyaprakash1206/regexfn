const basicvalidation = (val) => {
    if (!val) {
        return false;
    }
    else {
        return true;
    }
}
const isEmail = (val) => {
    if (basicvalidation(val)) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
            return (true)
        }
        return (false)
    } else {
        return false;
    }
}
const isLetterOnly = (val) => {
    if (val && (/^[a-z]+$/i.test(val))) {
        return true;
    } else {
        return false;
    }
}
const isNumberOnly = (val) => {
    if (val && (/^\d*$/i.test(val))) {
        return true;
    } else {
        return false;
    }
}
const isPhoneNumber = (val) => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(val)
}
const isGUID = (val) => {
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regex.test(val)
}
const isAmount = (val) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    return regex.test(val)
}
const is_usZipCode = (val) => {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
  
    if (regexp.test(val))
      {
        return true;
      }
    else
      {
        return false;
      }
}
const is_socialSecurity_Number = (val) => {
    regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
  
    if (regexp.test(val))
      {
        return true;
      }
    else
      {
        return false;
      }
}
module.exports = {
isEmail,
isLetterOnly,
isNumberOnly,
isPhoneNumber,
isGUID,
isAmount,
is_usZipCode,
is_socialSecurity_Number
};   