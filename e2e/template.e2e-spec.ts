import {browser, by, element} from "protractor";

describe('Template', () => {

    beforeAll(() => {
        browser.get('/custom');
    });

    it('navigate to template', () => {

        const h2 = element(by.css('header h2')).getText();

        expect(h2).toEqual('Custom Pipe & Directive');
    });

    it('test pipelindrome', () => {
        element(by.id('palindrome')).sendKeys('hello');

        const p = element(by.id('palindrome_result')).getText();


        expect(p).toEqual('olleh');
    });

});