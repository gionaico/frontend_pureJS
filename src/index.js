import {Router} from './router.js'; //Knows what to do for every single URL 
import HomeController from './component/Home.component';
import ContactController from './component/Contact.component';
import TarifasController from './component/Tarifas.component';
import TarifaDetailsController from './component/TarifaDetails.component';
import CatalogoController from './component/Catalogo.component';
import AvisoLegalController from './component/AvisoLegal.component';
import PoliticaCookiesController from './component/PoliticaCookies.component';
import HeaderController from './component/header.component';
import FooterController from './component/footer.component';

import {footer} from './views/footer';
import {get, initMap, checkLng, createCookie, checkLng2} from './utils';

/**
 * @file Manages the what go to print in the main section.
 */

Router
  .add(/avisoLegal/, function () {
    new AvisoLegalController(checkLng());
  })
  .add(/cookies/, function () {
    /* console.log("cookies"); */
    new PoliticaCookiesController();
  })
  .add(/contact/, function () {
    contactView();
  })
  .add(/tarifas/, function () {
    tarifasView();
  })
  .add(/tarifa\/(.*)/, function () {
    console.log('uno', arguments, arguments["0"]);
    tarifaDetailsView(arguments["0"])
  })
  .add(/catalogo/, function () {
    catalogoView()
  })
  .listen()
  .add(/products\/(.*)\/edit\/(.*)/, function () {
    console.log('productsclick', arguments);
  })
  .add(/products\/(.*)\/edit\/(.*)/, function () {
    console.log('products2', arguments);
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
    let p=new HeaderController({
      "company": array[1],
      "label": 'header',
      "textos": checkLng()
    })

    let o = new FooterController({
      "company": array[1],
      "label": 'footer',
      "textos": checkLng()
    })
    
    let lenguage = document.getElementsByName(`lng_click`);
    lenguage.forEach((el) => {
      el.addEventListener('click', (e) => {
        createCookie("lng", e.target.id, 1)
        p.set(checkLng())
        console.log(window.location.href.substring(23))
        changeLenguageMain()
        /* console.log(1111111, e.target.id) */
      });
    });
    
    /* document.querySelector('footer').innerHTML = footer(array[1]); */

    homeView()
  /*console.log("values-------------",  p); */
  }).catch(reason => {
    console.log("DOMContentLoaded--------", reason)
  });
});

/** @function changeLenguageMain
*/
function changeLenguageMain() {
  let whereIam = window.location.href.substring(23);
  switch (whereIam) {
    case "contact":
      break;
    
    case "catalogo":
      break;
    case "tarifas":
      break;
    
    case "home":
      homeView()
      break;

    case "":
      homeView()
      break;
    
    case "cookies":
      break;

    case "avisoLegal":
      new AvisoLegalController(checkLng());
      break;
    
  
    default:
      break;
  }
}

/** @function homeView
 */
function homeView(contenido = checkLng()) {
  /* alert('homeView'); */
  Promise.all([get("/home/"), get("/datos_empresa/"), get("/tarifa/")]).then(values => {
    let array = [];
    values.forEach(element => {
      array.push(JSON.parse(element))
    });
    new HomeController({
      cajas_home: array[0],
      sliderElements: array[1].textos.filter(item => item.key.substring(0, 9) === "jumbotron"),
      tarifas: array[2].results.filter(item => item.destacado != false),
      textos: contenido,
      currentLeng: checkLng2()
    });
    /*console.log("values-------------",  p); */
  }).catch(reason => {
    console.log("Failed! index Home View", reason)
  });
}

/** @function contactView
 */
function contactView() {
  /* alert('contactView'); */
  get('/datos_empresa/').then(function (response) {
    console.log("funcion contact ")
    new ContactController({
      datosEmpresa:JSON.parse(response)
    });
    initMap(JSON.parse(response));
  }).catch(function (error) {
    console.log("Failed! index Contact View", error);
  });
}

/** @function tarifasView
 */
function tarifasView() {
  /* alert('contactView'); */
  get('/tarifa/').then(function (response) {
    let tar = JSON.parse(response)
    new TarifasController({
      tarifas: JSON.parse(response).results
    });
  }).catch(function (error) {
    console.log("Failed! index tarifas View", error);
  });
}

/** @function catalogoView
 */
function catalogoView() {
  Promise.all([get("/articulo/"), get("/filtros/")]).then(values => {
    let array = [];
    values.forEach(element => {
      array.push(JSON.parse(element))
    });
    new CatalogoController({
      artic: array[0].results,
      filters: array[1]
    });
    /*console.log("values-------------",  p); */
  }).catch(reason => {
    console.log("Failed! index tarifas View", error);
  });
}

/** @function tarifaDetailsView
 */
function tarifaDetailsView(slug) {
  get('/tarifa/').then(function (response) {
    let tar = JSON.parse(response)
    let filterTarifa = tar.results.filter(item => item.slug == slug)
    console.log(filterTarifa.length)
    if (filterTarifa.length > 0) {
      new TarifaDetailsController({
        tarifas: filterTarifa[0]
      });
    }    
  }).catch(function (error) {
    console.log("Failed! index tarifaDetails View", error);
  });
}

