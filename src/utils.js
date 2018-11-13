import {Settings} from './settings';

/**
 * This is a variable to save data and do not make a request when already it has the information in this variable
 */

function checkLocalStorage() {
  let local = localStorage.getItem("templeates");
  try {    
    if (typeof(JSON.parse(local))==="string") {
      return JSON.parse(local);
    }
    localStorage.setItem("templeates", JSON.stringify([]))
    return [];
  } catch (error) {
    localStorage.setItem("templeates", JSON.stringify([]))
    return [];
  }
}

function setLocalStorage(array, newObj) {
  let arrayFiltrado = array.filter(item => item.url === newObj.url);
  console.log(111111111111, arrayFiltrado, array)
  let nuevoArr=[];
  if (arrayFiltrado.length>0) {
    array.forEach(element => {
      if (element.url===newObj.url) {
        element.contenido = newObj.contenido
      }
      nuevoArr.push(element)
    });    
    console.log("if")
    localStorage.setItem("templeates", JSON.stringify(nuevoArr));
  }else{
    array.push(newObj)
    console.log("else", array)
    localStorage.setItem("templeates", JSON.stringify(array));
  }
  
}

function get(url) {
  /* console.log("localStorage", url, checkLocalStorage()); */
  // Return a new promise.
  let local= checkLocalStorage()
  console.log("lllllllllllllllllllllllllllllll",local)
  return new Promise(function (resolve, reject) {
    let ar = local.filter(item => item.url === url)
    if (ar.length > 0) {
      console.log("CACHE", local)
      resolve(ar[0].contenido);
    } else {
      console.log("fuera cache", local)
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('GET', Settings.baseURL+url);

      req.onload = function () {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          /* console.log(req.response) */
          setLocalStorage(local, {
            url: url,
            contenido: req.response
          });
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

function validation(dat) {
  for (const prop in dat) {
    if (`${dat[prop]}` === undefined || `${dat[prop]}`.length < 3) {
      document.getElementById(`${prop}`).classList.add("form-error");
      document.getElementById(`${prop}`).focus();
      return false
    }
  }
  return true
}

function cleanError(name) {
  let pe = document.getElementsByName(`${name}`);
  pe.forEach((el) => {
    el.addEventListener('keydown', (e) => {
      document.querySelector(`#${e.target.id}`).classList.remove("form-error");
    });
  });
}

export {
  /**
   * get data
   * @function
   * @param {String} url -Its a url to connect with the backend.
   * @returns {object} Data wich came from the backend.
   */
  get,
  validation,
  cleanError,
  generaTemplate,
  /**
   * Print a google-map
   * @function
   * @param {String} data -Its the location to insert a marker.
   */
  initMap,
  /**
   * post data
   * @function
   * @param {String} url -Its a url to connect with the backend.
   * @returns {object} Status of the sending of information.
   */
  post
};