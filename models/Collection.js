const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  boardgames: [{ type: Schema.Types.ObjectId, ref: 'Boardgame' }],
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
