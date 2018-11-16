#Proyecto con JS 
* Unit battery testing with jest
* PAckaged with webpack
* Transpiled with babel
* Documented with jsdoc
* Literal Templeates

#TIPS
To solve some jest testing problems I've been forced to install

npm install babel-core@7.0.0-bridge.0 --save-dev




1. arranque de backend desde WIFIBYTES es decir el virtualenv
    source Wifibytes/bin/activate

 2. cd Wifibytes/wifibytes-server-django/wifibytes/
    python manage.py runserver --settings=wifibytes.settings.local
    http://localhost:8000/

3. arrancar el frontend 
    cd Wifibytes/wifibytes-client-daw/
    npm run start
    http://localhost:8080/
    

    document.getElementsByTagName(`${prop}`).classList.add("form-error");
    document.getElementById("div1").classList.remove("classToBeRemoved");
    document.getElementsByTagName(`${prop}`).setAttribute("class", "form-error");

    let pe = document.getElementsByName("contact-data");
    pe.forEach((el) => {
        el.addEventListener('keydown', (e) => {
            document.querySelector(`#${e.target.id}`).classList.remove("form-error");
        });
    });

    pe.forEach((el) => {
        el.addEventListener('focus', (e) => {
            document.querySelector(`#${e.target.id}`).classList.remove("form-error");
        });
    });