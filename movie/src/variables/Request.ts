class Requests {
  handleResponse = (res: Response) =>
    !res.ok ? Promise.reject(res) : res.json();

  handleFetch = async (url: string, params: { [method: string]: string }) => {
    const data = await fetch(url, params)
      .then(res => {
        return this.handleResponse(res);
      })
      .catch(err => console.warn(`Error fetching data from ${url}, ${err}`));

    if (params.method === "GET") {
      return data.results;
    }
    return data;
  };

  getRequest = async (url: string) => {
    const params = {
      method: "GET",
    };

    return this.handleFetch(url, params);
  };

  postRequest = async (url: string, body: { [body: string]: string }) => {
    const params = {
      method: "POST",
      body: JSON.stringify({
        ...body,
      }),
    };

    return this.handleFetch(url, params);
  };

  putRequest = async (url: string, body: { [body: string]: string }) => {
    const params = {
      method: "PUT",
      body: JSON.stringify({
        ...body,
      }),
    };

    return this.handleFetch(url, params);
  };

  deleteRequest = async (url: string, body: { [body: string]: string }) => {
    const params = {
      method: "DELETE",
      body: JSON.stringify({
        ...body,
      }),
    };

    return this.handleFetch(url, params);
  };
}

const Request = new Requests();

export { Request };
