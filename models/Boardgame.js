const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardgameSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  thumbnail: {
    type: String,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  yearPublished: {
    type: Number,
    required: true,
  },
  minPlayers: {
    type: Number,
  },
  maxPlayers: {
    type: Number,
  },
  playingTime: {
    type: Number,
  },
  minPlaytime: {
    type: Number,
  },
  maxPlaytime: {
    type: Number,
  },
  minAge: {
    type: Number,
  },
  category: {
    type: Array,
  },
  mechanics: {
    type: Array,
  },
  family: {
    type: Array,
  },
  designer: {
    type: Array,
  },
  artist: {
    type: Array,
  },
  publisher: {
    type: String,
  },
  honors: {
    type: Array,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const Boardgame = mongoose.model('Boardgame', boardgameSchema);

module.exports = Boardgame;
