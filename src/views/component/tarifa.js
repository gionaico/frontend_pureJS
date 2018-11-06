/** @module tarifa/html */

let tarifa = function (tar) {
    return `
        <div class="h">${tar.nombretarifa}</div>
    `;  
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