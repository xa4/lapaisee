'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BeerSchema = new Schema({
  batch: Number,
  type: String,
  brew_date: Date,
  bottle_date: Date,
  final_quantity: Number,
  og: Number,
  fg: Number,
  alc_vol: Number,
  ibu: Number,
  ebc: Number
});

module.exports = mongoose.model('Beer', BeerSchema);