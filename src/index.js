import {Router} from './router.js'; //Knows what to do for every single URL 
import HomeController from './controllers/HomeCtrl';
import ContactController from './controllers/ContactCtrl';
import AvisoLegalController from './controllers/AvisoLegalCtrl';
import PoliticaCookiesController from './controllers/PoliticaCookiesCtrl';
import {header} from './views/header';
import {footer} from './views/footer';
import {get} from './utils';
/* Settings sustituye a hotBase como ruta hacia backend */
import {Settings} from './settings';

Router
  .add(/contact/, function () {
    console.log("Contact");
    ContactController.render();
  })
  .add(/cookies/, function () {
    console.log("cookies");
    PoliticaCookiesController.render();
  })
  .add(/avisoLegal/, function () {
    console.log("avisoLegal");
    AvisoLegalController.render();
  }).listen()
  .add(/products\/(.*)\/edit\/(.*)/, function () {
    console.log('products', arguments);
  })
  .add(/products\/(.*)\/edit\/(.*)/, function () {
    console.log('products', arguments);
  })
  .add(function () {
    console.log('default');
    HomeController.render();
});
console.log(Router)
HomeController.render();


let d = get(Settings.baseURL + '/datos_empresa').then(function (response) {
  let datosEmpresa = JSON.parse(response);
  console.log(datosEmpresa);
  document.querySelector('header').innerHTML = header(datosEmpresa);
  document.querySelector('footer').innerHTML = footer(datosEmpresa);
}).catch(function (error) {
  console.log("Failed!", error);
});































/* get(hostBase+'/datos_empresa').then(function(response) {
  company = JSON.parse(response)
  console.log("company", company);
  createHeader();
  createFooter();
  navegation();
  }).catch(function(error) {
    console.log("Failed!", error);
})

get(hostBase + '/home').then(function (response) {
  homeData = JSON.parse(response);
  home();
  console.log("homeData",homeData[0]);
  
}).catch(function (error) {
  console.log("Failed!", error);
})


function navegation (a, b) {
  let a1 = document.getElementsByClassName("goTo");
  for (var item of a1) {
    item.addEventListener("click", function (e) {
      console.log("item", e)
      console.log(e.target.getAttribute("name"))
      document.getElementById("result").innerHTML = "";
      eval(`${e.target.getAttribute("name")}();`);
      
    }, false);
  }
}; */

/* 
function initMap(data) {
  let location = { lat: parseFloat(data.location_lat), lng: parseFloat(data.location_long) };
  let map = new google.maps.Map(document.getElementById('map'), { zoom: 15, center: location });
  new google.maps.Marker({ position: location, map: map });
}

function home() {
  if (!home_view) {
    
    home_view = `
    <h1 class="general-padding">${homeData[0].titulo}</h1>
    <div class="contact-container center-element">
      <div class="general-padding">${homeData[0].caja_derecha_texto}</div>
      <div class="general-padding">${homeData[0].caja_izquierda_texto}</div>
    </div>`; 
  }
  document.getElementById("result").innerHTML = home_view;
}

function contact() {
  console.log(company,"contact")
  if (!contact_view) {
    contact_view = `<div>
                      <h1>contact</h1>
                      <div>div uno</div>
                      <div id="map" width="100%" style="height:500px"></div>
                    </div>`;
  }
  document.getElementById("result").innerHTML = contact_view;
  initMap();
} */