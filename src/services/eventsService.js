


  static createEvent = async () => {
    let headers = await httpUtils.authHeaders();
    return await axios
      .get(`${apiConfig.host}/fsl/statuses`, { headers: headers })
      .then(httpUtils.handleResponse);
  };