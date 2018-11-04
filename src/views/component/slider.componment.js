
let sliderComponent = function (data) {
    
    let arrayDivs=data.map((item, i) => {
        return `
            <div class="fg-content div-slide text-center">
                <div class="div-slide__bloque-logo">
                    <div class="div-slide__logo" style="background-image: url('${item.logo}')"></div>
                    <div class="div-slide__caja-title">${item.nombretarifa}</div>
                </div>    
                <a href="#about-me" class="div-slide__link">
                    Link a la tarifa
                </a>
            </div>
            <img src="./assets/media/${item.slug}.jpg" alt="">`
    });

    let divs=arrayDivs.join('');

    return `
        <div class="fg-slider" id="slider-1">
            ${divs}
        </div>
    `;  
}

export {sliderComponent};