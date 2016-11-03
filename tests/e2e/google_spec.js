describe("Non Angular Application google App", () => {

    beforeEach(() => {
        //setting ignoreSynchronization property to true will help the protractor tests not to wait for Angular app.
      return browser.ignoreSynchronization = true;
    });

    it("Google Search by a keyword", () => {
        browser.get("https://www.google.com");
        element(by.css('input#lst-ib')).sendKeys("protractor", protractor.Key.ENTER);
        browser.sleep(3000);
    });
});
