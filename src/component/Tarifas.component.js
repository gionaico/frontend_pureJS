import ViewComponent from "../classes/ViewComponent.class";
import {hero} from './common/hero.component';
import { tarifa } from './common/tarifa.component';
/** Class representing the Home view. */
export default class TarifaController extends ViewComponent{

    constructor(obj) {
        console.log("tarifas", obj)
        super()
        this._tarifas = obj.tarifas;
        super.buildHtml(this.render(), "main", "TarifaController");
    }  
    
    
    /**
     * Render in the element with class main the home wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    render() {
        return `
            ${hero("Nuestras Tarifas", "grad")}
            <div class="tarifas-container center-element margin-elements" id="tarifas-container">        
                ${tarifa(this._tarifas)}
            </div>
            `            
    }
}

