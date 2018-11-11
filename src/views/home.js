/** @module home-view */

let view = function (datos) {
    return `      
        <div class="home-container center-element margin-elements">
            <div class="general-padding">
                <p id="cajaDerTit" class="home-container__title">${datos[0].caja_derecha_titulo}</p>                
                ${datos[0].caja_derecha_texto}
            </div>
            <div class="general-padding">
                <p class="home-container__title">${datos[0].caja_izquierda_titulo}</p>  
                ${datos[0].caja_izquierda_texto}
            </div>
        </div>
        `;
}

export {
    /**
     * print the home view
     * @function
     * @param {object} datos -Its the home text.
     * @returns {String} A string with html structure.
     */
    view
    };