import {view} from '../views/cajas-home';
import { tarifa } from './common/tarifa.component';
import { sliderComponent } from './common/slider.component';
import { FgSlider } from '../classes/Slider.class';

/** Class representing the Home view. */
export default class HomeController {

    constructor(obj) {
        /* console.log(obj) */
        this._cajas_home = obj.cajas_home;
        this._sliderElements = obj.sliderElements;
        this._tarifas = obj.tarifas;
    
        try {
            document.getElementById("main").innerHTML = this.render();
            new FgSlider('slider-1', {
                autoplay: false, // autoplay on / off
                effect: 'slide', // fade, scale, slide, slide-top
                duration: 10000, // duration till the next slide
                bullets: true, // show / hide bullets
            });
        } catch (e) {
            console.log("error ctrl HOME", e)
        };
    }  
    
    
    /**
     * Render in the element with class main the home wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    render() {
        return `
            ${sliderComponent(this._sliderElements )}
            <div class="tarifas-container center-element margin-elements" id="tarifas-container">        
                ${tarifa(this._tarifas)}
            </div>
            
            <div>
                ${view(this._cajas_home)}
            <div>`
    }
}

