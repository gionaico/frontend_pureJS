import ViewComponent from "../classes/ViewComponent.class";
import {hero} from './common/hero.component';
import {articulo} from './common/articulos.component';

/** Class representing the Catalogo view. */
export default class CatalogoController extends ViewComponent {

    constructor(obj) {
        console.log("CatalogoController---", obj)
        super()
        this._articulos = obj.artic;
        this._filters = obj.filters;
        super.buildHtml(this.render(), "main", "CatalogoController");
        this.printSelectOption()
        let ob={}
        let pe = document.getElementsByName(`filter`);
        pe.forEach((el) => {
            el.addEventListener('change', (e) => {
                ob[`${e.target.id}`] =  `${e.target.value}`;
                if (e.target.value === "todo") {
                    console.log("entra en delete")
                    delete ob[`${e.target.id}`]
                }

                let uno = this._articulos;
                let dos;
                if (Object.keys(ob).length>0) {
                    for (const key in ob) {
                        dos= uno.filter(item => {
                            if (item[key] == ob[key]) {
                                return item
                            }
                        });
                        uno=dos;
                    }
                }
                document.getElementById("article-container").innerHTML = articulo(uno);
                /* let nuevosArt = this._articulos.filter(item => {
                    for (const key in ob) {
                        if (item[key] == ob[key]) {
                            return item
                        }
                    }
                });  */
                /* console.log("pillando e", e.target.id, e.target.value, ob, nuevosArt) */
                console.log(Object.keys(ob).length, "pillando e", e.target.id, e.target.value, ob, "dos---", dos, "uno----", uno)
            });
        });

        let vm=this;
    }  
    
    printSelectOption(){
        let obj=this._filters;
        let element=[];
        for (const key in obj) {
            let options = obj[key].map((item) => {
                switch (key) {
                    case "pantalla":
                        return `
                            <option value="${item.id}">${item.num_pantalla}</option>`
                        break;
                    case "procesador":
                        return `
                            <option value="${item.id}">${item.num_procesador}</option>`
                        break;
                    case "marca":
                        return `
                            <option value="${item.id}">${item.Marca}</option>`
                        break;
                    case "camara":
                        return `
                            <option value="${item.id}">${item.num_camara}</option>`
                        break;
                    case "ram":
                        return `
                            <option value="${item.id}">${item.num_ram}</option>`
                        break;
                    
                    default:
                        return `
                        <div class="cajaTarifa">
                        
                        </div>`
                }                
            });

            let e = `
                <div>
                    <p>${key}</p>
                    <select id="${key}" name="filter">
                        <option value="todo">Todo</option>
                        ${options.join('')}
                    </select> 
                </div>`
            element.push(e);
        }
        /* console.log(element.join('')) */
        return element.join('')
    }

    /**
     * Render in the element with class main the home wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    render() {
        return `
            ${hero("Catalogo", "grad")}

            <div class="article-filter">
                ${this.printSelectOption()}
            </div>

            <div id="article-container" class="article-container">
                ${articulo(this._articulos)}
            </div>
            `            
    }
}
