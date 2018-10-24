import {get} from './utils';

let hostBase = "http://localhost:8000"; 
let company;
let homeData;
let home_view;
let contact_view;

let functions=new Array
  /* 
  let functions = { "home": home(),
  "contact": contact()}
  functions["home"] = home();
  functions["contact"] = contact(); */
  

get(hostBase+'/datos_empresa').then(function(response) {
  company = JSON.parse(response)
  console.log("company", company);
  createHeader();
  createFooter();
  navegation();
  /* initMap(); */
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
      /* if (e.target.getAttribute("name")=="contact") {
        contact();
      }
      if (e.target.getAttribute("name") == "home") {
        home()
      } */
      /* functions[`${no}`]; */
      /* console.log("item", functions[`${no}`]); */
    }, false);
  }
};


function createHeader() {
  document.getElementById("header").innerHTML = `<a class="logo">${company.name}</a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  
      <ul class="menu">
        <li id="goHome" name="home" class="goTo pointer nav-item">
          <a class="nav-link" name="home">Home</a>
        </li>
  
        <li id="goContact" name="contact" class="goTo pointer nav-item">
          <a class="nav-link" name="contact">Contact</a>
        </li>
      </ul>`;
}


function createFooter() {
  document.getElementById("footer").innerHTML = `<div>
    <div class="gloriaGrid">
      <div class="elem1">
        <div class="elemsTitle">
          <p>${company.name} S.L.</p>
        </div>
        <div>
          <div>${company.name}</div>
          <div>${company.address},</div>
          <div>${company.zipcode} ${company.city}, ${company.province}, ${company.country}.</div>
          <div>${company.name}@info.com</div>
          <div>${company.phone}</div>
        </div>
      </div>

      <div class="elem2">
        <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit aliquid expedita dolorem pariatur
              amet nemo dicta, repudiandae totam, inventore natus.</div>
      </div>

      <div class="elem3">
        <div class="elemsTitle">
          <p>MISIÓN</p>
        </div>
        <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit aliquid expedita dolorem pariatur
              amet nemo dicta, repudiandae totam, inventore natus.</div>
      </div>

    </div>
  </div>`;
}


function initMap() {
  let location = { lat: parseFloat(company.location_lat), lng: parseFloat(company.location_long) };
  let map = new google.maps.Map(document.getElementById('map'), { zoom: 15, center: location });
  new google.maps.Marker({ position: location, map: map });
}

function home() {
  if (homeData) {
    if (!home_view ) {    
      home_view = `
      <h1 class="general-padding">${homeData[0].titulo}</h1>
      <div class="contact-container center-element">
        <div class="general-padding">${homeData[0].caja_derecha_texto}</div>
        <div class="general-padding">${homeData[0].caja_izquierda_texto}</div>
      </div>`; 
    }
    document.getElementById("result").innerHTML = home_view;
    history.pushState('', '', "/home");
  }
}

function contact() {
  if (homeData) {
    console.log(company,"contact")
    if (!contact_view) {
      contact_view = `<div>
                        <h1>contact</h1>
                        <div>div uno</div>
                        <div id="map" width="100%" style="height:500px"></div>
                      </div>`;
    }
    document.getElementById("result").innerHTML = contact_view;
    history.pushState("", "", "/contact");
    initMap();
  }
}


















