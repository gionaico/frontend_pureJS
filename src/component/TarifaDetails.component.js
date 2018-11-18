import ViewComponent from "../classes/ViewComponent.class";
import {hero} from './common/hero.component';
/** Class representing the Home view. */
export default class TarifaDetailsController extends ViewComponent{

    constructor(obj, tarifa) {
        console.log("tarifas", obj)
        super()
        /* this._tarifas = obj.tarifas; */
        super.buildHtml(this.render(), "main", "TarifaDetailsController");
    }  
    
    
    /**
     * Render in the element with class main the home wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    /* ${hero("Nuestras Tarifas", "grad")} */
    render() {
        return `
            <div class="tarifas-container center-element margin-elements" id="tarifas-container">        
                dsssssssssssssssssssssssssssssssssssssssssssss
            </div>
            `            
    }
}

