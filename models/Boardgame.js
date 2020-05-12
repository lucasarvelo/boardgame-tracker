const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardgameSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  designer: {
    type: String,
  },
  yearpublished: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  minplayers: {
    type: Number,
  },
  maxplayers: {
    type: Number,
  },
  age: {
    type: Number,
  },
  minPlaytime: {
    type: Number,
  },
  maxPlaytime: {
    type: Number,
  },
  boardgameHonors: {
    type: Array,
  },
  boardgameMechanics: {
    type: Array,
  },
  boardgameFamily: {
    type: Array,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const Boardgame = mongoose.model('Boardgame', boardgameSchema);

module.export = Boardgame;
