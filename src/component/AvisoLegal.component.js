import {hero} from './common/hero.component';
import ViewComponent from "../classes/ViewComponent.class";

/** Class representing the AvisoLegal view. */
class AvisoLegalController extends ViewComponent {

    constructor() {
        super()
        super.buildHtml(this.render(), "main", "AvisoLegalController");
    }
    /**
     * Render in the element with class main the AvisoLegal wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    render() {
        return `
        ${hero("Condiciones generales de uso del sitio web Smile-Phone S.L.", "grad")}
            
            <div class="avisoLegal-container center-element general-padding">
                <div>
                    <p class="avisoLegal-container__title avisoLegal-container__p-espacios">DATOS GENERALES</p>

                    <p class="avisoLegal-container__p-espacios">De acuerdo con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico ponemos a su disposición los siguientes datos: </p>
                    
                    <p class="avisoLegal-container__p-espacios">Smile-Phone SL. está domiciliada en la calle C/Batalla de Lepanto nº5, Bajo (Bocairent), con CIF B98137078.Inscrita en el Registro Mercantil de Valencia, Vol .9030 , Folio 34, Hoja V-.133779, Inscripción 4ª.</p>

                    <p class="avisoLegal-container__p-espacios">Su principal objetivo es facilitar a los clientes y al público en general, la información relativa a la empresa, a los productos y servicios que se ofrecen .</p>

                </div>

                <div>
                    <p class="avisoLegal-container__title avisoLegal-container__p-espacios">POLÍTICA DE PRIVACIDAD</p>
                    
                    <p class="avisoLegal-container__p-espacios">En cumplimiento de lo dispuesto en la Ley Orgánica 15/1999, de 13 de Diciembre, de Protección de Datos de Carácter Personal (LOPD) se informa al usuario que todos los datos que nos proporcione serán incorporados a un fichero, creado y mantenido bajo la responsabilidad de Wifibytes SL</p>

                    <p class="avisoLegal-container__p-espacios">Siempre se va a respetar la confidencialidad de sus datos personales que sólo serán utilizados con la finalidad de gestionar los servicios ofrecidos, atender a las solicitudes que nos plantee, realizar tareas administrativas, así como remitir información técnica, comercial o publicitaria por vía ordinaria o electrónica.</p>

                    <p class="avisoLegal-container__p-espacios">Para ejercer sus derechos de oposición, rectificación o cancelación deberá dirigirse a la sede de la empresa C/Batalla de Lepanto, nº5 Bajo (Bocairent), escribirnos al siguiente correo info@wifibytes.com o llámanos al 960 500 606</p>
                </div>

                <div>
                    <p class="avisoLegal-container__title avisoLegal-container__p-espacios">CONDICIONES DE USO</p>
                    
                    <p class="avisoLegal-container__p-espacios">Las condiciones de acceso y uso del presente sitio web se rigen por la legalidad vigente y por el principio de buena fe comprometiéndose el usuario a realizar un buen uso de la web. No se permiten conductas que vayan contra la ley, los derechos o intereses de terceros.</p>

                    <p class="avisoLegal-container__p-espacios">Cualquier tipo de notificación y/o reclamación solamente será válida por notificación escrita y/o correo certificado.</p>
                </div>

                <div>
                    <p class="avisoLegal-container__title avisoLegal-container__p-espacios">LEY APLICABLE Y JURISDICCIÓN</p>
                    
                    <p class="avisoLegal-container__p-espacios">Las presentes condiciones generales se rigen por la legislación española. Para cualquier litigio que pudiera surgir relacionado con el sitio web o la actividad que en él se desarrolla serán competentes Juzgados de Ontinyent, renunciando expresamente el usuario a cualquier otro fuero que pudiera corresponderle.</p>                    
                </div>
            </div>
        `;      
       
    }
}

export default AvisoLegalController;
