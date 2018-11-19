import ViewComponent from "../classes/ViewComponent.class";
import {hero} from './common/hero.component';
import {tarifaDetails} from './common/tarifaDetails.component';

/**
 * This is the class TarifaDetailsController extends ViewComponent
 * Show Tarifa-Details View.
 * @class 
 */
class TarifaDetailsController extends ViewComponent{
    /** @constructs */
    constructor(obj) {
        super()
        this._tarifa = obj.tarifas;
        super.buildHtml(this.render(), "main", "TarifaDetailsController");
    }  
    
    
    /**
     * Render in the element with class main the home wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    /* ${hero("Nuestras Tarifas", "grad")} */
    render() {
        return `
            ${hero(`Tarifa ${this._tarifa.nombretarifa}`, "grad")}
            ${tarifaDetails(this._tarifa)}
            `            
    }
}

export default TarifaDetailsController;