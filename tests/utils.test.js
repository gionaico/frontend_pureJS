import {Settings} from '../src/settings';
import {validation, get, cleanError} from '../src/utils';
jest.mock('../src/settings');

beforeEach(() => {
    document.body.innerHTML = `
        <div id="mainFaker">
            <input name="name" id="name" type="text">
            <input name="name2" id="name2" type="text" class="una dos form-error">
        <div>`;
    function fakeDOMLoaded() {
        const fakeEvent = document.createEvent('Event');
        fakeEvent.initEvent('DOMContentLoaded', true, true);
        window.document.dispatchEvent(fakeEvent);
    }
    fakeDOMLoaded();
});

test('This test check if the ---validation--- function change the class of a input.', () => {
    let obj={name:""}
    let valid=validation(obj);
    expect(valid).toBe(false);
    expect(document.getElementById("name").classList.contains("form-error")).toBe(true);
});

test('This test check if the ---cleanError--- function change the class of a input.', () => {
    let valid = cleanError("name2");
    // Creamos el evento.
    var event = document.createEvent('Event');
    /* Definimos el nombre del evento que es 'build'.*/
    event.initEvent('keydown', true, true);
    // Asignamos el evento.
    let elem=document.getElementById("name2");
    elem.dispatchEvent(event);
    expect(elem.classList.contains("form-error")).toBe(false);
});
