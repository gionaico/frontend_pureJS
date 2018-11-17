export default class ViewComponent {
    constructor() {
    }

    buildHtml(renderFunc, elmentId, currentPage) {
        console.log("----------ViewComponent")
        try {
            document.getElementById(`${elmentId}`).innerHTML = renderFunc;
        } catch (e) {
            console.log(`error ctrl ${currentPage}`, e)
        };
    }
  
}


