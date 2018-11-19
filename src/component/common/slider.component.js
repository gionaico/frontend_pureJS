/** @module sliderComponent */
let sliderComponent = function (data) {
    
    let arrayDivs=data.map((item, i) => {
        /* <div class="div-slide__logo" style="background-image: url('${item.image}')"></div>     tras segunda linea*/
        return `
            <div class="fg-content div-slide text-center">
                <div class="div-slide__bloque-logo">
                    <div id="title_slider" class="div-slide__caja-title">${item.key.substring(10)}</div>
                </div>    
                <a href="#about-me" class="div-slide__link">
                    Link a la tarifa
                </a>
            </div>
            <img src="${item.image}" alt="">`
    });

    let divs=arrayDivs.join('');

    return `
        <div class="fg-slider" id="slider-1">
            ${divs}
        </div>
    `;  
}

export {
    /**
     * print the carrousel
     * @function
     * @param {object} data -Its the information which it use to create the html.
     * @returns {String} A string with html structure.
     */
    sliderComponent
};