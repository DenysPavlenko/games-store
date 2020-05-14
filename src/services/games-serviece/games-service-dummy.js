// Dummy data
import * as games from './dummy-data/games.json';
import * as genres from './dummy-data/genres.json';
import * as developers from './dummy-data/developers.json';
import * as platforms from './dummy-data/platforms.json';
import * as game from './dummy-data/game.json';
import * as categoryDetails from './dummy-data/category-details.json';

export default class GamesServiceDummy {

  serverRespond = 1500;

  getData = async (url, transformObj, errorMsg, errorProbability = .99) => {
    const res = await url.default;
    await new Promise((res, rej) => setTimeout(() => {
      return Math.random() > errorProbability ? rej(new Error(errorMsg)) : res();
    }, this.serverRespond));
    return res.hasOwnProperty('results') ? res.results.map(transformObj) : transformObj(res);
  }


  getAllGames = async () => {
    return this.getData(games, this._transformGame, 'error in get All Games')
  }
  getAllGenres = async () => {
    return this.getData(genres, this._transformCategory, 'error in get All Genres')
  }
  getAllDevelopers = async () => {
    return this.getData(developers, this._transformCategory, 'error in get All Developers')
  }
  getAllPlatforms = async () => {
    return this.getData(platforms, this._transformCategory, 'error in get All Platforms')
  }
  getGameDetails = async () => {
    return this.getData(game, this._transformGameDetails, 'error in get Game details')
  }
  getCategoryDetails = async () => {
    return this.getData(categoryDetails, this._transformCategoryDetails, 'error in get Category details')
  }


  _transformCategory = category => {
    return {
      id: category.id,
      rout: category.slug,
      name: category.name,
      image: category.image_background,
      total: category.games.length,
      games: category.games,
    }
  }
  _transformGame = game => {
    return {
      id: game.id,
      rout: game.slug,
      name: game.name,
      released: game.released,
      image: game.background_image,
      rating: game.rating,
      genres: game.genres,
      platforms: game.platforms,
    }
  }
  _transformGameDetails = game => {
    return {
      id: Math.floor(Math.random() * 10000),
      price: parseInt(game.suggestions_count / 2),
      rout: game.slug,
      name: game.name,
      genres: game.genres.map(genre => genre.name),
      developers: game.developers.map(developer => developer.name),
      publishers: game.publishers.map(publisher => publisher.name),
      platforms: game.platforms.map(({ platform }) => platform.name),
      description: game.description_raw,
      released: game.released,
      rating: game.rating,
      ratings: game.ratings,
      image: game.background_image,
      previews: [game.background_image, game.clip && game.clip.clips.full, game.background_image_additional].filter(el => el !== null),
    }
  }
  _transformCategoryDetails = category => {
    const description = category.description !== '' ? category.description : 'Pencil cunning like a fox robot moustache hello, we’re cockneys charlie chaplin, charlie chaplin super mario hello, we’re cockneys devilish cad robot moustache casual style rugged hair trimmer des lynam pencil cunning like a fox felis doctor watson.'
    return {
      id: category.id,
      name: category.name,
      rout: category.slug,
      image: category.image_background,
      description,
    }
  }

}
