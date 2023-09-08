export default class CatApi {
  constructor() {
    this.url = 'https://api.thecatapi.com/v1/images/search';
    this.api_key =
      'live_73aZClFkpZ6GxIuMc8RCTx0j1oJplR6F9UEuuN5FYH1b3SQIJooGTxfaBVVBVriS';
  }
  getData() {
    return fetch(this.url, {
      headers: {
        'x-api-key': this.api_key,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données de l'API");
      }
      return response.json();
    });
  }
}
