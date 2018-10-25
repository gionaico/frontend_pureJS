import {get} from '../utils';
import {Settings} from '../settings';
import {view} from '../views/home';
import {hero} from '../views/hero';
/* import img from '../../www/assets/media/shop-store.jpg' */
class HomeController {

    constructor() {
        
    }
  
    /** render  */
    static render() {

        let datos_empresa = 
            get(Settings.baseURL+'/home').then(function(response) {           
                let datosEmpresa=JSON.parse(response);
                try{
                    document.getElementById('main').innerHTML = hero("", './assets/media/shop-store.jpg') + view(datosEmpresa);
                }catch(e){
                    console.log("error")
                };
            }).catch(function(error) {
                console.log("Failed!", error);
            });
       
    }
}

export default HomeController;
