/** @module contact-view */

let view = function (company) {
    return `<div class="contact center-element">
                
                <div class="contact__grid">
                    <form class="contact__gridForm general-padding4">
                        <input name="contact-data" class="contatc__gridForm-elem" type="text" id="nombre" placeholder="Name">
                        <input name="contact-data" class="contatc__gridForm-elem" type="text" id="tlf" placeholder="Phone">
                        <input name="contact-data" class="contatc__gridForm-elem" type="email" id="email" placeholder="Email">
                        <textarea name="contact-data" id="comentario" placeholder="Escribe tu comentario"></textarea>
                        <button class="generic-btn grad pointer" type="button" id="form__button" value="Enviar" >Enviar</button>
                    </form>
                    <div class="general-padding4">
                        <div class="contact-icon__grid">
                            <img class="icon-size" src="./assets/media/icons/marker-solid-icon.svg"/>
                            <div>
                                <p>${company.address}</p>
                                <p>${company.zipcode} ${company.city}</p>
                                <p>${company.province}, ${company.country}</p>
                            </div>
                            
                            <img class="icon-size" src="./assets/media/icons/calendar-icon.svg"/>
                            <p> Lunes-Viernes 9h-20h</p>

                            <img class="icon-size" src="./assets/media/icons/email-solid-icon.svg"/>
                            <p>${company.name}@info.com</p>
                            
                            <img class="icon-size" src="./assets/media/icons/phone-solid-icon.svg"/>
                            <p>${company.phone}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div id="map" width="100%" style="height:500px"></div>`;
   
    /* document.getElementById("result").innerHTML = contact_view;
    initMap(); */
}

export {
    /**
     * print the contact view
     * @function
     * @param {object} company -Its the company information which came from backend.
     * @returns {String} A string with html structure.
     */
    view
};