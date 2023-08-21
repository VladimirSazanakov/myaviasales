export default class ApiAviasales {
  //_apiBase = "http://front-test.dev.aviadales.ru/";
  _apiBase = "https://aviasales-test-api.kata.academy/"

  optionsGet = {
    method: "GET",
    headers: {
      accept: 'aplication/json',
    }
  };

  async getResourse(url: string) {
    try {
      const urlstring = `${this._apiBase}${url}`;
      console.log(urlstring);
      const response = await fetch(`${this._apiBase}${url}`, this.optionsGet);
      return (await response).json();
    }
    catch (err) {
      throw new Error("Could Not connection");
    };
  };

  async getSearchId() {
    const url = 'search';
    return this.getResourse(url);
  }

  async getTicket(searchID: string) {
    const url = `tickets?searchId=${searchID}`;
    return this.getResourse(url);
  }


}