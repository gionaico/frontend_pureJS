let CACHE_TEMPLATES = new Map();

// From Jake Archibald's Promises and Back:
// http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promisifying-xmlhttprequest

function get(url) {
  // Return a new promise.
  return new Promise(function (resolve, reject) {
    if (CACHE_TEMPLATES.has(url)) {
      console.log("ifififif")
      resolve(CACHE_TEMPLATES.get(url));
    } else {
      console.log("elseelse")
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = function () {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          CACHE_TEMPLATES.set(url, req.response);
          resolve(req.response);
        } else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = function () {
        reject(Error("Network Error"));
      };

      // Make the request
      req.send();
    }

  });
}

function post(url, data) {
  return new Promise(function (resolve, reject) {
    var ajax = new XMLHttpRequest();

    // Seta tipo de requisição: Post e a URL da API
    ajax.open("POST", url, true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Seta paramêtros da requisição e envia a requisição
    ajax.send(data);

    // Cria um evento para receber o retorno.
    ajax.onreadystatechange = function () {

      // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
      if (ajax.readyState == 4 && ajax.status == 200) {

        var res = ajax.responseText;

        // Retorno do Ajax
        console.log(res);
        resolve(ajax.response);
      }else{
        reject(Error(ajax.statusText));
      }
    }
  });
}
  
function generaTemplate(strings, ...keys) {
  return function (data) {
    let temp = strings.slice();
    keys.forEach((key, i) => {
      temp[i] = temp[i] + data[key];
    });
    return temp.join('');
  }
}

function initMap(data) {
  let location = {
    lat: parseFloat(data.location_lat),
    lng: parseFloat(data.location_long)
  };
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });
  new google.maps.Marker({
    position: location,
    map: map
  });
}

export {
  get,
  generaTemplate,
  initMap,
  post
};