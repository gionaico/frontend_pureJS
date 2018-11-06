/** @module header-view */

let header = function(company) {
    return `
      <div class="header__top">
        <div class="centrado-vertical">
          <a href="${company.facebook}">
            <img class="header__topIcon" src="./assets/media/facebook.svg" alt="facebook"></img>
          </a>
          <a href="${company.twitter}">
            <img class="header__topIcon" src="./assets/media/twitter.svg" alt="facebook"></img>
          </a>
          <a href="https://plus.google.com/u/0/106766151740944187929">
            <img class="header__topIcon" src="./assets/media/google-plus.svg" alt="facebook"></img>
          </a>
        </div>
        <div>
            
        </div>
      </div>
      
      <div class="header__menu .centrado-vertical">
        <a class="header__logo" href="#home">
          <img src="${company.logo}" class="header__menu-logo"></img>
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    
        <ul class="menu">
          <li id="goHome" name="home" class="goTo pointer nav-item">
            <a class="nav-link" name="home" href="#home">Home</a>
          </li>
    
          <li id="goContact" name="contact" class="goTo pointer nav-item">
            <a class="nav-link" name="contact" href="#contact">Contact</a>
          </li>
        </ul>
      <div>`;
}
export {
  /**
   * print the contact view
   * @function
   * @param {object} company -Its the company information which came from backend.
   * @returns {String} A string with html structure.
   */
  header
  };