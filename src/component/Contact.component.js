import {view} from '../views/contact';
import {hero} from './common/hero.component';
import {validation, cleanError} from '../utils';
import ViewComponent from "../classes/ViewComponent.class";

/**
 * This is the class ContactController extends ViewComponent
 * Show Contact View.
 * @class 
 */
class ContactController extends ViewComponent {
    /** @constructs */
    constructor(obj) {
        super()
        this._datosEmpresa = obj.datosEmpresa;
        super.buildHtml(this.render(), "main", "contact");
        document.querySelector("#form__button").addEventListener("click", function (e) {
            let dat = {
                nombre: document.getElementById("nombre").value,
                tlf: document.getElementById("tlf").value,
                email: document.getElementById("email").value,
                comentario: document.getElementById("comentario").value,
            }
            if (validation(dat)) {
                alert("Tus mensaje a sido enviado");
            }
            
        }, false);
        cleanError("contact-data");
            
        
    }

  
  
    /**
     * Render in the element with class main the contact wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    render() {
        return `
            ${hero("CONTACT", "grad")}
            ${view(this._datosEmpresa)}            
            `                    
    }
}

export default ContactController;
