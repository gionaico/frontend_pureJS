import {get, post} from '../utils';
import {Settings} from '../settings';
import {view} from '../views/avisoLegal';
import {hero} from '../views/component/hero';

/** Class representing the AvisoLegal view. */
class AvisoLegalController {

    constructor() {
        
    }
  
    /**
     * Render in the element with class main the AvisoLegal wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    static render() {
        try{
            document.getElementById('main').innerHTML = hero("Condiciones generales de uso del sitio web WIFIBYTES S.L.", "grad") + view("data");
        }catch(e){
            console.log("error")
        };       
       
    }
}

export default AvisoLegalController;
