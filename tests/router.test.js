import {Router} from '../src/router';
import ContactController from '../src/component/Contact.component';
jest.mock('../src/component/Contact.component');

test('This test check if the ---Router-ADD--- function.', () => {
    let add = Router.add("/cookies/", function () {
        console.log("cookies");
        new ContactController();
    })
    let valor=add.routes[0].re
    expect(valor).toBe("/cookies/");
});

test('This test check if the ---Router-clearSlashes--- function.', () => {
    let slashes = Router.clearSlashes(/cookies/)
    expect(slashes).toBe("cookies");
});

