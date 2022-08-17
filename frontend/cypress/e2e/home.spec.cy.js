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
    // describe("search postId", () => {
    //   beforeEach(() => {
    //     cy.get("#search-postId").click().type("2");
    //   });
    //   it("should find search user input", () => {
    //     cy.get("#search-postId").click().type("2");
    //   });
    //   it("should find posts by user: 2", () => {
    //     cy.contains("User: 1");
    //   });
    //   it("should have only 1 post match post id", () => {
    //     cy.get(".posts").children().should("have.length", 1);
    //   });
    // });
    // describe("return to top btn", () => {
    //   beforeEach(() => {
    //     cy.scrollTo(0, 100000);
    //   });
    //   it("should click return to top btn", () => {
    //     cy.get(".return-to-top").click();
    //   });
    //   it("should see search bars", () => {
    //     cy.get("#search-user").should("be.visible");
    //   });
    // });
    describe("edit and delete", () => {
      describe("edit btn", () => {
        beforeEach(() => {
          cy.get(":nth-child(1) > :nth-child(1) > div > .btn-edit").click();
        });
        it("should have info about post 1", () => {
          cy.get(".heading").contains("Post 1");
        });
        it("should submit title change and find new title", () => {
          cy.get("#title-form")
            .click()
            .type(
              "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace} New Title"
            )
            .get('[type="submit"')
            .click()
            .get(":nth-child(1) > h3")
            .contains("New Title");
        });
        it("should click delte btn from edit page", () => {
          cy.get(".btn-delete").click();
        });
      });
      describe("delete btn", () => {
        beforeEach(() => {
          cy.get(":nth-child(1) > :nth-child(1) > div > .btn-delete").click();
        });
        it("should not find post 1", () => {
          cy.contains("ID: 1").should("not.exist");
        });
      });
    });
  });
});
