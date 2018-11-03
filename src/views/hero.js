let hero= function(title, grad, img=null){
    if (img) {
        return `<div class="banner" style="background-image: url('${img}')"></div> `
    }
        return `
            <div class="banner ${grad} center-inside-elements-flex" >
                <div class="titleHero ">${title}</div>
            </div>`;
};
export {hero}