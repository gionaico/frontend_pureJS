let view = function (datos) {
    return `
        <h1 class="general-padding">${datos[0].titulo}</h1>
        <div class="contact-container center-element">
            <div class="general-padding">${datos[0].caja_derecha_texto}</div>
            <div class="general-padding">${datos[0].caja_izquierda_texto}</div>
        </div>`;
}

export {view};