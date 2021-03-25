export const SwapiService = {
  baseUrl: 'https://swapi.dev/api',
  
  async getDataByType(type, page=1, recursive=true) {
    const query = `${this.baseUrl}/${type}?page=${page}`;
    const response = await (await fetch(query)).json();
    const data = response.results;

    if (response.next !== null && recursive) {
      return data.concat(await this.getDataByType(type, page+1));
    }
    return data;
  },

  async getDataFromUrl(url) {
    if (Array.isArray(url)) {
      let dataArray = [];

      url.forEach(async(u) => {
        const response = await (await fetch(u)).json();
        dataArray.concat(response);
      });
      return dataArray;
    }

    const response = await (await fetch(url)).json();
    const data = response.results;
    return data;
  }
}
