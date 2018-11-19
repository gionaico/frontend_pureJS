/** @module articulos/html */

let articulo = function (articulos) {
    console.log("articulos component", articulos)
    let articulosStructure = function (array) {
        return array.map((item, i) => {
            return `
                <div>
                    <div class="article-container__divImg">
                        <img class="article-container__img" src="${item.imagen}" alt="">
                    </div>
                    <div class="article-container__info">
                        <div>
                            <p class="article-container__padding article-container__pvp">${item.pvp} €</p>
                            <p class="article-container__padding">${item.descripcion}</p>
                            <p class="article-container__pTitle article-container__padding">${item.descripcion_breve}</p>
                        </div>
                    </div>
                    <div class="article-container__btnContainer article-container__padding">
                        <a href="#tarifa" class="justify-self btn-width generic-btn grad pointer" type="button">Mas detalles</a>
                    </div>
                </div>
                `            
        })
    }   

    return articulosStructure(articulos).join('');

}

export {
    /**
     * print a div with relevant information using grid layout
     * @function
     * @param {object} tar -Its the information which it use to create the html.
     * @returns {String} A string with html structure.
     */
    articulo
};