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
    // describe("filling in the form", () => {
    //   it("should add text to userID input", () => {
    //     cy.get("#userId").click().type("1");
    //   });
    //   it("should add text to Title input", () => {
    //     cy.get("#title").click().type("1");
    //   });
    //   it("should add text to Post input", () => {
    //     cy.get("#post-form").click().type("1");
    //   });
    // });
    describe("show error for incomplete fields", () => {
      it("should try to submit incomplete form", () => {
        cy.get("#form-submit").click();
      });
      it("should find the toast error - fill in form", () => {
        cy.get("#form-submit")
          .click()
          .get(".Toastify__toast-body > :nth-child(2)");
      });
      // it("should ", () => {
      //   cy.get("#u28j0n2");
      // });
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
    it("should find and close the close button", () => {
      cy.get(".form-group span", { timeout: 10000 }).click();
    });
  });
});
