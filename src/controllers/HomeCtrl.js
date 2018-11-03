import {get} from '../utils';
import {Settings} from '../settings';
import {view} from '../views/home';
import {hero} from '../views/hero';
import { tarifa } from '../views/component/tarifa';
import { sliderComponent } from '../views/component/slider.componment';
import { FgSlider } from '../classes/Slider.class';

class HomeController {
    constructor() {
        
    }
  
    /** render  */
    static render() {

        let datos_empresa = 
            get(Settings.baseURL+'/home').then(function(response) {           
                let datosEmpresa=JSON.parse(response);
                try{
                    /* document.getElementById('main').innerHTML = hero("", './assets/media/shop-store.jpg') + view(datosEmpresa); */

                    let f=[1,2,3,4,5,6];
                    document.getElementById('main').innerHTML = sliderComponent(f) + view(datosEmpresa);
                    
                    new FgSlider('slider-1', {
                        autoplay: false, // autoplay on / off
                        effect: 'slide', // fade, scale, slide, slide-top
                        duration: 5000, // duration till the next slide
                        bullets: true, // show / hide bullets
                    });

                }catch(e){
                    console.log("error")
                };
            }).catch(function(error) {
                console.log("Failed!", error);
            });

        let tarifas =
            get(Settings.baseURL + '/tarifa').then(function (response) {
                let tarifas = JSON.parse(response);
                try {
                    let r="";
                    tarifas.results.forEach(element => {
                        r=r+tarifa(element)
                    });
                        
                    document.getElementById('tarifas-container').innerHTML = r;
                    console.log(r)
                    console.log(tarifas);
                } catch (e) {
                    console.log("error")
                };
            }).catch(function (error) {
                console.log("Failed!", error);
            });

        /* new FgSlider('slider-1', {
            autoplay: false, // autoplay on / off
            effect: 'slide', // fade, scale, slide, slide-top
            duration: 5000, // duration till the next slide
            bullets: true, // show / hide bullets
        }); */
       
    }
}

export default HomeController;
