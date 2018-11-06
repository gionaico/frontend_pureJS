import {get, post} from '../utils';
import {Settings} from '../settings';
import {view} from '../views/politicaCookies';
import {hero} from '../views/component/hero';

/** Class representing the PoliticaCookies view. */
class PoliticaCookiesController {

    constructor() {
        
    }
  
    /**
     * Render in the element with class main the PoliticaCookies wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    static render() {

        try{
            document.getElementById('main').innerHTML = hero("Política de Cookies en Wifibytes", "grad") + view("data");

        }catch(e){
            console.log("error")
        };       
       
    }
}

export default PoliticaCookiesController;
