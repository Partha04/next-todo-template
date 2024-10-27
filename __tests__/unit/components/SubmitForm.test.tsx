//  After submitting the form, the task should be added to the list and saved in the database.
//  The form should have validation to prevent empty or invalid inputs.

import { SubmitForm } from "@/component/SubmitForm";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect } from "@jest/globals";
import { PrioritiesList } from "@/constants/prority";

describe("Submit Form Test", () => {
  test("should have a form", () => {
    render(<SubmitForm createTask={jest.fn()} />);
    const form = screen.getByRole("form");
    expect(form).toBeInstanceOf(HTMLFormElement);
  });

  test("Should have a Title input field", () => {
    render(<SubmitForm createTask={jest.fn()} />);
    const titleInput: HTMLInputElement = screen.getByLabelText("Title");
    expect(titleInput).toBeInstanceOf(HTMLInputElement);
    expect(titleInput.type).toBe("text");
  });

  test("Should have a Description input field", () => {
    render(<SubmitForm createTask={jest.fn()} />);
    const descripptionInput: HTMLInputElement =
      screen.getByLabelText("Description");
    expect(descripptionInput).toBeInstanceOf(HTMLInputElement);
    expect(descripptionInput.type).toBe("text");
  });

  test("Should have a Priority select field", () => {
    render(<SubmitForm createTask={jest.fn()} />);
    const prioritySelectInput: HTMLSelectElement =
      screen.getByLabelText("Priority");
    expect(prioritySelectInput).toBeInstanceOf(HTMLSelectElement);
    PrioritiesList.forEach((option) => {
      const optionElement = screen.getByRole("option", { name: option });
      expect(optionElement).toBeDefined();
      expect(prioritySelectInput).toContain(optionElement);
    });
  });

  test("should have a due date input", () => {
    render(<SubmitForm createTask={jest.fn()} />);
    const dueDateInput: HTMLInputElement = screen.getByLabelText("Due Date");
    expect(dueDateInput).toBeInstanceOf(HTMLInputElement);
    expect(dueDateInput.type).toBe("date");
  });

  test("should have a submit button to submit the form", async () => {
    render(<SubmitForm createTask={jest.fn()} />);
    const submitTaskButton: HTMLButtonElement = screen.getByRole("button", {
      name: "Submit Task",
    });
    expect(submitTaskButton).toBeInstanceOf(HTMLButtonElement);
    expect(submitTaskButton.type).toBe("submit");
  });
  test("should call handleSubmit when form is submitted", async () => {
    const mockCreateTaskFn = jest.fn();
    render(<SubmitForm createTask={mockCreateTaskFn} />);

    const titleInput = screen.getByLabelText("Title");
    const descriptionInput = screen.getByLabelText("Description");
    const prioritySelectInput = screen.getByLabelText("Priority");
    const dueDateInput = screen.getByLabelText("Due Date");
    const submitTaskButton = screen.getByRole("button", {
      name: "Submit Task",
    });

    fireEvent.change(titleInput, { target: { value: "title" } });
    fireEvent.change(descriptionInput, { target: { value: "description" } });
    fireEvent.change(prioritySelectInput, { target: { value: "low" } });
    fireEvent.change(dueDateInput, { target: { value: "2024-07-18" } });

    fireEvent.click(submitTaskButton);

    await waitFor(() =>
      expect(mockCreateTaskFn).toBeCalledWith({
        description: "description",
        dueDate: "2024-07-18",
        priority: "low",
        title: "title",
      })
    );
  });
});
