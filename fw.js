const { Schema, model } = require('./conn');
const FwSchema = new Schema({
  "title": {
    "type": "String"
  },
  "votes": {
    "type": "Number"
  },
  "votes": {
    "type": "Number"
  },
},
);	
const Fw = model('Framework', FwSchema);
module.exports = { Fw };
