describe("Navbar", () => {
  //visit home
  beforeEach(() => {
    cy.visit("/");
  });
  it("should click Find Universities", () => {
    cy.contains("Find Universities")
      .click()
      .get(".heading")
      .contains("Universities in Canada");
  });
  it("should click Postal Search", () => {
    cy.contains("Postal Search")
      .click()
      .get(".heading")
      .contains("Local information in United States");
  });
  it("should navigate home with logo click", () => {
    cy.contains("Postal Search").click().get(".logo").click();
  });
  it("should click home to navigate back to home page", () => {
    cy.contains("Find Universities")
      .click()
      .get(".header-link > :nth-child(1) > a")
      .click();
  });
});
