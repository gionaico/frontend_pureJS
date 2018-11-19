/** @module hero */
let hero= function(title, grad, img=null){
    if (img) {
        return `<div class="banner" style="background-image: url('${img}')"></div> `
    }
        return `
            <div class="banner ${grad} center-inside-elements-flex" >
                <div class="titleHero">${title}</div>
            </div>`;
};
export {
    /**
     * print the hero component
     * @function
     * @param {String} title -Its the string that i use as hero title.
     * @param {String} grad  -Its the background color wich it will be the hero component.
     * @param {String} img -Its the src image to use as background.
     * @returns {String} A string with html structure.
     */
    hero
    }