import {get, generaTemplate} from '../utils';
import {Settings} from '../settings';
import {view} from '../views/contact';
import {hero} from '../views/hero';
import {initMap} from '../utils';

class ContactController {

    constructor() {
        
    }
  
    /** render  */
    static render() {

        let datos_empresa = 
            get(Settings.baseURL + '/datos_empresa').then(function (response) {
                let datosEmpresa=JSON.parse(response);
                try{
                    document.getElementById('main').innerHTML = hero("CONTACT")+view(datosEmpresa);
                    initMap(datosEmpresa);
                }catch(e){
                    console.log("error")
                };
            }).catch(function(error) {
                console.log("Failed!", error);
            });
       
    }
}

export default ContactController;
