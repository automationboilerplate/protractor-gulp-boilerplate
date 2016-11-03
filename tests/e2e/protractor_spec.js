describe("Angular Application protractortest App", () => {

    beforeEach(() => {
        //ignoreSynchronization to false will synchronize for angular app.
      return browser.ignoreSynchronization = false;
    });

    it("Protractor click on github button", () => {
        browser.get("http://protractortest.org");
        element(by.css('.github-button')).click();
        browser.sleep(3000);
    });
});
