export const get = (params, callback) => {
  const xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
      callback(xmlHttp.responseText);
  };

  xmlHttp.open("GET", params.url, true);
  xmlHttp.send(null);
};
