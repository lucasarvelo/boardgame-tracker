const axios = require('axios');
const xmlParser = require('../utils/xmlParser');

const urlV1 = 'https://api.geekdo.com/xmlapi';
const urlV2 = 'https://api.geekdo.com/xmlapi2';

const getHotBoardgames = () => {
  return axios
    .get(urlV2 + '/hot?boardgame')
    .then((response) => xmlParser(response.data));
};

const getBoardgameInformation = (id) => {
  return axios
    .get(urlV2 + '/thing?id=' + id)
    .then((response) => {
      return xmlParser(response.data);
    })
    .catch((error) => error);
};

const searchBoardgame = (query) => {
  return axios
    .get(urlV2 + '/search?type=boardgame,boardgameexpansion&query=' + query)
    .then(async (response) => {
      const parseSearchData = await xmlParser(response.data);

      //get a list of boardgames ids from the search result to request more info
      const boardgamesIds = parseSearchData
        .map((game) => game.id.toString())
        .join(',');

      return getBoardgameInformation(boardgamesIds);
    })
    .catch((error) => error);
};

module.exports = { getHotBoardgames, searchBoardgame, getBoardgameInformation };
