const index=require('../src/index.js');
const $ = require('jquery');

import {view  as home} from '../src/views/cajas-home';
import {view  as contact} from '../src/views/contact';
import {footer} from '../src/views/footer';

import {hero} from '../src/component/common/hero.component';
import {tarifa} from '../src/component/common/tarifa.component';
import {sliderComponent} from '../src/component/common/slider.component';

import {datos} from './datos';


beforeEach(() => {
  // Set up our document body
  document.body.innerHTML = `
    <div id="mainFaker">

    <div>`;
    
  function fakeDOMLoaded() {
    const fakeEvent = document.createEvent('Event');

    fakeEvent.initEvent('DOMContentLoaded', true, true);
    window.document.dispatchEvent(fakeEvent);
  }

  fakeDOMLoaded();
});



test('This test check if the ---FOOTER--- function return a string and it is using the json data.', () => {
  let company = datos.company;
  let footerView = footer(company);

  $("#mainFaker").append(footerView);
  let companyName = $("#companyName").html();
  expect(companyName).toBe(company.name);
});

test('This test check if the ---HOME--- function return a string and it is using the json data.', () => {
  let homeLet = datos.home;
  let homeWiew = home(homeLet);

  $("#mainFaker").append(homeWiew);
  let homeName = $("#cajaDerTit").html();
  expect(homeName).toBe(homeLet[0].caja_derecha_titulo);
});

test('This test check if the ---CONTACT--- function return a string and it is using the json data.', () => {
  let contactWiew = contact("contactLet");

  $("#mainFaker").append(contactWiew);
  let contactName = $("#form__button").html();
  expect(contactName).toBe("Enviar");
});


test('This test check if the ---HERO/COMPONENT--- function return a string and it is using the json data.', () => {
  let heroCom = hero("titulo de hero", "background:red");

  $("#mainFaker").append(heroCom);
  let titulo = $(".titleHero").html();
  expect(titulo).toBe("titulo de hero");
});


test('This test check if the ---SLIDER--- function return a string and it is using the json data.', () => {
  let datos=[
    {
      key:"prueba de envio",
      img:"url de la imagen"
    }
  ];
  let sliderCom = sliderComponent(datos);
  $("#mainFaker").append(sliderCom);
  let titulo = $(".div-slide__caja-title").html();
  expect(titulo).toBe("envio");
});


test('This test check if the ---TARIFA-VIEW--- function return a string and it is using the json data.', () => {

  let tarifaCom = tarifa(datos.tarifa);
  $("#mainFaker").append(tarifaCom);
  let titulo = $("#pWifi").html();
  expect(titulo).toBe("wifi");
});

/* test('This test check if the ---COOKIES-VIEW--- function return a string and it is using the json data.', () => {
  let politicaCookiesView = politicaCookies("datos");
  $("#mainFaker").append(politicaCookiesView);
  let titulo = $(".avisoLegal-container__title").html();
  expect(titulo).toBe("DATOS GENERALES");
});
 */
