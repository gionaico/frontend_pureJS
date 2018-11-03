import {get, post} from '../utils';
import {Settings} from '../settings';
import {view} from '../views/politicaCookies';
import {hero} from '../views/hero';

class PoliticaCookiesController {

    constructor() {
        
    }
  
    /** render  */
    static render() {

        try{
            document.getElementById('main').innerHTML = hero("Política de Cookies en Wifibytes", "grad") + view("data");

        }catch(e){
            console.log("error")
        };       
       
    }
}

export default PoliticaCookiesController;
