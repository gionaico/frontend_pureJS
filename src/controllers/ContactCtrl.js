import {get, post} from '../utils';
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

                    let a1 = document.querySelector("#form__button").addEventListener("click", function (e) {
                        /* console.log("item", e)
                        console.log(e.target.getAttribute("name")) */
                        let datos = document.getElementsByClassName("form__dato")
                        console.log("datos[0]",datos[0].value)
                        console.log("datos[1]", datos[1].value)
                        console.log("datos[2]", datos[2].value)
                        console.log(datos.length)

                        let dat={
                            nombre:datos[0].value,
                            description: datos[1].value,
                            email: datos[2].value,
                            telefono: datos[3].value,
                        }
                        post(Settings.baseURL + '/contacto',dat ).then(function (response) {
                            console.log(response)
                        }).catch(function (error) {
                            console.log("Failed!", error);
                        });

                        alert("click")
                    }, false);
                }catch(e){
                    console.log("error")
                };
            }).catch(function(error) {
                console.log("Failed!", error);
            });

        
       
    }
}

export default ContactController;
