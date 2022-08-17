describe("Home Page", () => {
  //visit home
  beforeEach(() => {
    cy.visit("/");
  });

  //add post btn
  context("form", () => {
    beforeEach(() => {
      cy.contains("Add a post!").click();
    });

    it("should find the form", () => {
      cy.contains("Add a post!").click();
    });
    //  it("should ", () => {
    //   cy.
    //  });
    //  it("should ", () => {
    //   cy.
    //  });
    //  it("should ", () => {
    //   cy.
    //  });
    //  it("should ", () => {
    //   cy.
    //  });
    //  it("should ", () => {
    //   cy.
    //  });
    //  it("should ", () => {
    //   cy.
    //  });
  });
});
