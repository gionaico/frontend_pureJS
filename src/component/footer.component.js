import ViewComponent from "../classes/ViewComponent.class";

/**
 * This is the class HeaderController extends ViewComponent
 * Show Header View.
 * @class 
 */
class FooterController extends ViewComponent {
    /** @constructs */
    constructor(obj) {
        super()
        console.log("FooterController", obj)
        this._company = obj.company;
        this._textos = obj.textos;
        this._label = obj.label;
        super.buildHtml(this.render(), this._label, "FooterController");

    }
    
    /**
     * Render in the element with class main the home wiew.
     * @return {string-html} Its a string with html structure which will be render.
     */
    render() {
        /* console.log(3333333333) */
        return `
            <div class="footer__menu center-inside-elements-flex">
                <ul class="footer__menu-list">
                    <li class="footer__menu-list">
                        <a href="#cookies">Cookies</a>
                    </li>

                    <span class="footer__menu-separador">|</span>

                    <li class="footer__menu-list">
                        <a href="#avisoLegal">Aviso legal</a>
                    </li>

                    <span class="footer__menu-separador">|</span>

                    <li class="footer__menu-list">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            
            <div class="footer__grid">
                <div class="footer__elem1">
                    <div class="footer__elemsTitle">
                        <p>${this._company.name} S.L..</p>
                    </div>
                    <div>
                        <div id="this._companyName">${this._company.name}</div>
                        <div>${this._company.address},</div>
                        <div>${this._company.zipcode} ${this._company.city}, ${this._company.province}, ${this._company.country}.</div>
                        <div>${this._company.name}@info.com</div>
                        <div>${this._company.phone}</div>
                    </div>
                </div>

                <div class="footer__elem2">
                    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit aliquid expedita dolorem pariatur
                        amet nemo dicta, repudiandae totam, inventore natus.</div>
                </div>

                <div class="footer__elem3">
                <div class="footer__elemsTitle">
                    <p>MISIÓN</p>
                </div>
                <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit aliquid expedita dolorem pariatur
                        amet nemo dicta, repudiandae totam, inventore natus.</div>
                </div>

            </div>`;
    }
}
export default FooterController;
