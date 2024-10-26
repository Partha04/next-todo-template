import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Test jest setup", () => {
  test("should pass", () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
  });

  test("should click button", () => {
    //arrange
    const onClickMock = jest.fn();
    render(<button onClick={onClickMock}>Submit</button>);
    const button: HTMLButtonElement = screen.getByRole("button", {
      name: "Submit",
    });
    //act
    fireEvent.click(button);
    //assert
    expect(onClickMock).toHaveBeenCalled();
  });
});
