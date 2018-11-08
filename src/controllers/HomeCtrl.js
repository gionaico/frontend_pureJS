import {get} from '../utils';
import {Settings} from '../settings';
import {view} from '../views/home';
import {hero} from '../views/component/hero';
import { tarifa } from '../views/component/tarifa';

import { sliderComponent } from '../views/component/slider.componment';
import { FgSlider } from '../classes/Slider.class';


/** Class representing the Home view. */
class HomeController {
    constructor() {
        
    }  
    
    /**
     * Render in the element with class main the home wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    static render() {

        let cajas_home =
            get(Settings.baseURL+'/home').then(function(response) {           
                let cajas_home=JSON.parse(response);
                try{
                    /* document.getElementById('main').innerHTML = hero("", './assets/media/shop-store.jpg') + view(cajas_home); */
                    console.log("cajas_home----------------------",cajas_home)
                    document.getElementById('main').innerHTML = view(cajas_home);                  
                }catch(e){
                    console.log("error")
                };
            }).catch(function(error) {
                console.log("Failed!", error);
            });
        
        let datos_empresa =
            get(Settings.baseURL + '/datos_empresa').then(function (response) {
                let datos_empresa = JSON.parse(response);
                try {
                    /* document.getElementById('main').innerHTML = hero("", './assets/media/shop-store.jpg') + view(datos_empresa); */
                    console.log("datos_empresa----------------------", datos_empresa.textos)
                    document.getElementById('main').insertAdjacentHTML("afterbegin", sliderComponent(datos_empresa.textos));
                    new FgSlider('slider-1', {
                        autoplay: false, // autoplay on / off
                        effect: 'slide', // fade, scale, slide, slide-top
                        duration: 10000, // duration till the next slide
                        bullets: true, // show / hide bullets
                    });
                } catch (e) {
                    console.log("error")
                };
            }).catch(function (error) {
                console.log("Failed!", error);
            });

        let tarifas =
            get(Settings.baseURL + '/tarifa').then(function (response) {
                try {
                    let tarifas = JSON.parse(response);
                    /* console.log ("tarifas",tarifas) */
                    let tarifasDestacadas = tarifas.results.filter(item => item.destacado != false);
                    document.getElementById('tarifas-container').innerHTML =tarifa(tarifasDestacadas);
                    console.log("tarifasDestacadas", tarifasDestacadas)
                    
                } catch (e) {
                    console.log("error")
                };
            }).catch(function (error) {
                console.log("Failed!", error);
            });
    }
}

export default HomeController;
