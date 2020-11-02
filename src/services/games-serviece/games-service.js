export default class GamesService {
  _apiBase = 'https://rawg-video-games-database.p.rapidapi.com';

  async getResource(url) {
    try {
      const res = await fetch(`${this._apiBase}${url}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": "9598c96e8dmshbf06c0e2380b5cbp102cc7jsnb817c41fdec8"
        }
      });
      if (!res.ok) {
        throw new Error(res.status);
      }
      const body = await res.json();
      return body;
    } catch (error) {
      throw error;
    }
  }

  // Game details
  getGameDetails = async (gameId) => {
    const res = await this.getResource(`/games/${gameId}`);
    return this._transformGameDetails(res);
  }
  // Games
  getAllGames = async () => {
    const res = await this.getResource(`/games`);
    return res.results.map(this._transformGame);
  }
  // Genres
  getAllGenres = async () => {
    const res = await this.getResource(`/genres`);
    return res.results.map(this._transformCategory);
  }
  // Developers
  getAllDevelopers = async () => {
    const res = await this.getResource(`/developers`);
    return res.results.map(this._transformCategory);
  }
  // Platforms
  getAllPlatforms = async () => {
    const res = await this.getResource(`/platforms`);
    return res.results.map(this._transformCategory);
  }
  // Category Details
  getCategoryDetails = async (categoryType, category) => {
    const res = await this.getResource(`/${categoryType}/${category}`);
    return this._transformCategoryDetails(res);
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
      id: game.id,
      price: parseInt(game.suggestions_count / 10),
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