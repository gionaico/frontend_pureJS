let header = function(company) {
    return `<a class="logo">${company.name}</a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  
      <ul class="menu">
        <li id="goHome" name="home" class="goTo pointer nav-item">
          <a class="nav-link" name="home" href="#home">Home</a>
        </li>
  
        <li id="goContact" name="contact" class="goTo pointer nav-item">
          <a class="nav-link" name="contact" href="#contact">Contact</a>
        </li>
      </ul>`;
}
export {header};