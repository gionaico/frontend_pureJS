import {Settings} from './settings';

/**
 * This is a variable to save data and do not make a request when already it has the information in this variable
 */
function createCookie(key, value, exp=5) {
    let fecha = new Date();
    fecha.setFullYear(fecha.getFullYear() + exp);
    /* document.cookie = `lng=eng; expires=${fecha.toString()}`; */
    document.cookie = `${key}=${value}; expires=${fecha.toString()}`;
}

function readCookie(name) {
  return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}


function resetLocalStorage(local_name, array=[]) {
  localStorage.setItem(local_name, JSON.stringify(array))
}

function checkLocalStorage() {
  try {    
    let local = localStorage.getItem("templeates");
    if (JSON.parse(local)) 
      return JSON.parse(local);
    /* resetLocalStorage("templeates"); */
    return [];
  } catch (error) {
    /* resetLocalStorage("templeates"); */
    return [];
  }
}

function setLocalStorage(oldLocalObj, newLocalObj) {
  let arrayFiltrado = oldLocalObj.filter(item => item.url === newLocalObj.url);
  let nuevo=[];

  if (arrayFiltrado.length>0) {
    oldLocalObj.forEach(element => {
      if (elem.url===newLocalObj.url) {
        elem.contenido = newLocalObj.contenido
      }
      nuevo.push(elem)
    });    
    resetLocalStorage("templeates", nuevo);
  }else{
    oldLocalObj.push(newLocalObj)
    resetLocalStorage("templeates", oldLocalObj)
  }
  
}
function checkLng() {
  let lng = readCookie("lng");
  let textos;
  if (lng==null) {
    createCookie("lng", "es", 1);
    lng="es";
  }
  textos = require(`./lib/i18n/${lng}.json`)
  return textos; 
}

function get(url) {
  let local= checkLocalStorage()
  /* console.log(checkLng(), window.location.href) */

  return new Promise(function (resolve, reject) {
    let filterRoute = local.filter(item => item.url === url)
    if (filterRoute.length > 0) {
      console.log("CACHE", local)
      resolve(filterRoute[0].contenido);
    } else {
      console.log("fuera cache", local)
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('GET', Settings.baseURL+url);

      req.onload = function () {
        // This is called even on 404 etc so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          setLocalStorage(local, {
            url: url,
            contenido: req.response
          });
          resolve(req.response);
        } else {
          // Otherwise reject with the status text --- which will hopefully be a meaningful error
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

function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function getCookie2(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
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
  post,
  checkLng,
  createCookie,
  readCookie
};