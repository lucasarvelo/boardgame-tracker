const parseString = require('xml2js').parseString;

const options = {
  explicitArray: false,
  mergeAttrs: true,
};

const xmlToJson = (xml) => {
  let json;
  parseString(xml, options, function (error, result) {
    if (error) return error;
    json = result;
  });
  return json.items.item;
};

module.exports = xmlToJson;
