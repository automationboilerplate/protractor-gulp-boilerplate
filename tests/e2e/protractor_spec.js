describe("Angular Application protractortest App", () => {

    beforeEach(() => {
        //setting ignoreSynchronization property to true will help the protractor tests not to wait for Angular app.
      return browser.ignoreSynchronization = false;
    });

    it("Search by a keyword", () => {
        browser.get("http://protractortest.org");
        element(by.css('.github-button')).click();
        browser.sleep(3000);
    });
});