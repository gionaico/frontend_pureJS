import {get, post} from '../utils';
import {Settings} from '../settings';
import {view} from '../views/avisoLegal';
import {hero} from '../views/hero';

class AvisoLegalController {

    constructor() {
        
    }
  
    /** render  */
    static render() {

        try{
            document.getElementById('main').innerHTML = hero("Condiciones generales de uso del sitio web WIFIBYTES S.L.", "grad") + view("data");

        }catch(e){
            console.log("error")
        };       
       
    }
}

export default AvisoLegalController;
