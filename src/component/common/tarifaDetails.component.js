/** @module tarifa/html */

let tarifaDetails = function (tarifa) {
    console.log("tarifas component0000000000", tarifa)
    let subtarifa = function (array) {
        return array.map((item, i) => {
            switch (item.tipo_tarifa) {
                case 5: //tv
                    return `
                        <div class="tarifa-details__subtarifa">
                            <img class="tarifa-details__subtarifa-img" src="./assets/media/tv_tarifa.jpg"/>
                            <div class="tarifa-details__subtarifa-text">
                                <div>
                                    <p class="tarifa-details__subtarifa-text-title centrar-texto">Numero canales </p>        
                                    <p class="centrar-texto">${item.subtarifa_num_canales} canales</p>
                                </div>
                            </div>
                        </div>`
                    break;
                case 4: //internet
                    return `
                        <div class="tarifa-details__subtarifa">
                            <img class="tarifa-details__subtarifa-img" src="./assets/media/wifi_tarifa.jpg"/>
                            <div class="tarifa-details__subtarifa-text">
                                <div>
                                    <p class="tarifa-details__subtarifa-text-title centrar-texto">Bajada </p>        
                                    <p class="centrar-texto">${item.subtarifa_velocidad_conexion_bajada} Mb</p>
                                    <p class="tarifa-details__subtarifa-text-title centrar-texto">Subida</p>        
                                    <p class="centrar-texto">${item.subtarifa_velocidad_conexion_subida} Mb</p> 
                                </div>
                            </div>
                        </div>`
                    break;
                case 1: //movil
                    return `
                        <div class="tarifa-details__subtarifa">
                            <img class="tarifa-details__subtarifa-img" src="./assets/media/mobile_tarifa.jpg"/>
                            <div class="tarifa-details__subtarifa-text">
                                <div>
                                    <p class="tarifa-details__subtarifa-text-title centrar-texto">Precio/Minuto </p>        
                                    <p class="centrar-texto">${item.subtarifa_cent_minuto} centimos</p>
                                    <p class="tarifa-details__subtarifa-text-title centrar-texto">Est. llamada</p>        
                                    <p class="centrar-texto">${item.subtarifa_est_llamada} centimos</p> 
                                </div>
                            </div>
                        </div>`
                    break;
                default:
                    return ``
            }
        })
    }

    

    return `
        <div class="tarifas-details-container center-element margin-elements">        
            ${subtarifa(tarifa.subtarifas).join('')}
            <div class="tarifa-details__subtarifa-divInterno tarifa-details__subtarifa-text tarifa-details__subtarifa-bg">
                <div class="">
                    <p class="centrar-texto">Todo esto por tan solo </p>
                    <p class="centrar-texto tarifa-details__subtarifa-price">${tarifa.precio} €/MES</p>
                </div>
            </div>
        </div>
    `;

}

export {
    /**
     * print a div with relevant information using grid layout
     * @function
     * @param {object} tar -Its the information which it use to create the html.
     * @returns {String} A string with html structure.
     */
    tarifaDetails
};