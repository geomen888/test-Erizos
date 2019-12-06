const { is, not, compose } = require('ramda'),
 NAN = 0 / 0,
 reTrim = /^\s+|\s+$/g,
 myParseInt = (value) => {
     if(is(Number, value)){
         return value;
     }
     if (compose(not, is(String))(value)){
         return NAN;
     } 
     const pureValue = value.replace(reTrim, '');

     return (1 * pureValue);
 };

 module.exports = { myParseInt };

