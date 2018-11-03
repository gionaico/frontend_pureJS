let view = function (company) {
    return `<div class="contact center-element">
                <h1>contact</h1>
                
                <div class="contact__grid">
                    <form class="contact__gridForm general-padding4">
                        <input class="contatc__gridForm-elem" type="text" name="firstname" placeholder="Name">
                        <input class="contatc__gridForm-elem" type="text" name="phone" placeholder="Phone">
                        <input class="contatc__gridForm-elem" type="email" name="email" placeholder="Email">
                        <textarea name="textarea" placeholder="Escribe tu comentario"></textarea>
                        <button class="contatc__gridForm-btn grad" type="button" id="form__button" value="Enviar" >Enviar</button>
                    </form>
                    <div>otro div</div>
                </div>

                <div id="map" width="100%" style="height:500px"></div>
            </div>`;
   
    /* document.getElementById("result").innerHTML = contact_view;
    initMap(); */
}

export {view};