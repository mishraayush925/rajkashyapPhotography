function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split("&").forEach(function(pair) {
      const [key, value] = pair.split("=");
      params[key] = decodeURIComponent(value);
    });
    return params;
  }
  