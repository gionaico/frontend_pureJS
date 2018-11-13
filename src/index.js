import {Router} from './router.js'; //Knows what to do for every single URL 
import HomeController from './component/Home.component';
import ContactController from './component/Contact.component';
import AvisoLegalController from './component/AvisoLegal.component';
import PoliticaCookiesController from './component/PoliticaCookies.component';
import {header} from './views/header';
import {footer} from './views/footer';
import {get, initMap} from './utils';


Router
  .add(/contact/, function () {
    contactView();
  })
  .add(/cookies/, function () {
    console.log("cookies");
    new PoliticaCookiesController();
  })
  .add(/avisoLegal/, function () {
    console.log("avisoLegal");
    new AvisoLegalController();
  }).listen()
  .add(/products\/(.*)\/edit\/(.*)/, function () {
    console.log('products', arguments);
  })
  .add(/products\/(.*)\/edit\/(.*)/, function () {
    console.log('products', arguments);
  })
  .add(function () {
    homeView();
});


document.addEventListener("DOMContentLoaded", function () {  
  Promise.all([get("/home/"), get("/datos_empresa/"), get("/tarifa/")]).then(values => {
    let array=[];
    values.forEach(element => {
      array.push(JSON.parse(element))
    });
    document.querySelector('header').innerHTML = header(array[1]);
    document.querySelector('footer').innerHTML = footer(array[1]);
    
    new HomeController({
          cajas_home: array[0],
          sliderElements: array[1].textos,
          tarifas: array[2].results.filter(item => item.destacado != false)
          });
  /*console.log("values-------------",  p); */
  }).catch(reason => {
    console.log("reasonInicial--------", reason)
  });
});





function homeView(){
  alert('homeView');
  Promise.all([get("/home/"), get("/datos_empresa/"), get("/tarifa/")]).then(values => {
    let array = [];
    values.forEach(element => {
      array.push(JSON.parse(element))
    });
    new HomeController({
      cajas_home: array[0],
      sliderElements: array[1].textos.filter(item => item.key.substring(0, 9) === "jumbotron"),
      tarifas: array[2].results.filter(item => item.destacado != false)
    });
    /*console.log("values-------------",  p); */
  }).catch(reason => {
    console.log("reasonhome--------", reason)
  });
}

function contactView() {
  alert('homeView');
  get('/datos_empresa/').then(function (response) {
    console.log("funcion contact ")
    new ContactController({
      datosEmpresa:JSON.parse(response)
    });
    initMap(JSON.parse(response));
  }).catch(function (error) {
    console.log("Failed! contact", error);
  });
}






























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