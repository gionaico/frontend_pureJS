const index = require('../src/index.js');
const $ = require('jquery');
import ContactController from '../src/component/Contact.component';

jest.mock('../src/component/Contact.component'); // HomeController is now a mock constructor

beforeEach(() => {
    ContactController.mockClear();
});


it('We can check if the HomeController can be called', () => {
    const contact = new ContactController();
    expect(ContactController).toHaveBeenCalledTimes(1);
});