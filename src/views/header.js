let header = function(company) {
    return `
      <div class="header__top">
        <div class="centrado-vertical">
          <a href="https://www.facebook.com/giovannyINT">
            <img class="header__topIcon" src="./assets/media/facebook.svg" alt="facebook"></img>
          </a>
          <a href="https://twitter.com/gionaico">
            <img class="header__topIcon" src="./assets/media/twitter.svg" alt="facebook"></img>
          </a>
          <a href="https://plus.google.com/u/0/106766151740944187929">
            <img class="header__topIcon" src="./assets/media/google-plus.svg" alt="facebook"></img>
          </a>
        </div>
        <div>
            
        </div>
      </div>
      
      <div class="header__menu">
        <a class="header__logo">${company.name}</a>
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
export {header};