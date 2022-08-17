describe("Home Page", () => {
  //visit home
  beforeEach(() => {
    cy.visit("/");
  });

  //add post btn
  // context("form", () => {
  //   beforeEach(() => {
  //     cy.contains("Add a post!").click();
  //   });
  //   describe("filling in the form", () => {
  //     it("should add text to userID input", () => {
  //       cy.get("#userId").click().type("1");
  //     });
  //     it("should add text to Title input", () => {
  //       cy.get("#title").click().type("1");
  //     });
  //     it("should add text to Post input", () => {
  //       cy.get("#post-form").click().type("1");
  //     });
  //   });
  //   describe("show error for incomplete fields", () => {
  //     it("should try to submit incomplete form", () => {
  //       cy.get("#form-submit").click();
  //     });
  //     it("should find the toast error - fill in form", () => {
  //       cy.get("#form-submit")
  //         .click()
  //         .get(".Toastify__toast-body > :nth-child(2)");
  //     });
  //   });
  //   it("should find and close the close button", () => {
  //     cy.get(".form-group span", { timeout: 10000 }).click();
  //   });
  // });
  context("search", () => {
    // describe("search UserId", () => {
    //   beforeEach(() => {
    //     cy.get("#search-user").click().type("2");
    //   });
    //   it("should find search user input", () => {
    //     cy.get("#search-user").click().type("2");
    //   });
    //   it("should find posts by user: 2", () => {
    //     cy.contains("User: 2");
    //     expect(".posts").to.not.contains("User: 1");
    //   });
    //   it("should backspace input", () => {
    //     cy.get("#search-user").type("{backspace}");
    //   });
    // });
    describe("search postId", () => {
      beforeEach(() => {
        cy.get("#search-postId").click().type("2");
      });
      it("should find search user input", () => {
        cy.get("#search-postId").click().type("2");
      });
      it("should find posts by user: 2", () => {
        cy.contains("User: 1");
        expect(".posts").length;
      });
      //  it("should ", () => {
      //   cy.
      //  });
    });
  });
});
