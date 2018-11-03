
let sliderComponent = function (data) {
    
    let arrayDivs=data.map((item, i) => {
        return `
            <div class="fg-content mio text-center">
                <p>${i}</p>
                <a href="#about-me" class="btn hover">
                    <i class="fa fa-angle-right" aria-hidden="true"></i> More about me...
                </a>
            </div>
            <img src="https://cdn.cnn.com/cnnnext/dam/assets/161021133655-img-worlds-velociraptor-super-169.jpg" alt="">`
    });

    let divs=arrayDivs.join('');

    return `
        <div class="fg-slider" id="slider-1">
            ${divs}
        </div>
    `;  
}

export {sliderComponent};