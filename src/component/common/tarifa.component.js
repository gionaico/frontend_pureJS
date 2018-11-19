/** @module tarifa/html */

let tarifa = function (tarifas) {
    console.log("tarifas component", tarifas)
    let subtarifa= function (array) {
        return array.map((item, i) => {
            switch (item.tipo_tarifa) {
                case 5://tv
                    return`
                        <div class="cajaTarifa">
                            <p class="tituloSubtarifa" >TV</p>
                            <p class="contenidoSubtarifa">Canales: ${item.subtarifa_num_canales}</p>
                        </div>`
                    break;
                case 4://internet
                    return`
                        <div class="cajaTarifa">
                            <p class="tituloSubtarifa"  id="pWifi">wifi</p>
                            <p class="contenidoSubtarifa">Vel. subida: ${item.subtarifa_velocidad_conexion_subida}</p>
                            <p class="contenidoSubtarifa">Vel. bajada: ${item.subtarifa_velocidad_conexion_bajada}</p>
                        </div>`
                    break;
                case 1: //movil
                    return `
                        <div class="cajaTarifa">
                            <p class="tituloSubtarifa" >movil</p>
                            <p class="contenidoSubtarifa">Precio por minuto: ${item.subtarifa_cent_minuto}$</p>
                            <p class="contenidoSubtarifa">Est. llamada: ${item.subtarifa_est_llamada}$</p>
                        </div>`
                break;
                default:
                    return`
                        <div class="cajaTarifa">
                        
                        </div>`
            }
        })
    }
    let arrayDivs = tarifas.map((item, i) => {
        return `
            <div class="cajaTarifaGeneral">                
                <div class="tituloTarifa">
                    <p class="parrafo parrafoTitle">${item.nombretarifa}</p><br>
                    <p class="parrafo parrafoSubitle">${item.pretitulo}</p><br>
                    <p class="cajaTarifaGeneral__price">${item.precio}$ / mes</p>
                </div>
                ${subtarifa(item.subtarifas).join('')}
                <div class="cajaTarifaGeneral__divBtn">
                    <a href="#tarifa/${item.slug}" class="btn-width generic-btn grad pointer" type="button">Mas detalles</a>
                </div>
            </div>`
    });
    
    return arrayDivs.join('');
    
}

export {
    /**
     * print a div with relevant information using grid layout
     * @function
     * @param {object} tar -Its the information which it use to create the html.
     * @returns {String} A string with html structure.
     */
    tarifa
    };


  