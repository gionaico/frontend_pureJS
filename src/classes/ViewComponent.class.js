/**
 * This is a super Class ViewComponent
 * Render in DOM html elements.
 * @class
 */
export default class ViewComponent {
    
    /** @constructs */
    constructor() {
    }

    buildHtml(renderFunc, elmentId, currentPage) {
        /* console.log("----------ViewComponent") */
        try {
            document.getElementById(`${elmentId}`).innerHTML = renderFunc;
        } catch (e) {
            console.log(`error ctrl ${currentPage}`, e)
        };
    }
  
}


