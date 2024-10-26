describe("button.cy.tsx", () => {
  it("playground", () => {
    cy.mount(<button>Submit</button>);
    cy.get("button").contains("Submit").click();
  });
});
