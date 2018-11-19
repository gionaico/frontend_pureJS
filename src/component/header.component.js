import ViewComponent from "../classes/ViewComponent.class";

/**
 * This is the class HeaderController extends ViewComponent
 * Show Header View.
 * @class 
 */
class HeaderController extends ViewComponent{
    /** @constructs */
    constructor(obj) {
        super()
        console.log("HeaderController", obj)
        this._company=obj.company;
        this._label = obj.label;
        this._textos = obj.textos;
        super.buildHtml(this.render(), this._label, "HeaderController");
        
    }  
    /**
     * Change the languege in the menu
     */
    set(texto){
        /* console.log(222222222222, texto) */
        this._textos=texto;
        document.getElementById("menu").innerHTML = `
            
                <li id="goHome" name="home" class="goTo pointer nav-item">
                    <a class="nav-link" name="home" href="#home">${this._textos.Home}</a>
                </li>
                
                <li id="goTarifas" name="tarifas" class="goTo pointer nav-item">
                    <a class="nav-link" name="tarifas" href="#tarifas">${this._textos.Rates}</a>
                </li>

                <li id="goCatalogo" name="catalogo" class="goTo pointer nav-item">
                    <a class="nav-link" name="catalogo" href="#catalogo">${this._textos.Catalogue}</a>
                </li>
            
                <li id="goContact" name="contact" class="goTo pointer nav-item">
                    <a class="nav-link" name="contact" href="#contact">${this._textos.Contact}</a>
                </li>

                `
    }

    /**
     * Render in the element with class main the home wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    render() {
        /* console.log(3333333333) */
        return `
            <div class="header__top">
                <div class="centrado-vertical">
                <a id="facebook" href="${this._company.facebook}">
                    <img class="header__topIcon" src="./assets/media/facebook.svg" alt="facebook"></img>
                </a>
                <a href="${this._company.twitter}">
                    <img class="header__topIcon" src="./assets/media/twitter.svg" alt="facebook"></img>
                </a>
                <a href="https://plus.google.com/u/0/106766151740944187929">
                    <img class="header__topIcon" src="./assets/media/google-plus.svg" alt="facebook"></img>
                </a>
                </div>

                <div class="header__top-language">
                    <img id="es" name="lng_click" class="header__topIcon margin_lng-icons pointer" src="./assets/media/lng/es.svg" alt="spanish"></img>
                    <img id="ca" name="lng_click" class="header__topIcon margin_lng-icons pointer" src="./assets/media/lng/ca.svg" alt="catalan"></img>
                </div>
            </div>
            
            <div class="header__menu .centrado-vertical">
                <a class="header__logo" href="#home">
                    <img src="${this._company.logo}" class="header__menu-logo"></img>
                </a>
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            
                <ul id="menu" class="menu">
                    <li id="goHome" name="home" class="goTo pointer nav-item">
                        <a class="nav-link" name="home" href="#home">${this._textos.Home}</a>
                    </li>
                    
                    <li id="goTarifas" name="tarifas" class="goTo pointer nav-item">
                        <a class="nav-link" name="tarifas" href="#tarifas">${this._textos.Rates}</a>
                    </li>

                    <li id="goCatalogo" name="catalogo" class="goTo pointer nav-item">
                        <a class="nav-link" name="catalogo" href="#catalogo">${this._textos.Catalogue}</a>
                    </li>
                
                    <li id="goContact" name="contact" class="goTo pointer nav-item">
                        <a class="nav-link" name="contact" href="#contact">${this._textos.Contact}</a>
                    </li>

                </ul>
            <div>`;
    }
}
export default HeaderController;

