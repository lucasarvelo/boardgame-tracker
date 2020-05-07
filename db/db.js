module.exports = ({ url, port }, next) => {
  const mongoose = require('mongoose');

  mongoose
    .connect('mongodb://' + url + ': ' + port + '/boardgametracker', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .catch((error) => console.error(error.name + ': ' + error.message));

  mongoose.connection.on('connected', function () {
    console.log('Mongoose connection to ' + url + ':' + port + ' succeed!');
  });

  mongoose.connection.on('error', function (err) {
    console.error('Mongoose connection ' + err.message + ' error');
  });

  mongoose.connection.on('disconnected', function () {
    console.warn('Mongoose connection is disconnected');
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log(
        'Mongoose default connection is disconnected due to application termination',
      );
      process.exit(0);
    });
  });
};
