import {view} from '../views/contact';
import {hero} from './common/hero.component';
import {validation, cleanError} from '../utils';

/** Class representing the Contact view. */
class ContactController {

    constructor(obj) {
        this._datosEmpresa = obj.datosEmpresa;
        try {
            document.getElementById("main").innerHTML = this.render();
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
            
        } catch (e) {
            console.log("error ctrl HOME", e)
        };
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
