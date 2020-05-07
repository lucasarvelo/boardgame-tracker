const axios = require('axios');
const xmlParser = require('../utils/xmlParser');

const urlV1 = 'https://api.geekdo.com/xmlapi';
const urlV2 = 'https://api.geekdo.com/xmlapi2';

const getHotBoardgames = async () => {
  return axios.get(urlV2 + '/hot?boardgame').then((response) => {
    return xmlParser(response.data);
  });
};

module.exports = { getHotBoardgames };
