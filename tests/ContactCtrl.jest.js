const index = require('../src/index.js');
const $ = require('jquery');
import ContactController from '../src/controllers/ContactCtrl';

jest.mock('../src/controllers/HomeCtrl'); // HomeController is now a mock constructor

beforeEach(() => {
    ContactController.mockClear();
});


it('We can check if the HomeController can be called', () => {
    const contact = new ContactController();
    expect(ContactController).toHaveBeenCalledTimes(1);
});