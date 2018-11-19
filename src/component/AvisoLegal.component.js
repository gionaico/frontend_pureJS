import {hero} from './common/hero.component';
import ViewComponent from "../classes/ViewComponent.class";

/**
 * This is the class AvisoLegalController extends ViewComponent
 * Show AvisoLegal View.
 * @class 
 */
class AvisoLegalController extends ViewComponent {
    /** @constructs */
    constructor(obj) {
        super()
        this._contenido=obj;
        /* console.log("AvisoLegalController-----",obj) */
        super.buildHtml(this.render(), "main", "AvisoLegalController");
    }

    /**
     * Change the languege in the view
     */
    setContenido(texto) {
        /* console.log(222222222222, texto) */
        this._contenido = texto;
        super.buildHtml(this.render(), "main", "AvisoLegalController");
    }
    /**
     * Render in the element with class main the AvisoLegal wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    render() {
        return `
        ${hero(`${this._contenido.avisoLegalHeroTitle}`, "grad")}
            
            <div class="avisoLegal-container center-element general-padding">
                <div>
                    <p class="avisoLegal-container__title avisoLegal-container__p-espacios">${this._contenido.avisoLegalTitle1}</p>
                    <p class="avisoLegal-container__p-espacios">${this._contenido.avisoLegalP1}</p>
                    <p class="avisoLegal-container__p-espacios">${this._contenido.avisoLegalP2}</p>
                    <p class="avisoLegal-container__p-espacios">${this._contenido.avisoLegalP3}</p>

                </div>

                <div>
                    <p class="avisoLegal-container__title avisoLegal-container__p-espacios">${this._contenido.avisoLegalTitle2}</p>
                    <p class="avisoLegal-container__p-espacios">${this._contenido.avisoLegalP5}</p>
                    <p class="avisoLegal-container__p-espacios">${this._contenido.avisoLegalP6}</p>
                    <p class="avisoLegal-container__p-espacios">${this._contenido.avisoLegalP7}</p>
                </div>

                <div>
                    <p class="avisoLegal-container__title avisoLegal-container__p-espacios">${this._contenido.avisoLegalTitle3}</p>
                    <p class="avisoLegal-container__p-espacios">${this._contenido.avisoLegalP8}</p>
                    <p class="avisoLegal-container__p-espacios">${this._contenido.avisoLegalP2}</p>
                </div>

                <div>
                    <p class="avisoLegal-container__title avisoLegal-container__p-espacios">${this._contenido.avisoLegalTitle4}</p>
                    <p class="avisoLegal-container__p-espacios">${this._contenido.avisoLegalP8}.</p>
                </div>
            </div>
        `;      
       
    }
}

export default AvisoLegalController;
