# Regular Expression Functions

Functions available for Common RegEx Validations

##Email Validation

```
const regex = require('regexfn');
console.log(regex.isEmail("jeyaprakash120690@gmail.com"));
```

##Letter Validation

```
const regex = require('regexfn');
console.log(regex.isLetterOnly("Tree"));
```

##Number Validation

```
const regex = require('regexfn');
console.log(regex.isNumberOnly("1234"));
```

##Phone Validation

```
const regex = require('regexfn');
console.log(regex.isPhoneNumber("9840348428"));
```

##GUID Validation

```
const regex = require('regexfn');
console.log(regex.isGUID("5F72B1E0-BC6D-4BDE-ABD4-3A78AFCADEFC"));
```

##isAmount Validation

```
const regex = require('regexfn');
console.log(regex.isAmount("11.05"));
```