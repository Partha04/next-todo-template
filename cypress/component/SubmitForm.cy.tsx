import { SubmitForm } from "@/component/SubmitForm";

describe("SubmitForm Component Test", () => {
  it("calls createTask with correct values on form submission", () => {
    const mockCreateTask = cy.spy().as("mockCreateTask");

    cy.mount(<SubmitForm createTask={mockCreateTask} />);

    // Fill out form fields
    cy.get('input[id="title"]').type("title");
    cy.get('input[id="description"]').type("description");
    cy.get('select[id="priority"]').select("low");
    cy.get('input[id="dueDate"]').type("2024-07-18");

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify that createTask was called with the correct data
    cy.get("@mockCreateTask").should("have.been.calledWith", {
      title: "title",
      description: "description",
      priority: "low",
      dueDate: "2024-07-18",
    });
  });
});
