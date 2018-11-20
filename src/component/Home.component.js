
import {view} from '../views/cajas-home';
import { tarifa } from './common/tarifa.component';
import { sliderComponent } from './common/slider.component';
import { FgSlider } from '../classes/Slider.class';
import ViewComponent from "../classes/ViewComponent.class";

/**
 * This is the class HomeController extends ViewComponent
 * Show Home View.
 * @class 
 */
class HomeController extends ViewComponent {
    /** @constructs */
    constructor(obj) {
        console.log("HomeController---", obj, obj.currentLeng.lng, obj.cajas_home[0].lang)
        console.log("HomeController---", obj.cajas_home.filter(item => {
          if (item.lang == obj.currentLeng.lng) {
              return item
          }  
        }))
        super()
        /* this._cajas_home = obj.cajas_home; */
        this._sliderElements = obj.sliderElements;
        this._tarifas = obj.tarifas;
        this._cajas_home = obj.cajas_home.filter(item => {
            if (item.lang == obj.currentLeng.lng) {
                return item
            }
        })
        /* console.log(this._tarifas) */
        super.buildHtml(this.render(), "main", "home");
        new FgSlider('slider-1', {
            autoplay: false, // autoplay on / off
            effect: 'slide', // fade, scale, slide, slide-top
            duration: 10000, // duration till the next slide
            bullets: true, // show / hide bullets
        });
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

export default HomeController;