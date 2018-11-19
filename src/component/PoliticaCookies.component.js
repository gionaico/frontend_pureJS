import {hero} from './common/hero.component';
import ViewComponent from "../classes/ViewComponent.class";

/**
 * This is the class PoliticaCookiesController extends ViewComponent
 * Show PoliticaCookies View.
 * @class 
 */
class PoliticaCookiesController extends ViewComponent {
    /** @constructs */
    constructor() {
        super()
        super.buildHtml(this.render(), "main", "PoliticaCookiesController");
    }
  
    /**
     * Render in the element with class main the PoliticaCookies wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    render() {
        return `
            ${hero("Politica De Cookies", "grad")}
            
            <div class="avisoLegal-container center-element general-padding">
                <div>
                    <p class="avisoLegal-container__title avisoLegal-container__p-espacios">Política de Cookies en Smile-Phone</p>

                    <p class="avisoLegal-container__p-espacios"> Nuestro sitio web http: //wifibytes-front.wearecactus.com/#/ utiliza una tecnología denominada “cookies”, con la finalidad de poder recabar información acerca del uso del sitio web.</p>
                    
                    <p class="avisoLegal-container__p-espacios">Le informamos que vamos a utilizar cookies con la finalidad de facilitar su navegación a través del sitio Web, distinguirle de otros usuarios, proporcionarle una mejor experiencia en el uso del mismo, e identificar problemas para mejorar nuestro Sitio Web. Asimismo, en caso de que preste su consentimiento a través de su navegación, utilizaremos cookies que nos permitan obtener más información acerca de sus preferencias y personalizar nuestro sitio Web de conformidad con sus intereses individuales.</p>

                    <p class="avisoLegal-container__p-espacios">La presente Política de Cookies tiene por finalidad informarle de manera clara y precisa sobre las cookies que se utilizan en el sitio Web. En caso de que quiera recabar más información sobre las cookies que utilizamos en el sitio Web, podrá remitir un correo electrónico a la siguiente dirección: info@wifibytes.com</p>

                </div>

                <div>
                    <p class="avisoLegal-container__title avisoLegal-container__p-espacios">¿Qué son las cookies?</p>
                    
                    <p class="avisoLegal-container__p-espacios">Una cookie es un pequeño fragmento de texto que los sitios web que visita envían al navegador y que permite que el sitio web recuerde información sobre su visita, idioma preferido y otras opciones, lo que puede facilitar su próxima visita y hacer que el sitio le resulte más útil. Las cookies desempeñan un papel muy importante y contribuyen a tener una mejor experiencia de usuario.</p>
                </div>

                <div>
                    <p class="avisoLegal-container__title avisoLegal-container__p-espacios">¿Quién utiliza las cookies de Smile-Phone?</p>
                    
                    <p class="avisoLegal-container__p-espacios">A continuación se muestra el listado de empresas (Terceros), que hacen uso de las cookies:</p>

                    <p class="avisoLegal-container__p-espacios">Google Analytics, permiten cuantificar el número de visitantes y analizar estadísticamente la utilización que hacen los usuarios de nuestros servicios</p>
                </div>

                <div>
                    <p class="avisoLegal-container__title avisoLegal-container__p-espacios">Consentimiento</p>
                    
                    <p class="avisoLegal-container__p-espacios">Al navegar y continuar en el sitio Web estará consintiendo el uso de las cookies antes enunciadas, por los plazos señalados y en las condiciones contenidas en la presente Política de Cookies.</p>

                    <p class="avisoLegal-container__p-espacios">Puedes obtener más información sobre nosotros a través de nuestro aviso legal, nuestra política de privacidad, o mediante correo electrónico dirigido a la dirección: info@smile-phone.com</p>
                </div>
            </div>
        `;
       
    }
}

export default PoliticaCookiesController;
